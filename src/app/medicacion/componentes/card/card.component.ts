import { Component, Input, OnInit } from '@angular/core';
import { RemediosI } from '../../models/remedios';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() medicamento!: RemediosI;
  info = "Info"
  focus = false

  constructor() { }

  ngOnInit(): void {
  }

  status( cant : number ) : string {
    let clase = 'redondo mid-12-2 '
    if (cant <= 2) return clase + "peligro"
    return clase + (cant >= 10 ? "ok" : "atento")
  }

}
