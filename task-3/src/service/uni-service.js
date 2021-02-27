export default class UniService {

	_apiBase = 'http://universities.hipolabs.com/';

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);

		if (!res.ok) {
		    throw new Error (`Could not fetch ${url}, received ${res.status}`);
		}

		const body = await res.json();
		return body;
    }
}