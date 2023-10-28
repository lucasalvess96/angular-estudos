import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { PersonComponent } from './pages/person/person.component';
import { PersonRoutingModule } from './person-routing.module';

@NgModule({
  declarations: [PersonComponent],
  imports: [CommonModule, SharedModule, PersonRoutingModule],
})
export class PersonModule {}
