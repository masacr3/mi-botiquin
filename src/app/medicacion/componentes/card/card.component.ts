import { Component, Input, OnInit } from '@angular/core';
import { RemediosI } from '../../models/remedios';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() medicamento!: RemediosI;
  constructor() { }

  ngOnInit(): void {
  }

}
