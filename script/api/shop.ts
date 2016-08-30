declare var require: any;
var _products = require('./products.json');

const TIMEOUT = 100;

export default {
	getProducts(cb, timeout) {
		setTimeout(() => cb(_products), timeout || TIMEOUT);
	},

	buyProducts(payload, cb, timeout) {
		setTimeout(() => cb(), timeout || TIMEOUT);
	}
};
