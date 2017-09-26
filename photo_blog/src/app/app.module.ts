/** Ngmodule is foundation for any angular app*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import { EntryListComponent, EntryComponent } from './entries';


/** export appmodule for use in main.ts file
add METADATA -- info used by angular to associate style 
sheets, html templates, & other setting for indivudual 
module or component -- we use decorators to do this    
 */
 @NgModule({
 	imports : [BrowserModule],
 	declarations:[
 		AppComponent,
 		EntryComponent,
 		EntryListComponent
 	],
 	bootstrap: [AppComponent]
 })
export class AppModule {

}