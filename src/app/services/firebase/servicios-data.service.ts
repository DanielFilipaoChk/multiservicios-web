import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  query,
  orderBy,
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
    const servicesQuery = query(servicesRef, orderBy('order'));

    return collectionData(servicesQuery, {
      idField: 'id',
    }) as Observable<Service[]>;

  }

}