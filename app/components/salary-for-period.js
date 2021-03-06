import Ember from 'ember';

export default Ember.Component.extend({
    selling_service: Ember.inject.service('selling'),
    salary: 0,
    selling: 0,
    diff: 0,
    period: 0,
    holidays: 0,
    day_offs: 0,
    holidays_and_day_offs: false,
    profit: false,
    vacancy_observer: Ember.observer('vacation_days', function (sender, key, value, rev) {
        let salary = 0;
        let selling = 0;
        let holidays = 0;
        let day_offs = 0;

        let vacation_days = this.get('vacation_days');
        let period = vacation_days.length;

        for (let i = 0, l = vacation_days.length; i < l; ++i) {
            let current_date = vacation_days[i];

            salary += current_date.salary;
            selling += current_date.selling;

            let year = current_date.date.getFullYear();
            let month = current_date.date.getMonth() + 1;
            let day = current_date.date.getDate();
            if (this.get('selling_service').isHoliday(year, month, day)) {
                holidays++;
            } else if (this.get('selling_service').isDayOff(year, month, day)) {
                day_offs++;
            }
        }

        let diff = selling - salary;
        let profit = diff > 0;
        let holidays_and_day_offs = holidays && day_offs;

        this.setProperties({
            salary: Math.round(salary),
            selling: Math.round(selling),
            diff: Math.round(diff),
            period,
            holidays,
            day_offs,
            holidays_and_day_offs,
            profit,
        });
    }),
});
