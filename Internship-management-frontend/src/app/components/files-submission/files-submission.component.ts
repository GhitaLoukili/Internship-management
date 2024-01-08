import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-files-submission',
  standalone: true,
  imports: [RouterModule,NavBarComponent,FooterComponent],
  templateUrl: './files-submission.component.html',
  styleUrl: './files-submission.component.css'
})
export class FilesSubmissionComponent {

}
