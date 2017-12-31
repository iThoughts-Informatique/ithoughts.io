// ====== ./app/Cats/cat-list.component.ts ======

// Import component decorator
import { Component } from '@angular/core';

@Component({
	templateUrl: './web.html',
})
// Component class
export class WebPageComponent {}


@Component({
	selector: 'app-web-maincontent',
	templateUrl: './web-maincontent.html',
	styleUrls: ['./web.scss'],
})
// Component class
export class WebPageMainComponent {}

