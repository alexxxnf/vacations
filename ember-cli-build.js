/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');

module.exports = function (defaults) {
    let app = new EmberApp(defaults, {
    });

    //  Bootstrap
    app.import('bower_components/bootstrap/dist/css/bootstrap.css');

    //  AmCharts
    app.import('bower_components/amcharts3/amcharts/amcharts.js');
    app.import('bower_components/amcharts3/amcharts/serial.js');
    app.import('bower_components/amcharts3/amcharts/themes/light.js');
    app.import('bower_components/amcharts3/amcharts/lang/ru.js');

    let amchartsImages = new Funnel('bower_components/amcharts3/amcharts/images', {
        srcDir: '/',
        include: ['**/*'],
        destDir: '/assets/amcharts/images/',
    });

    return app.toTree(amchartsImages);
};
