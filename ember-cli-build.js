/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
    let app = new EmberApp(defaults, {});

    app.import('bower_components/amcharts3/amcharts/amcharts.js');
    app.import('bower_components/amcharts3/amcharts/serial.js');
    app.import('bower_components/amcharts3/amcharts/themes/light.js');

    return app.toTree();
};
