import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StationListComponent} from "./station-list/station-list.component";
import {StationDetailsComponent} from "./station-details/station-details.component";
import { MetricInfoComponent } from './metric-info/metric-info.component';
import { AddStationComponent } from './add-station/add-station.component';
import { AddMetricComponent } from './add-metric/add-metric.component';

const routes: Routes = [
  {path: 'station/add', component:AddStationComponent},
  {path: 'metric/add', component:AddMetricComponent},
  {path: 'stations', component: StationListComponent },
  {path: 'station', component: StationDetailsComponent},
  {path: 'station/:id', component: StationDetailsComponent},
  {path: 'station/:id/metric', component: MetricInfoComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
