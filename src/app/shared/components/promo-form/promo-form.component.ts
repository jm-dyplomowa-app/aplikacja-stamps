import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

import { finalize, take } from 'rxjs/operators';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { FireService } from 'src/app/fire.service';
import { UserDTO, VendorDTO } from 'src/app/shared/models/User';
import { selectAuthUserProfile } from 'src/app/auth';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/app-state';
import { DocumentReference } from '@angular/fire/firestore';
import { PromoDTO } from 'src/app/shared/models/Promo';

@Component({
  selector: 'app-promo-form',
  templateUrl: './promo-form.component.html',
  styleUrls: ['./promo-form.component.scss'],
})
export class PromoFormComponent implements OnInit, OnDestroy {
  @Input() promo: PromoDTO = null;
  @Output() editItem: EventEmitter<UserDTO> = new EventEmitter();
  @ViewChild('userPhoto') photo: ElementRef;
  sub: Subscription = new Subscription();
  user$: Observable<UserDTO> = this.store.select(selectAuthUserProfile);
  user: VendorDTO = null;
  form: FormGroup;
  selectedFile: File = null;
  downloadURL: Observable<string>;
  uploadDone = false;
  url = '';
  message = '';
  bytesTotal = 0;
  bytesTransferred = 0;
  percentage = 0;

  constructor(
    public fb: FormBuilder,
    private fire: FireService,
    private store: Store<AppState>
  ) {
    this.sub.add(this.user$.subscribe((user: VendorDTO) => (this.user = user)));
  }

  ngOnInit(): void {
    this.initForm();
    if (this.promo) {
      this.loadPromo();
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private loadPromo() {
    this.form.patchValue({
      promoName: this.promo.promoName,
      promoDescription: this.promo.promoDescription,
      prizeDescription: this.promo.prizeDescription,
      prizeQuantity: this.promo.prizeQuantity,
      pointsEntry: this.promo.pointsEntry,
      pointsRedeem: this.promo.pointsRedeem,
      participantsTable: this.promo.participantsTable,
      participantsTotal: this.promo.participantsTotal,
      vendorId: this.promo.vendorId,
      vendorEmail: this.promo.vendorEmail,
      vendorStoreAddress: this.promo.vendorStoreAddress,
      pid: this.promo.pid,
      createdOn: this.promo.createdOn,
      imageRef: this.promo.imageRef,
    });
    this.url = this.promo.imageRef;
    this.uploadDone = true;
  }

  checkIfImage(filename: string) {
    let name = filename.toLocaleLowerCase();
    if (
      name.includes('.jpg') ||
      name.includes('.png') ||
      name.includes('gif')
    ) {
      return true;
    }

    return false;
  }

  onFileSelected(event) {
    let n = Date.now();
    const file = event.target.files[0];

    if (this.checkIfImage(file.name)) {
      const filePath = `promo-images/${n}`;
      const fileRef = this.fire.storage.ref(filePath);
      const task = this.fire.storage.upload(`promo-images/${n}`, file);
      task
        .snapshotChanges()
        .pipe(
          finalize(() => {
            this.downloadURL = fileRef.getDownloadURL();
            this.downloadURL.subscribe((url: string) => {
              if (url) {
                this.url = url;
                this.form.patchValue({ imageRef: url });
              }
            });
          })
        )
        .subscribe((uploadingProccess: UploadTaskSnapshot) => {
          if (uploadingProccess) {
            const percentage =
              (uploadingProccess.bytesTransferred /
                uploadingProccess.totalBytes) *
              100;

            this.percentage = Math.floor(percentage);
            if (percentage === 100) {
              this.uploadDone = true;
            }
          }
        });
    } else {
      this.message = 'Proszę przesyłać pliki .jpg i .png.';
    }
  }

  onSubmit(): void {
    this.submitForm();
  }

  submitForm(): void {
    this.message = '...';

    if (this.promo) {
      this.submitFormUpdate();
    } else {
      if (confirm('Czy na pewno chcesz dodać promocję?')) {
        this.submitFormCreate();
      }
    }
  }

  submitFormCreate(): void {
    if (this.url && this.user) {
      const documentPure = this.composePurePromoDTO(this.user);

      this.fire
        .getPromosCollectionRef()
        .add(documentPure)
        .then((data: DocumentReference) => {
          let id: string = data.id;
          const newDocument = { ...documentPure, pid: id };
          const newDocumentPure = Object.assign({}, newDocument);

          this.fire
            .getPromosCollectionRef()
            .doc(id)
            .set({
              ...newDocumentPure,
            })
            .then(() => {
              const promos: any[] = [...this.user.promos, id];

              this.fire
                .getUsersCollectionRef()
                .doc(this.user.uid)
                .update({ promos: promos })
                .catch((e) => console.log('err', e));
            })
            .catch((e) => (this.message = e));
        })
        .catch((e) => (this.message = e))
        .finally(() => (this.message = 'Promocja została utworzona.'));
    } else {
      this.message = 'Nie udało się stworzyć promocji.';
    }
  }

  submitFormUpdate(): void {
    this.user$.pipe(take(1)).subscribe((auth: VendorDTO) => {
      if (auth) {
        const documentPure = this.composePurePromoDTO(auth, this.promo);

        this.fire
          .getPromosCollectionRef()
          .doc(this.promo.pid)
          .set(documentPure)
          .catch((e) => (this.message = e))
          .finally(() => (this.message = 'Promocja została zaktualizowana.'));
      } else {
        this.message = 'Musisz się zalogować.';
      }
    });
  }

  resetForm(): void {
    this.photo.nativeElement.value = '';
    this.url = '';
    this.message = '';
    this.uploadDone = false;
    this.form.reset();
    this.initForm();
  }

  private composePurePromoDTO(auth: VendorDTO, promo?: PromoDTO): PromoDTO {
    const formData = {
      promoName: this.form.value['promoName'],
      promoDescription: this.form.value['promoDescription'],
      prizeDescription: this.form.value['prizeDescription'],
      prizeQuantity: this.form.value['prizeQuantity'],
      pointsEntry: this.form.value['pointsEntry'],
      pointsRedeem: this.form.value['pointsRedeem'],
    };

    const additionalData = {
      vendorId: auth.uid,
      vendorEmail: auth.email,
      vendorStoreAddress: auth.storeAddress,
      participantsTable: promo?.participantsTable || [],
      participantsTotal: promo?.participantsTotal || 0,
      pid: promo?.pid || '',
      imageRef: promo?.imageRef || this.url,
      createdOn: promo?.createdOn || new Date().toISOString().split('T')[0],
    };

    const document: PromoDTO = {
      ...formData,
      ...additionalData,
    };

    const documentPure = Object.assign({}, document);

    return documentPure;
  }

  private initForm(): void {
    let group = {};

    group['promoName'] = new FormControl('');
    group['promoDescription'] = new FormControl('');
    group['prizeDescription'] = new FormControl('');
    group['prizeQuantity'] = new FormControl('');
    group['pointsEntry'] = new FormControl('');
    group['pointsRedeem'] = new FormControl('');
    group['participantsTable'] = new FormControl('');
    group['participantsTotal'] = new FormControl('');
    group['vendorId'] = new FormControl('');
    group['vendorEmail'] = new FormControl('');
    group['vendorStoreAddress'] = new FormControl('');
    group['pid'] = new FormControl('');
    group['active'] = new FormControl('');
    group['createdOn'] = new FormControl('');
    group['imageRef'] = new FormControl('');

    this.form = this.fb.group(group);
  }
}
