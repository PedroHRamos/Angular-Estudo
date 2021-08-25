import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'https://www.google.com';
  urlImagem = 'http://lorempixel.com/400/200/nature/';
  cursoAngular = true;

  constructor() { }

  ngOnInit(): void {
  }

  soma(a: number, b: number): number{
    return a + b;
  }

  getCurtirCurso(): boolean {
    return true;
  }

}
