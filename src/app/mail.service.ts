import { Injectable } from '@angular/core';

import * as Diaspora from 'diaspora/dist/standalone/diaspora.min.js';

let ContactMail;

@Injectable()
export class MailService {
	constructor() {
		Diaspora.createNamedDataSource('main', 'webApi', {
			host: location.hostname,
			port: 3210,
		});
		ContactMail = Diaspora.declareModel('ContactMail', {
			sources: 'main',
			attributes: {
				senderMail: {
					type: 'string',
					required: true,
				},
				senderName: {
					type: 'string',
					required: true,
				},
				senderCategory: {
					type: 'string',
					required: true,
					enum: ['pro', 'part'],
				},
				message: {
					type: 'string',
					required: true,
				},
			},
		});
	}

	sendMail(mail) {
		const remappedMail = {
			senderMail: mail.email,
			senderName: mail.name,
			senderCategory: mail.type,
			message: mail.message,
		};
		return ContactMail.spawn(remappedMail).persist();
	}
}
