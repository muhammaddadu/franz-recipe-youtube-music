const path = require('path');

const SERVICE_CSS_PATH = path.join(__dirname, 'service.css');

class FranzRecipeYoutubeMusic {
	constructor(Franz) {
		this.Franz = Franz;

		this.inject();
	}

	inject() {
		this.Franz.injectCSS(SERVICE_CSS_PATH);
	}
}

module.exports = (Franz) => new FranzRecipeYoutubeMusic(Franz);
