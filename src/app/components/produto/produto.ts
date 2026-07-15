import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UpperCasePipe, CurrencyPipe} from '@angular/common';
//O IMPORT SERVE PRA TRAZER CARACTERIZAÇOES DE TEXTO (NUMERO, LETRA, ETC)
import {PrecoFormatadoPipe} from '../../pipes/preco-formatado-pipe'
@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe  ],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
//Adiciona variaveis e condições do produto
export class Produto {
  @Input() nome: string = '';
  @Input() preco: number = 0;
}
