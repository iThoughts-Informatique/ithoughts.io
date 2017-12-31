// ====== ./app/Cats/cat-list.component.ts ======

// Import component decorator
import { Component } from '@angular/core';

@Component({
	templateUrl: './hosting.html',
})
// Component class
export class HostingPageComponent {}


@Component({
	selector: 'app-hosting-maincontent',
	templateUrl: './hosting-maincontent.html',
	styleUrls: ['./hosting.scss'],
})
// Component class
export class HostingPageMainComponent {}

