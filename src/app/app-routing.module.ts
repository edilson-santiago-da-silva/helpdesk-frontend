import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { TechnicianListComponent } from './components/technician/technician-list/technician-list.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { TechnicianCreateComponent } from './components/technician/technician-create/technician-create.component';
import { TechnicianUpdateComponent } from './components/technician/technician-update/technician-update.component';
import { TechnicianDeleteComponent } from './components/technician/technician-delete/technician-delete.component';
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { CalledListComponent } from './components/called/called-list/called-list.component';
import { CalledCreateComponent } from './components/called/called-create/called-create.component';
import { CalledUpdateComponent } from './components/called/called-update/called-update.component';
import { CalledReadComponent } from './components/called/called-read/called-read.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children:[
      {path: 'home', component: HomeComponent},
      {path: 'technician', component: TechnicianListComponent},
      {path: 'technician/create', component: TechnicianCreateComponent},
      {path: 'technician/update/:id', component: TechnicianUpdateComponent},
      {path: 'technician/delete/:id', component: TechnicianDeleteComponent },

      {path: 'clients', component: ClientListComponent},
      {path: 'clients/create', component: ClientCreateComponent},
      {path: 'clients/update/:id', component: ClientUpdateComponent},
      {path: 'clients/delete/:id', component: ClientDeleteComponent },

      {path: 'calleds', component: CalledListComponent},
      {path: 'calleds/create', component: CalledCreateComponent},
      {path: 'calleds/read/:id', component: CalledReadComponent},
      {path: 'calleds/update/:id', component: CalledUpdateComponent} 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
