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
  public getTenRandomQuestions() : Observable<any[10]>{
    let Questions: Observable<any[10]> = new Observable<any[10]>();
    for (let i: number = 0; i < 9; i++){
      Questions[i] = this.firestore.collection('questions', ref => ref.where('randId', '>=', this.getRandomInt).limit(1)).valueChanges();
      if (Questions[i] == undefined) i--;
    }
    return Questions;
  }
  public getQuestion(rID: number): IQuestion{

    let __question : any[] = []
    this.firestore.collection('questions', ref => ref.where('randId','==',rID).limit(1)).valueChanges().subscribe(doc => {
      __question = doc;
    });
    let _question : IQuestion = __question[0];
    return _question;
  }
  public getRandomInt(min: number, max: number) : number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  }
