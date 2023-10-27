import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonModule } from './features/person/person.module';
import { WelcomeModule } from './features/welcome/welcome.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule, WelcomeModule, PersonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
