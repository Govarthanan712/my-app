import Component from '@glimmer/component';
import {A} from '@ember/array';
import EmberObjects,{computed} from '@ember/object';

const Scorer=EmberObjects.extend({
	todo:null,
	
	init(){
		this.set('todo',A([
				EmberObjects.create({title:"update Ball" , isDone:false}),
				EmberObjects.create({title:"update Score" , isDone:false}),
				EmberObjects.create({title:"update player" , isDone:true}),

			]));

	},
	titles:computed('todo.[]',function(){
		
		console.log(this.todo.mapBy('title'));
		return this.todo.mapBy('title');
	}),
	incomplete: computed('todo.@each.isDon', function() {
    let todo = this.todo;
    console.log(todo.filterBy('isDone', false));
    return todo.filterBy('isDone', false);
  })
	
});

let scorer=Scorer.create();
scorer.titles;
console.log(scorer.inComplete);

scorer.todo[0].title="Ball's update";
scorer.todo.pushObject({title:"ball",isDone:false});
scorer.titles;
scorer.incomplete;
scorer.todo[0].isDone=true;




export default class TodoListComponent extends Component {
	scorer=scorer;

}
