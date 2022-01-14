import { Component, OnInit } from '@angular/core';
import {StationServiceService} from "../services/station-service.service";
import {Station} from "../entities/station";

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {

 

  stations: Station[] = []
  constructor(private stationService:StationServiceService) {}



  ngOnInit(): void {
    this.stationService.getStations().subscribe( (st:Station[]) => this.stations = st  );
   
    const ws = new WebSocket('ws://localhost:3000');
    
      ws.onmessage = response => {
        var latest = JSON.parse(response.data)
        console.log(response.data) 
        this.setValueStation(latest.station_id, latest.value)          
      };
      ws.onopen=()=> setStatus('ONLINE');
      ws.onclose=()=> setStatus('DISCONNECTED'); 

    }
  setValueStation(station_id: any, value: any) {
    
  }
  }
