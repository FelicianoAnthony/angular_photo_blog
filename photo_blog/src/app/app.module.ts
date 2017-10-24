/** Ngmodule is foundation for any angular app*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppComponent} from './app.component';
import { EntryListComponent, EntryComponent, EntryService, EntryCommentFormComponent } from './entries';
import {InMemoryEntryService} from './backend'; 

/** export appmodule for use in main.ts file
add METADATA -- info used by angular to associate style 
sheets, html templates, & other setting for indivudual 
module or component -- we use decorators to do this    
 */
 @NgModule({
 	imports : [
	 	BrowserModule,
	 	HttpModule,
	 	FormsModule,
	 	InMemoryWebApiModule.forRoot(InMemoryEntryService)
 	],
 	providers: [ EntryService ],
 	declarations:[
 		AppComponent,
 		EntryComponent,
 		EntryListComponent,
 		EntryCommentFormComponent
 	],
 	bootstrap: [AppComponent]
 })
export class AppModule {

}