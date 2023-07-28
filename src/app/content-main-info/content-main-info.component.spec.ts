import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMainInfoComponent } from './content-main-info.component';

describe('ContentMainInfoComponent', () => {
  let component: ContentMainInfoComponent;
  let fixture: ComponentFixture<ContentMainInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentMainInfoComponent]
    });
    fixture = TestBed.createComponent(ContentMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
