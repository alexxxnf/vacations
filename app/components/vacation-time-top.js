import Ember from 'ember';

export default Ember.Component.extend({
    selling_service: Ember.inject.service('selling'),
    i18n: Ember.inject.service(),
    rounded_model: Ember.computed('model', function () {
        let self = this;
        let fake_chart = AmCharts.makeChart(document.createElement('div'), {
            "language": self.get('i18n.locale'),
            "type": "serial",
        });

        let data = this.get('model').map(function(val){
            let holidays = 0;
            let day_offs = 0;

            let current_date = val.start_date;
            while (current_date <= val.end_date) {
                let year = current_date.getFullYear();
                let month = current_date.getMonth() + 1;
                let day = current_date.getDate();

                if (self.get('selling_service').isHoliday(year, month, day)) {
                    holidays++;
                } else if (self.get('selling_service').isDayOff(year, month, day)) {
                    day_offs++;
                }

                current_date = new Date(current_date.getTime());
                current_date.setDate(current_date.getDate() + 1);
            }



            return {
                diff: Math.round(val.diff).toLocaleString(),
                start_date: AmCharts.formatDate(val.start_date, 'EEE MMM DD YYYY', fake_chart),
                end_date: AmCharts.formatDate(val.end_date, 'MMM DD', fake_chart),
                holidays,
                day_offs,
            }
        });

        fake_chart.destroy();

        return data;
    }),
});
