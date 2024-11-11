import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadString } from '@angular/fire/storage';
import {Photo} from '@capacitor/camera'

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private  auth: Auth, private firestore: Firestore, private storage: Storage) { }

  getUserProfile(){
    const user = this.auth.currentUser
    const userDocRef = doc(this.firestore, `users/${user?.uid}`);
    return docData(userDocRef, {idField: 'id'})
  }

  async uploadImage(cameraFile:Photo){
    const user = this.auth.currentUser
    const path = `uploads/${user?.uid}/profile.webp`
    const storageRef = ref(this.storage, path)

    try {
      await uploadString(storageRef)
    } catch (error) {
      
    }
  }
}
