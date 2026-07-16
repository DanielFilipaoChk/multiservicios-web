import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Service } from '../../interfaces/service.interface';

@Injectable({
  providedIn: 'root',
})
export class ServiciosDataService {

  private firestore = inject(Firestore);

  getServices(): Observable<Service[]> {

    const servicesRef = collection(this.firestore, 'services');

    return collectionData(servicesRef, {
      idField: 'id',
    }) as Observable<Service[]>;

  }

}