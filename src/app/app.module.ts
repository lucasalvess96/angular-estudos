import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BemVindoModule } from './bem-vindo/bem-vindo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, BemVindoModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
