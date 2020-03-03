import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NYTimesArticlesComponent } from './nytimes-articles.component';

describe('NYTimesArticlesComponent', () => {
  let component: NYTimesArticlesComponent;
  let fixture: ComponentFixture<NYTimesArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NYTimesArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NYTimesArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
