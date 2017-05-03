import Ember from 'ember';

export default Ember.Component.extend({
    attributeBindings: ['style'],
    style: Ember.String.htmlSafe('height: 500px;'),
    model_observer: Ember.observer('model', function (sender, key, value, rev) {
        let chart = this.get('chart');
        chart.dataProvider = this.prepareData(this.get('model'));
        chart.validateData();
    }),
    prepareData(data) {
        let res = data.map(value => ({
            date: value.date,
            selling: Math.round(value.selling),
            salary: Math.round(value.salary)
        }));
        return res;
    },
    onSelected(e) {
        let event = this.sendAction('updatePeriod', e.startIndex, e.endIndex + 1);
    },
    didInsertElement() {
        this._super(...arguments);

        let chart = AmCharts.makeChart(this.$()[0], {
            "path": "/amcharts",
            "type": "serial",
            "theme": "light",
            "dataProvider": this.prepareData(this.get('model')),
            "valueAxes": [{
                "id": "v1",
                "axisAlpha": 0,
                "position": "left",
                "includeAllValues": true,
                "stackType": "3d",
            }],
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "graphs": [
                {
                    "id": "g2",
                    "lineThickness": 1,
                    "title": "Salary",
                    "type": "column",
                    "fillAlphas": 0.3,
                    "valueField": "salary",
                    "balloonText": "Salary: [[value]]"
                },
                {
                    "id": "g1",
                    "lineThickness": 1,
                    "title": "Selling",
                    "type": "column",
                    "fillAlphas": 0.3,
                    "valueField": "selling",
                    "balloonText": "Selling: [[value]]"
                },
            ],
            "chartScrollbar": {
                "graph": "g2",
                "oppositeAxis": false,
                "offset": 30,
                "scrollbarHeight": 80,
                "backgroundAlpha": 0,
                "selectedBackgroundAlpha": 0.1,
                "selectedBackgroundColor": "#888888",
                "graphFillAlpha": 0,
                "graphLineAlpha": 0.5,
                "selectedGraphFillAlpha": 0,
                "selectedGraphLineAlpha": 1,
                "autoGridCount": true,
                "color": "#AAAAAA"
            },
            "chartCursor": {
                "cursorAlpha": 1,
                "cursorColor": "#258cbb",
                "listeners": [{
                    "event": "selected",
                    "method": this.onSelected.bind(this),
                }],
                "selectWithoutZooming": true,
                "categoryBalloonDateFormat": "EEE MMM DD, YYYY",
            },
            "categoryField": "date",
            "categoryAxis": {
                "parseDates": true,
                "dashLength": 1,
                "minorGridEnabled": true,
            },
            "zoomOutOnDataUpdate": false,
        });

        chart.addListener("rendered", zoomChart);

        zoomChart();

        function zoomChart() {
            chart.zoomToIndexes(chart.dataProvider.length - 60, chart.dataProvider.length - 1);
        }

        this.set('chart', chart);
    },
    willDestroyElement() {
        this._super(...arguments);

        this.get('chart').destroy();
    }
});
