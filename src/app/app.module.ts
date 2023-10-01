import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { SharedService } from './shared.service';

const firebaseConfig = {
  apiKey: "AIzaSyBWDJy5QFu9DCUamTZIIfIvZx_G4sEwP94",
  authDomain: "to-do-app-f3cc8.firebaseapp.com",
  projectId: "to-do-app-f3cc8",
  storageBucket: "to-do-app-f3cc8.appspot.com",
  messagingSenderId: "792139399593",
  appId: "1:792139399593:web:d9873397f455bbfe84c4b8",
  measurementId: "G-0F0NQ95FZX"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
