import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollsBoardComponent } from './rolls-board.component';

describe('RollsBoardComponent', () => {
  let component: RollsBoardComponent;
  let fixture: ComponentFixture<RollsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollsBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RollsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
