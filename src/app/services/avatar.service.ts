import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { doc, docData, Firestore, setDoc } from '@angular/fire/firestore';
import { getDownloadURL, ref, Storage, uploadString } from '@angular/fire/storage';
import {Photo} from '@capacitor/camera'

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor() { }
}
