import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPatientComponent} from './add-patient/add-patient.component'
import { EditPatientComponent} from './edit-patient/edit-patient.component'


const routes: Routes = [
  {path: 'addpatient', component: AddPatientComponent},
  {path: 'editpatient', component: EditPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
