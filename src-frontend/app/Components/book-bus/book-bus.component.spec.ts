import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBusComponent } from './book-bus.component';

describe('BookBusComponent', () => {
  let component: BookBusComponent;
  let fixture: ComponentFixture<BookBusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookBusComponent]
    });
    fixture = TestBed.createComponent(BookBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
