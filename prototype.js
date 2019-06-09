'use strict';


function obj() {
	this.test = 2
}

obj.prototype = {
	get: function(func) {
		console.log('\n' + func + '(): function() {}')
		console.log(this)
		return this.test
	},
	set: function(func, x) {
		console.log('\n' + func + '(): set ' + this.test + ' => ' + x)
		this.test = x
	},
	dont: (func, x) => {
		console.log('\n' + func + '(): () => {}')
		console.log(this)
		this.test = x
		console.log(this)
	},
}

var test = new obj
var test2 = new obj

test.get('test')
test2.set('test2', 10)

test.get('test')
test2.get('test2')

test.dont('test', 7)
test.get('test')
test2.get('test2')

console.log(test.test)
console.log(test2.test)