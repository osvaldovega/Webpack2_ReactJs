import APICalls from './APICalls';
import config from './config';

const nasa = new APICalls(config.nasa.url);

export default class Nasa {
	getNasaData() {
		return nasa.get(config.nasa.key, '');
	}
}
