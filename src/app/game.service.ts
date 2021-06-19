import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { GameSession } from './game/gameSession';
import { IQuestion } from './question';
import { QuestionService } from './question.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  constructor(private questionService: QuestionService, private firestore: AngularFirestore) { }
  public getGameSession(SessionID: string) : Observable<any> {
    return this.firestore.collection('activesessions').doc(SessionID).valueChanges();
  }
  public createNewGameSession(customSession?: GameSession): string {
    if (customSession != undefined) {
      let questions : IQuestion[] = [];
      this.questionService.getTenRandomQuestions().subscribe(_questions => {
        questions = _questions;
      });
      let _QIDs : string[] = [];
      for (let i: number = 0; i < 9; i++){
        _QIDs[i] =  questions[i].randId.toString();
      }
      let session :GameSession = {PID: "000000", GID: "000000", currQues: 0, gameState: 0, RQIDs: _QIDs.join(" "), currPoint: 0 };
      let _id : string = '';
      this.firestore.collection('activesessions').add(session).then(doc => {
        _id = doc.id;
      });
      return _id;
    }
    else {
      let _id : string = '';
      this.firestore.collection('activesessions').add(customSession).then(doc => {
        _id = doc.id;
      });
      return _id;
    }
    
  }
  public updatePoints(givenAnswers: string, questions: string, SessionID: string): void{
    let pointCounter : number = 0;
    let _givenAnswers: string[] = givenAnswers.split(' ');
    let _questions : number[] = givenAnswers.split(' ').map(Number);
    for (let i : number = 0; i < 9; i++){
      if (this.questionService.getQuestion(_questions[i]).answer = _givenAnswers[i]){
        pointCounter += 10;
      }
    }
  }
}
