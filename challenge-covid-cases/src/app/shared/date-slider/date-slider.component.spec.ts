import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DailyCaseService } from 'src/app/core/services/daily-case.service';

import { DateSliderComponent } from './date-slider.component';

describe('DateSliderComponent', () => {
  let component: DateSliderComponent;
  let fixture: ComponentFixture<DateSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DateSliderComponent],
      imports: [HttpClientModule],
      providers: [DailyCaseService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should be a valid label format', () => {
    let sequence = [...Array(837).keys()].map((i) => i + 1);

    const teste = sequence.forEach(element => {
      return
    });

    expect(sequence.length).toEqual(837);
  });*/
});
