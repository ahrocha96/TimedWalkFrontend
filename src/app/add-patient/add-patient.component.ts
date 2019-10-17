import { Component, OnInit } from '@angular/core';
import { PatientServiceService } from '../patient-service.service'

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor(private patientService: PatientServiceService) { }

  ngOnInit() {
  }

}
