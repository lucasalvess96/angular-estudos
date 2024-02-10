import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { AngularMaterialModule } from './angular-material/angular-material.module';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [],
  providers: [provideEnvironmentNgxMask(maskConfig)],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [AngularMaterialModule, FormsModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
})
export class SharedModule {}
