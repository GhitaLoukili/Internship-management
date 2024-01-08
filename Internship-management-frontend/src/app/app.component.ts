import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { FilesSubmissionComponent } from './components/files-submission/files-submission.component';



@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [CommonModule, RouterOutlet,NavBarComponent,AcceuilComponent,FilesSubmissionComponent],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
})
export class AppComponent {
  title = 'Internship-management-frontend';
}
