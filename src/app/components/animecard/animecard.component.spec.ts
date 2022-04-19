import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimecardComponent } from './animecard.component';

describe('AnimecardComponent', () => {
  let component: AnimecardComponent;
  let fixture: ComponentFixture<AnimecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
