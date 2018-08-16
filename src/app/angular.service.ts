import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AngularService {

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    // db.database.ref('/selections');
  }

  loginWithFacebook() {
    console.log('Login Clicked!');
    return new Promise < any > ((resolve, reject) => {
      const provider = new firebase
                            .auth
                            .FacebookAuthProvider();
      this.afAuth.auth.signInWithPopup(provider)
          .then(res => {
            resolve(res);
          }, err => {
            console.log(err);
            reject(err);
          });
    });
  }

  logout() {
    return new Promise<any> ((resolve, reject) => {
      this.afAuth.auth.signOut()
      .then(res => resolve(res), err => reject(err));
    });
  }

  getList(route: string) {
    return this.db.list(route);
  }

  getObject(route: string) {
    return this.db.object(route);
  }

  updateList(route: string, key: string, item: any) {
    return new Promise<any> ((resolve, reject) => {
      //this.db.list(route).update()
      this.db.list(route).update(key, item)
        .then(res => resolve(res), err => reject(err));
    });
  }

  
}
