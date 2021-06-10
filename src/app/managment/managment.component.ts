import { Component, Inject, OnInit } from '@angular/core';
import { IQuestion } from '../question';
import { QuestionService } from '../question.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewQuesttionFormComponent } from '../new-questtion-form/new-questtion-form.component';
import { stringify } from '@angular/compiler/src/util';
import { CdkRow } from '@angular/cdk/table';
import { empty } from 'rxjs';
import { MatRow } from '@angular/material/table';

@Component({
  selector: 'app-managment',
  templateUrl: './managment.component.html',
  styleUrls: ['./managment.component.scss']
})
export class ManagmentComponent implements OnInit {
  questionList : IQuestion[] = [];
  ngOnInit(): void {
    this.qService.getQuestions().subscribe(questions => {
      this.questionList = questions
    })
  }
  onDoubleClick(row: any): void{
    let Canswer,Cquestion, CchoiceA, CchoiceB, CchoiceC, CchoiceD : string = '';
    let currQuestion : IQuestion = {question: row.question, answer: row.answer, choiceA: row.choiceA, choiceB: row.choiceB, choiceC: row.choiceC, choiceD: row.choiceD};
    const dialogRef = this.dialog.open(NewQuesttionFormComponent,{ data: currQuestion})
    let passedResult: IQuestion;
    dialogRef.afterClosed().subscribe(
      result => {
        passedResult = result;
        if (passedResult != undefined) this.qService.updateQuestion(row.propertyId, passedResult);
      }
    )
    }
  openNewForm(): void{
    let Canswer,Cquestion, CchoiceA, CchoiceB, CchoiceC, CchoiceD : string = ''; 
    const dialogRef = this.dialog.open(NewQuesttionFormComponent,{
      data: {question: Cquestion, answer: Canswer, choiceA: CchoiceA, choiceB: CchoiceB, choiceC: CchoiceC, choiceD: CchoiceD}
    });
    //const dialogRef = this.dialog.open(NewQuesttionFormComponent);
    let passedResult: IQuestion;
    dialogRef.afterClosed().subscribe(result=> {
      passedResult = result;
      if (passedResult != undefined) this.qService.createQuestion(passedResult);

    })
  }
  displayedColumns: string[] = ['id', 'question', 'answer', 'choiceA', 'choiceB', 'choiceC', 'choiceD'];
  selectedRow :any;
  onRowClicked(row: MatRow){
    this.selectedRow = row;
  }
  removeElement(): void{
    this.qService.deleteQuestion(this.selectedRow.propertyId); 
  }
  constructor(private qService: QuestionService, public dialog: MatDialog) {  }
}
