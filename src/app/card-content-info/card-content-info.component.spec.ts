import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContentInfoComponent } from './card-content-info.component';

describe('CardContentInfoComponent', () => {
  let component: CardContentInfoComponent;
  let fixture: ComponentFixture<CardContentInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardContentInfoComponent]
    });
    fixture = TestBed.createComponent(CardContentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
