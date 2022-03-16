import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCardArticulosComponent } from './grid-card-articulos.component';

describe('GridCardArticulosComponent', () => {
  let component: GridCardArticulosComponent;
  let fixture: ComponentFixture<GridCardArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCardArticulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCardArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
