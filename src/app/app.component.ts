import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public titleOptions: Object = {
		placeholderText: 'Edit Your Content Here!',
		charCounterCount: false,
		toolbarInline: true,
		events: {
			'froalaEditor.initialized': function() {
				console.log('initialized');
			}
		}
	}
	public myTitle: string;


	// Sample 2 model
	public content: string = '<span>My Document\'s Title</span>';


	// Sample 3 model
	public twoWayContent:any;

	// Sample 4 models
	public sample3Text:any;
	public initControls:any;
	public deleteAll:any;
	public initialize(initControls:any) {
		this.initControls = initControls;
		this.deleteAll = function() {
			this.initControls.getEditor()('html.set', '');
			this.initControls.getEditor()('undo.reset');
			this.initControls.getEditor()('undo.saveStep');
		};
	}

	// Sample 5 model
	public imgModel: Object = {
		src: '../src/image.jpg'
	};

	// Sample 6 model
	public buttonModel: Object = {
		innerHTML: 'Click Me'
	};

	// Sample 7 models
	public inputModel: Object = {
		placeholder: 'I am an input!'
	};
	public inputOptions: Object = {
		angularIgnoreAttrs: ['class', 'ng-model', 'id', 'froala', 'ng-reflect-froala-editor', 'ng-reflect-froala-model']
	}

	// Sample 8 model
	public initializeLink = function(linkInitControls:any) {
		this.linkInitControls = linkInitControls;
	};
	public linkModel: Object = {
		href: 'https://www.froala.com/wysiwyg-editor'
	};
}