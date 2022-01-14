import { Component, OnInit } from '@angular/core';
import { Metric } from '../entities/metric';
import {StationServiceService} from "../services/station-service.service";
import {ActivatedRoute} from "@angular/router";
import {map, switchMap,Subscription} from "rxjs";
import {  } from '@angular/router';

@Component({
  selector: 'app-metric-info',
  templateUrl: './metric-info.component.html',
  styleUrls: ['./metric-info.component.css']
})
export class MetricInfoComponent implements OnInit {

  metrisc: Metric[] = []
  constructor(private stationService:StationServiceService) {}



  ngOnInit(): void {

    this.stationService.getMetric(1)
    .subscribe(data => {
      this.metrisc = data;
      console.log(data)

    });
  }

}
