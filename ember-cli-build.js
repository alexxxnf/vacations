/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');

module.exports = function (defaults) {
    let app = new EmberApp(defaults, {
    });

    //  Bootstrap
    app.import('node_modules/bootstrap/dist/css/bootstrap.css');

    //  AmCharts
    app.import('node_modules/amcharts3/amcharts/amcharts.js');
    app.import('node_modules/amcharts3/amcharts/serial.js');
    app.import('node_modules/amcharts3/amcharts/themes/light.js');
    app.import('node_modules/amcharts3/amcharts/lang/ru.js');

    let amchartsImages = new Funnel('node_modules/amcharts3/amcharts/images', {
        srcDir: '/',
        include: ['**/*'],
        destDir: '/assets/amcharts/images/',
    });

    return app.toTree(amchartsImages);
};
