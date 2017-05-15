import Ember from 'ember';

export default Ember.Component.extend({
    attributeBindings: ['style'],
    style: Ember.String.htmlSafe('height: 500px;'),
    i18n: Ember.inject.service(),
    model_observer: Ember.observer('model', function (sender, key, value, rev) {
        let chart = this.get('chart');
        chart.dataProvider = this.prepareData(this.get('model'));
        chart.validateData();
    }),
    prepareData(data) {
        let res = data.map(value => {
            let salary = Math.round(value.salary);
            let selling = Math.round(value.selling);
            let diff = Math.round(value.diff);
            return {
                date: value.start_date,
                selling,
                salary,
                diff,
            }
        });
        return res;
    },
    didInsertElement() {
        this._super(...arguments);

        AmCharts.addInitHandler(function (chart) {
            const num = 1234.56;
            const format = num.toLocaleString();

            chart.thousandsSeparator = format.replace(/1(.*)2.*/, '$1');
            chart.decimalSeparator = format.replace(/.*4(.*)5.*/, '$1');
        });

        let self = this;
        let chart = AmCharts.makeChart(this.$()[0], {
            "path": "/assets/amcharts",
            "language": this.get('i18n.locale'),
            "type": "serial",
            "theme": "light",
            "dataProvider": this.prepareData(this.get('model')),
            "valueAxes": [{
                "id": "v1",
                "axisAlpha": 0,
                "position": "left",
                "includeAllValues": true,
            }],
            "balloon": {
                "borderThickness": 1,
                "shadowAlpha": 0
            },
            "graphs": [
                {
                    "id": "g1",
                    "lineThickness": 1,
                    "title": "Profit",
                    "type": "column",
                    "fillAlphas": 0.3,
                    "lineColor": "#14f614",
                    "negativeLineColor": "#ff4000",
                    "negativeFillColors": "#ff4000",
                    "valueField": "diff",
                    "balloonText": this.get('i18n').t('chart.profit_balloon').toString(),
                    "balloonFunction": function (item, graph) {
                        var result = graph.balloonText;
                        for (var key in item.dataContext) {
                            if (item.dataContext.hasOwnProperty(key) && !isNaN(item.dataContext[key])) {
                                var formatted = AmCharts.formatNumber(item.dataContext[key], {
                                    precision: chart.precision,
                                    decimalSeparator: chart.decimalSeparator,
                                    thousandsSeparator: chart.thousandsSeparator
                                });
                                result = result.replace("[[" + key + "]]", formatted);
                            }
                        }
                        return result;
                    }
                },
            ],
            "chartScrollbar": {
                "graph": "g1",
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
                "pan": true,
                "cursorAlpha": 1,
                "cursorColor": "#258cbb",
                "categoryBalloonFunction": function (date) {
                    let vacations_length = self.get('vacations_length');

                    let end_date = new Date(date.getTime());
                    end_date.setDate(date.getDate() + (vacations_length - 1));

                    let from_date = AmCharts.formatDate(date, 'EEE MMM DD', this.chart);
                    let to_date = AmCharts.formatDate(end_date, 'MMM DD', this.chart);

                    let translation = self.get('i18n').t(
                        'chart.diff_category_balloon', {count: vacations_length, from_date, to_date}).toString();

                    return translation;
                }
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
