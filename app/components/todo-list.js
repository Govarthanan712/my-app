import Component from '@glimmer/component';
import { A } from '@ember/array';
import { filterBy } from '@ember/object/computed';
import ComputedProperty from '@ember/object/computed';
import EmberObjects, { computed } from '@ember/object';

const Scorer = EmberObjects.extend({
  todo: null,
  tasks: null,

  init() {
    this._super(...arguments);
    this.set(
      'todo',
      A([
        EmberObjects.create({ title: 'update Ball', isDone: false }),
        EmberObjects.create({ title: 'update Score', isDone: false }),
        EmberObjects.create({ title: 'update player', isDone: true }),
      ])
    );
  },
  titles: computed('todo.[]', function () {
    console.log(this.todo.mapBy('title'));
    return this.todo.mapBy('title');
  }),

  incomplete: computed('todo.@each.isDone', function () {
    let todo = this.todo;
    console.log(todo.filterBy('isDone', false));
    return todo.filterBy('isDone', false);
  }),
  nocomplete: filterBy('todo', 'isDone', false),

  incompleteLength: computed('incomplete.length', {
    get() {
      return this.incomplete.length;
    },
  }),
});

let scorer = Scorer.create();
scorer.todo[0].isDone = true;
let tod = scorer.todo;
let ball2 = EmberObjects.create({ title: 'BatsmanScore', isDone: false });
tod.pushObject(ball2);
export default class TodoListComponent extends Component {
  scorer = scorer;
}
