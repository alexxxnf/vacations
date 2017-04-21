import Ember from 'ember';

export default Ember.Component.extend({
    attributeBindings: ['style'],
    style: Ember.String.htmlSafe('height: 500px;'),
    data_provider: Ember.computed('model.[]', function () {
        let data = (this.get('model') || []).map(value => ({
            date: value.date,
            selling: parseFloat(value.selling.toFixed(2)),
            salary: parseFloat(value.salary.toFixed(2))
        }));
        let chart = this.get('chart');
        if (chart) {
            chart.dataProvider = data;
            chart.validateData();
        }

        return data;
    }),
    onSelected(e) {
        let vacation_days = this.get('model').slice(e.startIndex, e.endIndex + 1);
        let total_salary = 0;
        let total_selling = 0;

        for (let day of vacation_days) {
            total_salary += day.salary;
            total_selling += day.selling;
        }

        console.log('salary', total_salary);
        console.log('selling', total_selling);
    },
    didInsertElement() {
        this._super(...arguments);

        let chart = AmCharts.makeChart(this.$()[0], {
            "type": "serial",
            "theme": "light",
            "marginRight": 40,
            "marginLeft": 40,
            "autoMarginOffset": 20,
            "dataProvider": this.get('data_provider'),
            "valueAxes": [{
                "id": "v1",
                "axisAlpha": 0,
                "position": "left",
                "ignoreAxisWidth": true
            }],
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "graphs": [
                {
                    "id": "g2",
                    "lineThickness": 2,
                    "title": "Salary",
                    "type": "column",
                    "fillAlphas": 0.3,
                    "valueField": "salary",
                },
                {
                    "id": "g1",
                    "lineThickness": 2,
                    "title": "Selling",
                    "valueField": "selling",
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
                "valueLineEnabled": true,
                "valueLineBalloonEnabled": true,
                "cursorAlpha": 1,
                "cursorColor": "#258cbb",
                "listeners": [{
                  "event": "selected",
                  "method": this.onSelected.bind(this),
                }],
                "selectWithoutZooming": true,
                "valueLineAlpha": 0.2,
            },
            "valueScrollbar": {
                "oppositeAxis": false,
                "offset": 50,
                "scrollbarHeight": 10
            },
            "categoryField": "date",
            "categoryAxis": {
                "parseDates": true,
                "dashLength": 1,
                "minorGridEnabled": true
            },
        });

        chart.addListener("rendered", zoomChart);

        zoomChart();

        function zoomChart() {
            chart.zoomToIndexes(chart.dataProvider.length - 90, chart.dataProvider.length - 1);
        }

        this.set('chart', chart);
    },
    willDestroyElement() {
        this._super(...arguments);

        this.get('chart').destroy();
    }
});
