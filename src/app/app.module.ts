import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StationListComponent } from './station-list/station-list.component';
import { StationComponent } from './station/station.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { StationDetailsComponent } from './station-details/station-details.component';
import { MetricComponent } from './metric/metric.component';
import { MetricInfoComponent } from './metric-info/metric-info.component';
import { AddStationComponent } from './add-station/add-station.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StationServiceService } from './services/station-service.service';
import { AddMetricComponent } from './add-metric/add-metric.component';




@NgModule({
  declarations: [
    AppComponent,
    StationListComponent,
    StationComponent,
    StationDetailsComponent,
    MetricComponent,
    MetricInfoComponent,
    AddStationComponent,
    AddMetricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [StationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
