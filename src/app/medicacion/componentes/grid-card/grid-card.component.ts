import { Component, OnInit } from '@angular/core';
import { RemediosI } from '../../models/remedios';
import { RemediosService } from '../../services/remedios.service';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.css']
})
export class GridCardComponent implements OnInit {

  lista! : RemediosI[]

  constructor( private remediosService : RemediosService) { }

  ngOnInit(): void {
    this.remediosService.getMedicamentos().subscribe( data => this.lista = data)
  }

}
