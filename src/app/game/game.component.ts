import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  
  ngOnInit(): void {
    this.qService.getQuestions().subscribe(questions => {
      console.log(questions);
    })
  }

  constructor(private qService: QuestionService) {  }

}
