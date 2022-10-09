import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  firstNum=0;
  secondNum=0;
  result=0;

  calculateSum(){
    this.result=this.firstNum+this.secondNum;
  }
  calculateSubtraction(){
    this.result=this.firstNum-this.secondNum;
  }
  calculateMultiple(){
    this.result=this.firstNum*this.secondNum;
  }
  calculateDivide(){
    this.result=this.firstNum/this.secondNum;
  }

  firstValue=0;
  secondValue=0;
  thirdValue=0;
  fourthValue=0;
  result1=0;
  calculateValue(){
    this.result1=this.firstValue+this.secondValue-this.thirdValue*this.thirdValue/this.fourthValue;
  }
}
