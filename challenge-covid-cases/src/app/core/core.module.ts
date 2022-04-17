import { DailyCaseService } from './services/daily-case.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [DailyCaseService],
})
export class CoreModule {}
