import Ember from 'ember';

export default Ember.Component.extend({
    selling_service: Ember.inject.service('selling'),
    salary: 0,
    selling: 0,
    diff: 0,
    period: 0,
    holidays: 0,
    profit: false,
    vacancy_observer: Ember.observer('vacation_days', function (sender, key, value, rev) {
        let salary = 0;
        let selling = 0;
        let holidays = 0;

        let vacation_days = this.get('vacation_days');
        let period = vacation_days.length;

        for (let current_date of vacation_days) {
            salary += current_date.salary;
            selling += current_date.selling;

            let year = current_date.date.getFullYear();
            let month = current_date.date.getMonth() + 1;
            let day = current_date.date.getDate();
            if (this.get('selling_service').isHoliday(year, month, day)) {
                holidays++;
            }
        }

        let diff = selling - salary;
        let profit = diff > 0;

        this.setProperties({
            salary: Math.round(salary),
            selling: Math.round(selling),
            diff: Math.round(diff),
            period,
            holidays,
            profit,
        });
    }),
});
