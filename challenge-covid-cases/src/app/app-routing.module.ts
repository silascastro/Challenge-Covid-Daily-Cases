import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyCaseService } from './core/services/daily-case.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
