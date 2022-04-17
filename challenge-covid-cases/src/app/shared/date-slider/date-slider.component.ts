import { Case } from './../../core/model/case';
import { DailyCaseService } from './../../core/services/daily-case.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-slider',
  templateUrl: './date-slider.component.html',
  styleUrls: ['./date-slider.component.scss'],
})
export class DateSliderComponent implements OnInit {
  constructor(private dailyCasesService: DailyCaseService) {}

  public ngOnInit(): void {}

  public formatLabel(value: number): string {
    const day = 86400000;
    const firstDayMilesseconds = new Date(2020, 0, 1).getTime();
    const selectDate = new Date(firstDayMilesseconds + day * value);
    return `${selectDate.getDate()}/${
      selectDate.getMonth() + 1
    }/${selectDate.getFullYear()}`;
  }

  public get getnumberOfDays(): number {
    const firstDayMilesseconds = new Date('2020-01-01').getTime();
    const diference = new Date().getTime() - firstDayMilesseconds;
    return Math.round(diference / 60000 / 60 / 24);
  }
}
