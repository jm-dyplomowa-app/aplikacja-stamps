import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { AppState } from './shared/app-state';
import { AnyUserDTO, Role } from './shared/models/User';

@Injectable({
  providedIn: 'root',
})
export class FireService {
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    public db: AngularFirestore,
    public storage: AngularFireStorage
  ) {}

  getUsersCollectionRef(): AngularFirestoreCollection {
    return this.getCollectionRef('users');
  }

  getPromosCollectionRef(): AngularFirestoreCollection {
    return this.getCollectionRef('promos');
  }

  getCouponsCollectionRef(): AngularFirestoreCollection {
    return this.getCollectionRef('coupons');
  }

  async addUserToCollection(role: Role, uid: string, userData: AnyUserDTO) {
    const newUser: AnyUserDTO = {
      uid,
      ...userData,
      role,
      promos: [],
    };

    this.db
      .collection('users')
      .doc(uid)
      .set({ ...newUser })
      .then(() => {
        this.router.navigateByUrl('auth/log-in');
      })
      .catch((error) => {
        console.log('Something went wrong: ', error);
      });
  }

  async createFireAuthAndUser(email: string, password: string, data: any) {
    return await this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  async fireAuthenticate(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['auth/log-in']);
  }

  get fireAuth$(): Observable<User | null> {
    return this.afAuth.user;
  }

  private getCollectionRef(name: string): AngularFirestoreCollection {
    return this.db.collection(name);
  }
}
