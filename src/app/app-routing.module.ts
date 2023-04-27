import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';


const routes: Routes = [
  {
    path:'', redirectTo:'intro',pathMatch:"full"
  },

  
  {
    path:'quiz', component:QuizComponent
  },
  {
    path:'header', component:HeaderComponent
  },
  {
    path:'intro', component:IntroComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
