import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameService } from '../game.service';
import { IQuestion } from '../question';
import { QuestionService } from '../question.service';
import { GameSession } from './gameSession';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  ngOnInit(): void {

  }
  gameState : number = 0;
  answers : string[] = []
  _currQuestion: IQuestion = {} as IQuestion;
  _currSession : GameSession = {} as GameSession;
  _questions: IQuestion[] = [];
  constructor(private gameService: GameService, private questionService: QuestionService) {  }
  startNew() {
    this.gameService.getGameSession(this.gameService.createNewGameSession()).subscribe(session => {
      this._currSession = session;
    });
    let _RQIDs : string[] = this._currSession.RQIDs.split(' ');
    for (let i : number = 0; i < 9; i++){
      this._questions[i] = this.questionService.getQuestion(Number.parseInt(this._currSession.RQIDs.split(' ')[i]));
    }
    this._currQuestion = this._questions[0];
  }
  setAnswerA(): void {

  }
  setAnswerB(): void {
    
  }
  setAnswerC(): void {
    
  }
  setAnswerD(): void {
    
  }
  setNextQuestion(): void {
    
  }
  setPrevQuestion(): void {
    
  }
}
