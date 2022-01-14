import { Injectable } from '@angular/core';
import {Station} from "../entities/station";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Metric} from "../entities/metric";

@Injectable({
  providedIn: 'root'
})
export class StationServiceService {



  constructor(private http: HttpClient) { }

  

  public getStations(): Observable<Station[]> {
    return this.http.get<Station[]>('http://127.0.0.1:8082/stations')
  }

  public getStation( stationId: number ): Observable<Station> {
    return this.http.get<Station>(`http://127.0.0.1:8082/stations/${stationId}`)
  }

  public getMetric(stationId: number): Observable<Metric[]> {
    return this.http.get<Metric[]>(`http://127.0.0.1:8082/station/${stationId}/metric`)
  }
  
  public addStation(body: Station): Observable<Station> {
    return this.http.post<Station>('http://127.0.0.1:8082/stations/', body)
  }

}
