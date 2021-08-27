import Component from '@glimmer/component';
import EmberObjects, { computed } from '@ember/object';
import { A } from '@ember/array';

const Player = EmberObjects.extend({
  init: function () {
    this._super(...arguments);
    console.log('Player Created');
    // Setup
  },
  name: 'name-NA',
  match: 'match-NA',
  see: function () {
    return `(${this.name} is ${this.match} matches played)`;
  },
});

let gova = Player.create({
  name: 'gova',
  match: '34',
});

let surya = Player.create({
  name: 'surya',
  match: '56',
});

let detail = gova.see();
const Player2 = EmberObjects.extend({
  name: null,
  match: null,
  nation: null,
  info: computed('name', 'match', function () {
    console.log(`${this.name} is played ${this.match} matches `);
    return `${this.name} is played ${this.match} matches `;
  }),

  record: {
    Bat: '89/80',
    Bowl: '5/10',
  },

  best: computed('record.{Bat,Bowl}', function () {
    console.log(
      `Batt-Best  = ${this.record.Bat} Bowl-Best=${this.record.Bowl}`
    );
    return `Batt-Best  = ${this.record.Bat} Bowl-Best=${this.record.Bowl}`;
  }),

  overview: computed('info', 'best', function () {
    console.log(`${this.info} and with ${this.best} `);
    return `${this.info} and with ${this.best} `;
  }),

  Native: computed('name', 'nation', 'native', {
    get(key) {
      return `${this.name} ${this.native}`;
    },
    set(key, value) {
      let [name, nation] = value.split(/\s+/);
      this.set('name', name);
      this.set('nation', nation);
      return value;
    },
  }),
});

let kali = Player2.create({
  name: 'kali',
  match: '67',
});
kali.best;
kali.set('record', {
  Bat: '90/70',
  Bowl: '5/10',
});
kali.best;
Player2.reopen({
  isPerson: true,
});

let Naren = Player2.create();
Naren.set('Native', 'Naren WestIndies');

export default class PlayerComponentComponent extends Component {
  gova = gova;
  Naren = Naren;
  surya = surya;
  kali = kali;
  detail = detail;
}
