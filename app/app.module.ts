import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {TapnavComponent} from './tapnav/tapnav.component';
import {HttpClientModule} from '@angular/common/http';
import {MqmService} from './mqm.service';
import {DropdownComponent} from './dropdown/dropdown.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectDropDownModule} from 'ngx-select-dropdown';
// import { NgxSelectModule } from 'ngx-select-ex';
@NgModule({
  declarations: [
    AppComponent,
    TapnavComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxSelectModule
    SelectDropDownModule
  ],
  providers: [MqmService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
