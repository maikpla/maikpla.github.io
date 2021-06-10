import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IQuestion } from '../question';
@Component({
  selector: 'app-new-questtion-form',
  templateUrl: './new-questtion-form.component.html',
  styleUrls: ['./new-questtion-form.component.scss']
})
export class NewQuesttionFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewQuesttionFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data : IQuestion
  ) { }

  onNoClick() : void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
