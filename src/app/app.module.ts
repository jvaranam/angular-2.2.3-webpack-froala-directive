import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FroalaEditorDirective, FroalaViewDirective } from './directives/froala.directives';
import { AppComponent } from './app.component';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [ AppComponent,FroalaEditorDirective,FroalaViewDirective],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
