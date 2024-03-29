import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingComponent} from "./setting.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [SettingComponent],
  exports: [
    SettingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SettingModule { }
