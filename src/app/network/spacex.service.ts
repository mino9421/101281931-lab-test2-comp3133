import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject} from 'rxjs';
import { Mission } from '../mission.model';


@Injectable({
  providedIn: 'root'
})

export class SpacexService {

  data: Subject<Mission[]> = new BehaviorSubject<Mission[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<Mission[]>('https://api.spacexdata.com/v3/launches').subscribe(data => {
      this.data.next(data);
    }) 
  }
  getMissionData(): Observable<Mission[]> {
    return this.data.asObservable();
  }
}
