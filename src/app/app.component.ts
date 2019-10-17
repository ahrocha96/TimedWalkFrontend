import { Component, OnInit } from '@angular/core';
import { Patient } from './Patient';
import { PatientServiceService } from './patient-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  patientList : Patient[];
  foundPatient : Patient;

  constructor(private patientService: PatientServiceService){

  }

  ngOnInit() {
    this.patientService.getAll().subscribe(data => {
      this.patientList = data;
    });

  }

  findPatient(patientID: number){
    this.patientService.findOne(patientID).subscribe(data2 =>{
      this.foundPatient = data2;
    })
  }

  deletePatientByID(patientID: number){
    this.patientService.delete(patientID).subscribe();
  }

  updatePatient(patient: Patient){
    this.patientService.update(patient).subscribe();
  }

  savePatient(patient: Patient){
    this.patientService.save(patient).subscribe();
  }
}
