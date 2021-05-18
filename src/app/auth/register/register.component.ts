import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FireService } from 'src/app/fire.service';
import { CouponDTO } from 'src/app/shared/models/Coupon';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  message = '';

  constructor(
    private auth: AuthService,
    private fire: FireService,
    public router: Router,
    public fb: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {}

  attachVendorControls() {}

  onSubmit() {
    if (this.form.valid) {
      const email = this.form.value['email'];
      const password = this.form.value['password'];
      const nickname = this.form.value['nickname'];
      const role = this.form.value['role'];
      const storeAddress = this.form.value['storeAddress'];
      const nip = this.form.value['nip'];

      this.auth
        .register(email, password, { nickname, role })
        .then((value: any) => {
          const authUid = value.user.uid;
          let userData: any = {
            email,
            password,
            name: nickname,
            role: role,
          };

          if (this.form.value['role'] === 'vendor') {
            userData = { ...userData, storeAddress, nip };
          }
          if (this.form.value['role'] === 'customer') {
            let coupons: CouponDTO[] = [];
            userData = { ...userData, coupons };
          }

          this.fire.addUserToCollection(role, authUid, userData);
          this.router.navigate(['auth/log-in']);
        })

        .catch((error) => {
          console.log('Something went wrong: ', error);
          this.message = error.message;
        });
    }
  }

  initForm() {
    let group = {};

    group['email'] = new FormControl('', [
      Validators.email,
      Validators.required,
    ]);
    group['password'] = new FormControl('', [
      Validators.min(8),
      Validators.required,
    ]);
    group['nickname'] = new FormControl('', [Validators.min(2)]);
    group['role'] = new FormControl('vendor', [Validators.required]);

    group['storeAddress'] = new FormControl('');
    group['nip'] = new FormControl('', [
      Validators.maxLength(10),
      Validators.minLength(10),
      Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ]);
    this.form = this.fb.group(group);
  }

  resetForm(): void {
    this.form.reset();
    this.initForm();
  }
}
