import Component              from '@glimmer/component';
import { computed, observer } from '@ember/object';
import EmberObjects           from '@ember/object';
import {once}                 from '@ember/runloop';
import { on } 				  from '@ember/object/evented';
import { alias, oneWay }				from '@ember/object/computed';
let Student=EmberObjects.extend({
	firstName:null,
	lastName:null,
	salutation:"mr",
	init(){
	this.set('salutation','Mr/Mrs');
	},
	salutationDidChange:on('init',observer('salutaion',function(){
		console.log("salutaion changed");
	})),
	fullName:computed('firstName','lastName',function(){
		return `${this.firstName} ${this.lastName}`;
	}),
	fullNameChanged:observer('fullName',function(){
		once(this,'processFullName');
	})
});

 
let Gova=Student.create({
	firstName:"govarthanan",
	lastName:"Kumar"
});
Gova.fullName;
//Gova.set('firstName','Govarthanan');
Gova.reopen({
	lastNameChanged:observer('lastName',function(){
		once(this,'processFullName');
		
	})
});
Gova.set('lastName','KUMAR');
Gova.reopen({
	partOfNameChanged:observer('firstName','lastName',function(){
		once(this,'processFullName');
	}),
	processFullName(){
		console.log(this.fullName);
	}
});
Gova.set('firstName','surya');
Gova.set('lastName','Rajendran');
//Gova.set('salutation','Ms');
Gova.addObserver('fullName',function(){
	console.log("outside observer says:fullName Change");
});

let husband=EmberObjects.create({
	pets:0
});


let Wife=EmberObjects.extend({
	pets: alias('husband.pets')
});

let wife=Wife.create({
	husband:husband
});
husband.set('pets',7);
wife.set('pets',5);

//one -way

let admin=EmberObjects.create({
	pass:"787890"
});

let User=EmberObjects.extend({
	pass:oneWay('admin.pass')
});

let user=User.create({
	admin:admin
});

admin.set('pass','88888')

let food = ['Poi', 'Ono', 'Adobo Chicken'];

food.forEach((item, index) => {
  console.log(`Menu Item ${index+1}: ${item}`);
});

export default class FullnameObserverComponent extends Component {
 gova=Gova;
  husband=husband;
  wife=wife;
	admin=admin;
	user=user;
	food=food; 
}

