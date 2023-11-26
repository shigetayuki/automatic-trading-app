import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootkeyChartComponent } from './footkey-chart/footkey-chart.component';
import { LoginComponent } from './login/login.component';
import { ResultByMonthsComponent } from './result-by-months/result-by-months.component';
import { ResultBySystemsComponent } from './result-by-systems/result-by-systems.component';
import { ManageTradeComponent } from './manage-trade/manage-trade.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { animation: 'login' } },
  {
    path: 'resultByMonths',
    component: ResultByMonthsComponent,
    data: { animation: 'resultByMonths' },
  },
  {
    path: 'resultBySystems',
    component: ResultBySystemsComponent,
    data: { animation: 'resultBySystems' },
  },
  {
    path: 'footkeyChart',
    component: FootkeyChartComponent,
    data: { animation: 'footkeyChart' },
  },
  {
    path: 'manageTrade',
    component: ManageTradeComponent,
    data: { animation: 'manageTrade' },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
