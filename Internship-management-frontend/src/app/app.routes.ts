import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {LoginComponent} from "./login/login.component";
import { FilesSubmissionComponent } from './components/files-submission/files-submission.component';





export const routes: Routes = [
  { path: '', component: AcceuilComponent }, // Home page route
  {
    path: "navbar", component: NavBarComponent, //user
   },
  {path: "acceuil", component: AcceuilComponent},
  {path: "FilesSubmission", component: FilesSubmissionComponent},

      
  


{ path: 'login', component: LoginComponent },
];