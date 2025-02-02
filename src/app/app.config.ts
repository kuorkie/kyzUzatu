import {ApplicationConfig, EnvironmentProviders, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environment';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
const fbApp = () => initializeApp(environment.firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(fbApp),
    provideFirestore(()=>getFirestore()),
  ]
};
