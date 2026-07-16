import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),

    provideFirebaseApp(() => initializeApp({
      projectId: "multiservicios-app-c9add",
      appId: "1:1035281339491:web:643ca92be33ff9f0149456",
      storageBucket: "multiservicios-app-c9add.firebasestorage.app",
      apiKey: "AIzaSyD8tEMpwQfs-oetH_s-lsYACZkztEJa7dk",
      authDomain: "multiservicios-app-c9add.firebaseapp.com",
      messagingSenderId: "1035281339491",
      measurementId: "G-PSLVSSB8GJ"
    })),

    provideFirestore(() => getFirestore())
  ]
};
