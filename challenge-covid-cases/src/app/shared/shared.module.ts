import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovidMapComponent } from './covid-map/covid-map.component';

import { MatSliderModule } from '@angular/material/slider';
import { DateSliderComponent } from './date-slider/date-slider.component';

@NgModule({
  declarations: [CovidMapComponent, DateSliderComponent],
  imports: [CommonModule, MatSliderModule],
  exports: [CovidMapComponent],
})
export class SharedModule {}
