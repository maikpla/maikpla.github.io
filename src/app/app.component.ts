import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFiller = false;
  title = 'Olymprion-test';

}
