import {Component, Input, OnInit} from '@angular/core';
import { Metric } from '../entities/metric'; 



@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent implements OnInit {
  @Input() metric?: Metric;
  constructor() { }

  ngOnInit(): void {
  }

}
