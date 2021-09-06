import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBoardComponent } from './cart-board.component';

describe('CartBoardComponent', () => {
  let component: CartBoardComponent;
  let fixture: ComponentFixture<CartBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
