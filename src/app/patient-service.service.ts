import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patient } from './Patient';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  private patientUrl: string;

  constructor(private http: HttpClient) {
    this.patientUrl = "http://localhost:8080/Patient";
  }

  public getAll(): Observable<Patient[]>{
    return this.http.get<Patient[]>(this.patientUrl);
  }

  public save(patient: Patient){
    return this.http.post<Patient>(this.patientUrl, Patient);
  }

  public delete(patientID: number){
    let deletePatientURL = 'http://localhost:8080/Patient/' + patientID;
    return this.http.delete(deletePatientURL);
  }

  public findOne(patientID: number){
    let patientURL = 'http://localhost:8080/Patient/' + patientID;
    return this.http.get<Patient>(patientURL);
  }

  public update(patient: Patient){
    return this.http.put<Patient>(this.patientUrl, Patient);
  }
}
