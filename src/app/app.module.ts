import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared.module';
import { AppRouterModule, routingComponents } from './routes/app-router.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AuthService } from './services/auth.service';
import { SessionInterceptor } from './http-interceptors/session.interceptor';

@NgModule({
  declarations: [AppComponent, HeaderComponent, routingComponents],
  imports: [BrowserModule, SharedModule, HttpClientModule, AppRouterModule],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: SessionInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
