import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRootingModule} from "./app.routing.module";
import {HeaderModule} from "./layouts/header/header.module";
import {SidebarModule} from "./layouts/sidebar/sidebar.module";
import {FooterModule} from "./layouts/footer/footer.module";
import {SettingModule} from "./layouts/setting/setting.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRootingModule,
    HeaderModule,
    SidebarModule,
    FooterModule,
    SettingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
