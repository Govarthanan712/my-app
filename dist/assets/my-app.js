'use strict';



;define("my-app/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("my-app/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "my-app/config/environment", "@ember/object"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends _application.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);

      _defineProperty(this, "appName", 'PLayerLIst');
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("my-app/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("my-app/components/player-component", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/object", "@ember/array"], function (_exports, _component, _templateFactory, _component2, _object, _array) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="bg">
  {{this.gova.name}}
  {{this.gova.match}}
  {{this.detail}}
  </div>
  
  <div class="bg">
  {{this.surya.name}}
  {{this.surya.match}}
  
  </div>
  
  <div class="bg">
  {{this.kali.name}}
  {{this.kali.match}}
  {{this.kali.overview}}<br>
  
  
  </div>
  
  <div class="bg">
  	Native:{{this.Naren.Native}} <br>
  	Name:{{this.Naren.name}}<br>
  	Nation:{{this.Naren.nation}}<br>
  	Native:{{this.Naren.Native}}<br>
  	{{this.Naren.isPerson}}
  
  </div>
  {{yield}}
  */
  {
    "id": "XmMS750N",
    "block": "[[[10,0],[14,0,\"bg\"],[12],[1,\"\\n\"],[1,[30,0,[\"gova\",\"name\"]]],[1,\"\\n\"],[1,[30,0,[\"gova\",\"match\"]]],[1,\"\\n\"],[1,[30,0,[\"detail\"]]],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"bg\"],[12],[1,\"\\n\"],[1,[30,0,[\"surya\",\"name\"]]],[1,\"\\n\"],[1,[30,0,[\"surya\",\"match\"]]],[1,\"\\n\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"bg\"],[12],[1,\"\\n\"],[1,[30,0,[\"kali\",\"name\"]]],[1,\"\\n\"],[1,[30,0,[\"kali\",\"match\"]]],[1,\"\\n\"],[1,[30,0,[\"kali\",\"overview\"]]],[10,\"br\"],[12],[13],[1,\"\\n\\n\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"bg\"],[12],[1,\"\\n\\tNative:\"],[1,[30,0,[\"Naren\",\"Native\"]]],[1,\" \"],[10,\"br\"],[12],[13],[1,\"\\n\\tName:\"],[1,[30,0,[\"Naren\",\"name\"]]],[10,\"br\"],[12],[13],[1,\"\\n\\tNation:\"],[1,[30,0,[\"Naren\",\"nation\"]]],[10,\"br\"],[12],[13],[1,\"\\n\\tNative:\"],[1,[30,0,[\"Naren\",\"Native\"]]],[10,\"br\"],[12],[13],[1,\"\\n\\t\"],[1,[30,0,[\"Naren\",\"isPerson\"]]],[1,\"\\n\\n\"],[13],[1,\"\\n\"],[18,1,null]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "my-app/components/player-component.hbs",
    "isStrictMode": false
  });

  const Player = _object.default.extend({
    init: function () {
      this._super(...arguments);

      console.log('Player Created'); // Setup
    },
    name: 'name-NA',
    match: 'match-NA',
    see: function () {
      return `(${this.name} is ${this.match} matches played)`;
    }
  });

  let gova = Player.create({
    name: 'gova',
    match: '34'
  });
  let surya = Player.create({
    name: 'surya',
    match: '56'
  });
  let detail = gova.see();

  const Player2 = _object.default.extend({
    name: null,
    match: null,
    nation: null,
    info: (0, _object.computed)('name', 'match', function () {
      console.log(`${this.name} is played ${this.match} matches `);
      return `${this.name} is played ${this.match} matches `;
    }),
    record: {
      Bat: '89/80',
      Bowl: '5/10'
    },
    best: (0, _object.computed)('record.{Bat,Bowl}', function () {
      console.log(`Batt-Best  = ${this.record.Bat} Bowl-Best=${this.record.Bowl}`);
      return `Batt-Best  = ${this.record.Bat} Bowl-Best=${this.record.Bowl}`;
    }),
    overview: (0, _object.computed)('info', 'best', function () {
      console.log(`${this.info} and with ${this.best} `);
      return `${this.info} and with ${this.best} `;
    }),
    Native: (0, _object.computed)('name', 'nation', 'native', {
      get(key) {
        return `${this.name} ${this.native}`;
      },

      set(key, value) {
        let [name, nation] = value.split(/\s+/);
        this.set('name', name);
        this.set('nation', nation);
        return value;
      }

    })
  });

  let kali = Player2.create({
    name: 'kali',
    match: '67'
  });
  kali.best;
  kali.set('record', {
    Bat: '90/70',
    Bowl: '5/10'
  });
  kali.best;
  Player2.reopen({
    isPerson: true
  });
  let Naren = Player2.create();
  Naren.set('Native', 'Naren WestIndies');

  class PlayerComponentComponent extends _component2.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "gova", gova);

      _defineProperty(this, "Naren", Naren);

      _defineProperty(this, "surya", surya);

      _defineProperty(this, "kali", kali);

      _defineProperty(this, "detail", detail);
    }

  }

  _exports.default = PlayerComponentComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, PlayerComponentComponent);
});
;define("my-app/components/todo-list", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/array", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _array, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <h1>TODO LIST</h1>
  
  {{this.scorer.titles}}
  <br><h1>Not Updated</h1>
  {{this.scorer.incomplete}}
  
  {{yield}}
  */
  {
    "id": "jUoOxudh",
    "block": "[[[10,\"h1\"],[12],[1,\"TODO LIST\"],[13],[1,\"\\n\\n\"],[1,[30,0,[\"scorer\",\"titles\"]]],[1,\"\\n\"],[10,\"br\"],[12],[13],[10,\"h1\"],[12],[1,\"Not Updated\"],[13],[1,\"\\n\"],[1,[30,0,[\"scorer\",\"incomplete\"]]],[1,\"\\n\\n\"],[18,1,null]],[\"&default\"],false,[\"yield\"]]",
    "moduleName": "my-app/components/todo-list.hbs",
    "isStrictMode": false
  });

  const Scorer = _object.default.extend({
    todo: null,

    init() {
      this.set('todo', (0, _array.A)([_object.default.create({
        title: "update Ball",
        isDone: false
      }), _object.default.create({
        title: "update Score",
        isDone: false
      }), _object.default.create({
        title: "update player",
        isDone: true
      })]));
    },

    titles: (0, _object.computed)('todo.[]', function () {
      console.log(this.todo.mapBy('title'));
      return this.todo.mapBy('title');
    }),
    incomplete: (0, _object.computed)('todo.@each.isDon', function () {
      let todo = this.todo;
      console.log(todo.filterBy('isDone', false));
      return todo.filterBy('isDone', false);
    })
  });

  let scorer = Scorer.create();
  scorer.titles;
  console.log(scorer.inComplete);
  scorer.todo[0].title = "Ball's update";
  scorer.todo.pushObject({
    title: "ball",
    isDone: false
  });
  scorer.titles;
  scorer.incomplete;
  scorer.todo[0].isDone = true;

  class TodoListComponent extends _component2.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "scorer", scorer);
    }

  }

  _exports.default = TodoListComponent;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, TodoListComponent);
});
;define("my-app/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("my-app/controllers/index", ["exports", "ember", "@ember/controller", "@ember/array", "@ember/object"], function (_exports, _ember, _controller, _array, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _ember.default.Controller.extend({});

  _exports.default = _default;
});
;define("my-app/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("my-app/helpers/app-version", ["exports", "@ember/component/helper", "my-app/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = (0, _helper.helper)(appVersion);

  _exports.default = _default;
});
;define("my-app/helpers/loc", ["exports", "@ember/string/helpers/loc"], function (_exports, _loc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _loc.default;
    }
  });
  Object.defineProperty(_exports, "loc", {
    enumerable: true,
    get: function () {
      return _loc.loc;
    }
  });
});
;define("my-app/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("my-app/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("my-app/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("my-app/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "my-app/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("my-app/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("my-app/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("my-app/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("my-app/initializers/export-application-global", ["exports", "ember", "my-app/config/environment"], function (_exports, _ember, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("my-app/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("my-app/models/blog-post", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class BlogPostModel extends _model.default {}

  _exports.default = BlogPostModel;
});
;define("my-app/router", ["exports", "@ember/routing/router", "my-app/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends _router.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
});
;define("my-app/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("my-app/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("my-app/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("my-app/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
});
;define("my-app/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
});
;define("my-app/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("my-app/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = (0, _templateFactory.createTemplateFactory)({
    "id": "NEQtprlt",
    "block": "[[[10,0],[14,0,\"bg\"],[12],[1,\"\\n\\t\"],[10,\"header\"],[12],[1,\"\\n\\t\\t\"],[8,[39,0],null,null,null],[1,\"\\t\\t\\n\\t\"],[13],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[46,[28,[37,2],null,null],null,null,null]],[],false,[\"todo-list\",\"component\",\"-outlet\"]]",
    "moduleName": "my-app/templates/application.hbs",
    "isStrictMode": false
  });

  _exports.default = _default;
});
;define("my-app/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("my-app/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("my-app/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("my-app/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('my-app/config/environment', [], function() {
  var prefix = 'my-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("my-app/app")["default"].create({"name":"my-app","version":"0.0.0+51705264"});
          }
        
//# sourceMappingURL=my-app.map
