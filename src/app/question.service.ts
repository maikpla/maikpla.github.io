import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import { IQuestion } from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  public getQuestions(): Observable<any[]> {
    return this.questions;
  }
  questions: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {
    this.questions = firestore.collection('questions').valueChanges({idField: 'propertyId'});
   }
  public createQuestion(payload: IQuestion){
    return this.firestore.collection('questions').add(payload);
  }
  public deleteQuestion(id: string){
    return this.firestore.doc('questions/' + id).delete();
  }
  public updateQuestion(id: string, payload: IQuestion){
    return this.firestore.doc('questions/' + id).update(payload);
  }
}
