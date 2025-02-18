import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({ projectId: "crm-app-beba5", appId: "1:953915033068:web:e1598720250c7ce743acc9", storageBucket: "crm-app-beba5.firebasestorage.app", apiKey: "AIzaSyD42Gm3vBDd0eyyp1sHTDt8HA1R4oOZLd4", authDomain: "crm-app-beba5.firebaseapp.com", messagingSenderId: "953915033068" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
