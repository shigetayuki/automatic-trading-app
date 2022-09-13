import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FormsModule } from '@angular/forms';
import { ResultByMonthsComponent } from './result-by-months/result-by-months.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { IgxDropDownModule, IgxButtonModule, IgxToggleModule } from "igniteui-angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultBySystemsComponent } from './result-by-systems/result-by-systems.component';
import { TabComponent } from './tab/tab.component';
import { ButtonComponent } from './button/button.component';
import { IgxSnackbarModule } from 'igniteui-angular';
import { FootkeyChartComponent } from './footkey-chart/footkey-chart.component';
import { TrendSvgComponent } from './trend-svg/trend-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopBarComponent,
    ResultByMonthsComponent,
    DropDownComponent,
    ResultBySystemsComponent,
    TabComponent,
    ButtonComponent,
    FootkeyChartComponent,
    TrendSvgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IgxDropDownModule,
    IgxButtonModule,
    IgxToggleModule,
    IgxSnackbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
