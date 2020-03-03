import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NytimesArticleDetailsComponent } from './nytimes-article-details.component';

describe('NytimesArticleDetailsComponent', () => {
  let component: NytimesArticleDetailsComponent;
  let fixture: ComponentFixture<NytimesArticleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NytimesArticleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NytimesArticleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
