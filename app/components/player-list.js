import Component from '@glimmer/component';
import { computed } from '@ember/object';
import EmberObjects from '@ember/object';
import { A } from '@ember/array';
import { filterBy } from '@ember/object/computed';

const scorer = EmberObjects.extend({
  overs: null,
  init() {
    this._super(...arguments);
    this.set(
      'overs',
      A([
        EmberObjects.create({ over: 1, runs: 5 }),
        EmberObjects.create({ over: 2, runs: 6 }),
        EmberObjects.create({ over: 3, runs: 12 }),
        EmberObjects.create({ over: 4, runs: 6 }),
      ])
    );
  },
  RunsPerOver: computed.mapBy('overs', 'runs'),
});
let india = scorer.create();
let indiaovers = india.overs;
let over = EmberObjects.create({ over: 6, runs: 95 });
indiaovers.pushObject(over);
let over4 = EmberObjects.create({ over: 6, runs: 95 });
indiaovers.pushObject(over4);

export default class PlayerListComponent extends Component {
  india = india;
}
