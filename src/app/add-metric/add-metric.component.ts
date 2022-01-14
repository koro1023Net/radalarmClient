import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,NgForm,NgModel } from '@angular/forms';
import { Station } from '../entities/station';
import { StationServiceService } from '../services/station-service.service';


@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {

  stations: Station[] = []
  stationForm : FormGroup;
  
  

  constructor(private stationService:StationServiceService) {
    this.stationForm = new FormGroup({
             
      "address": new FormControl(),
      "status": new FormControl()   
      
      });
     
  }
  
  

  ngOnInit(): void {   
    
  }
  submit(){
    this.stationService.addStation(this.stationForm.value).subscribe((data)=>console.log(data))
    
    }
//this.stationService.addStation(this.stationForm.value)
  
 }
