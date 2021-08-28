import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  url = 'https://www.google.com';
  urlImagem = 'http://lorempixel.com/400/200/nature/';
  cursoAngular = true;
  isMouseOver = false;
  valorAtual: string = '';
  valorSalvo: string = '';
  nome: string = 'abc';
  
  pessoa: any = {
    nome: 'Jose',
    idade: 21
  }

  constructor() { }

  ngOnInit(): void {
  }

  soma(a: number, b: number): number{
    return a + b;
  }

  getCurtirCurso(): boolean {
    return true;
  }

  botaoclicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEventInit){
    this.valorAtual = (<HTMLInputElement>event?.target).value;
  }

  salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(valor: number){
    if ( valor === 1 ){
      this.isMouseOver = true;
    }
    if ( valor === 2 ){
      this.isMouseOver = false;
    }
  }

}
