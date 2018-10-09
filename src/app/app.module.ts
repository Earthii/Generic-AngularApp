import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared.module';
import { AppRouterModule, routingComponents } from './routes/app-router.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, routingComponents],
  imports: [BrowserModule, SharedModule, HttpClientModule, AppRouterModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
