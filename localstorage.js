/* localstorage.js by Jamie McElwain */
var ls = {
	set: function(name,value){
		/* Checks if the value is an object, and parses it into JSON. */
		if (typeof value == "object") {
			value = JSON.stringify(value);
		}
		localStorage.setItem(name, value);
	},
	get: function(name){
		var value = localStorage.getItem(name);
		/* Checks if the value is JSON, and parses it into an object. */
		if (value[0] == "{") {
			value = JSON.parse(value);
		}
		return value;
	},
	delete: function(name){
		return localStorage.removeItem(name);
	},
	clear: function() {
		return localStorage.clear();
	}
};
