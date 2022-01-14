import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, switchMap} from "rxjs";
import {Station} from "../entities/station";
import {StationServiceService} from "../services/station-service.service";

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.css']
})
export class StationDetailsComponent implements OnInit {
  /*

  constructor(private route:ActivatedRoute) {
    this.route.queryParams.subscribe(params=>console.log(params))
  }

   */
  stations: Station[] = []


  constructor(private stationService:StationServiceService,private route:ActivatedRoute) {}



  ngOnInit(): void {
    console.log("WORKING")
    let a  ;
     a = this.route.queryParams.subscribe(params=>console.log(params));
    //console.log(a)



    this.stationService.getStation(2).subscribe( );
  }

}
