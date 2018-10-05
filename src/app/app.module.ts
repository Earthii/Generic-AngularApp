import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared.module';
import { AppRouterModule, routingComponents } from './routes/app-router.module';

import { AppComponent } from './app.component';

import { ImageService } from './services/image.service';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [BrowserModule, SharedModule, HttpClientModule, AppRouterModule],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
