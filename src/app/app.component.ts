import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit() {
    let op1 = document.getElementById('op1');
    console.log(op1);
  }

  form: FormGroup;
  resultado: Number = 0;

  suma: Number = 0;
  resta: Number = 0;
  multiplicacion: Number = 0;
  division: Number = 0;


  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      firstNumber: ['', Validators.required],
      secondNumber: ['', Validators.required]
    });

  }

  op1(num1: any, num2: any) {
    this.suma = Number(num1) + Number(num2)
    return this.suma
  }
  op2(num1: any, num2: any) {
    this.resta = Number(num1) - Number(num2)
    return this.resta
  }
  op3(num1: any, num2: any) {
    this.multiplicacion = Number(num1) * Number(num2)
    return this.multiplicacion
  }
  op4(num1: any, num2: any) {
    this.division = Number(num1) / Number(num2)
    return this.division
  }
}
