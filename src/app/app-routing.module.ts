import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { ManagmentComponent } from './managment/managment.component';
import { NewQuesttionFormComponent } from './new-questtion-form/new-questtion-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: GameComponent},
  { path: 'game', component: GameComponent },
  { path: 'management', component: ManagmentComponent },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MatFormFieldModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GameComponent, ManagmentComponent, PageNotFoundComponent, NewQuesttionFormComponent]