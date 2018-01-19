import * as env from '../../../config.json';

const environment: any = Object.assign(env, {
	production: false,
});

export {environment};
