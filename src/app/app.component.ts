import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit() { }

  title = 'sesion11';
  form: FormGroup;
  resultado: Number = 0;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      ingreso: ['', Validators.required],
      egreso: ['', Validators.required]
    })
  }
  calcular() {
    console.log(this.form.controls);
    // console.log(this.form.value);
    this.resultado = parseInt(this.form.value.ingreso) - parseInt(this.form.value.egreso)
  }
}
