import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RemediosI } from '../../models/remedios';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() medicamento!: RemediosI;
  @ViewChild('principal') card!: ElementRef;
  info = "Info"
  focus = false
  posicionAnterior : number | undefined

  constructor(private render : Renderer2) { }

  ngOnInit(): void {
  }

  status( cant : number ) : string {
    let clase = 'redondo mid-12-2 '
    if (cant <= 2) return clase + "peligro"
    return clase + (cant >= 10 ? "ok" : "atento")
  }

  action() : void{
    const box = this.card.nativeElement
    this.focus = !this.focus

    if ( this.focus ){
      const currentTop = box.getBoundingClientRect().top
      const currentCross = window.scrollY
      this.posicionAnterior = currentCross
      this.render.addClass(box, "full-card")
      console.log("cross +"+currentCross)
      window.scroll(0, currentTop + currentCross - 10)
      this.info = "Cerrar"

      console.log("cross postmov+"+window.scrollY)
    }
    else{
      this.render.removeClass(box, "full-card")
      this.info = "Info"
      console.log("anterior +"+this.posicionAnterior)
      window.scroll(0, this.posicionAnterior === undefined ? 0 : this.posicionAnterior)
    }
  }

}
