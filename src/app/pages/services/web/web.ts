import {TranslateService} from '@ngx-translate/core';
import {GoogleAnalyticsEventsService} from '../../../google-analytics-events.service';

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
export class WebPageMainComponent {
	constructor(public googleAnalyticsEventsService: GoogleAnalyticsEventsService, translate: TranslateService) {
		//super(translate);
	}
	
	clickedSeeMore(category){
		this.googleAnalyticsEventsService.emitEvent('CTA', 'click', `See more about ${category}`, 10);
	}
}

