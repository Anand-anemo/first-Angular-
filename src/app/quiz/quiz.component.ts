import { Component, OnInit } from '@angular/core';
import { QueserviceService } from '../service/queservice.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private questionservice: QueserviceService) { }

  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  public correctAnswer: number = 0;
  public incorrectAnswer: number = 0;
  isQuizCompleted: boolean=false;
  interval$: any;
  ngOnInit(): void {

    this.getAllQuestions();
    this.startCounter();

  }

  getAllQuestions() {
    return this.questionservice.getQuestionJson()
      .subscribe(res => {


        this.questionList = res.questions;

      })
  }
  nextQuestion() {
    this.currentQuestion++;

  }
  previousQuestion() {
    this.currentQuestion--;

  }
  answer(currentQno: number, option: any) {

    if(currentQno === this.questionList.length){

      this.isQuizCompleted = true;
      this.stopCounter();

    }

    if (option.correct) {
      this.points += 4;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();

      }, 1000);

    } else {

      setTimeout(() => {
        this.currentQuestion++;
        this.incorrectAnswer++;
        this.resetCounter();

      }, 1000);


      this.points -= 2;
    }

  }
  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          this.counter = 60;
          this.points -= 2;


        }
      });
    setTimeout(() => {
      this.interval$.unsubscribe();

    }, 600000);

  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;


  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();

  }
  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
  }


}
