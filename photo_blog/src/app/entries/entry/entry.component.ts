import {Component} from '@angular/core';

@Component({
	selector: 'app-entry',
	templateUrl: 'entry.component.html',
	styleUrls: ['entry.component.css']

})

export class EntryComponent { 
	title: string = 'My First Photo';
	photo: string= 'http://placehold.it/800x500?text=Angular Basics';
	description: string = 'A Description of my First Photo';
	comments: any[] = [
		{name: "John", comment: "This photo sucks"},
		{name: "Billy", comment: "You suck"},
		{name: "Bob", comment: "A comment"}
	]
}