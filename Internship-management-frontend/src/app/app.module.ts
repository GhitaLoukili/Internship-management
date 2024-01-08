// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { FilesSubmissionComponent } from './components/files-submission/files-submission.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AcceuilComponent,
    FilesSubmissionComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', component: AcceuilComponent },
      { path: 'FilesSubmission', component: FilesSubmissionComponent },
    ])
  ],
    
  
  bootstrap: [AppComponent]
})
export class AppModule { }
