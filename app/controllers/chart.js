import Ember from 'ember';

export default Ember.Controller.extend({
    salary_observer: Ember.observer('salary', function (sender, key, value, rev) {
        this.get('updateSalary') && this.get('updateSalary')(sender.get('salary'), sender.get('avg_salary'));
    }),
    avg_salary_observer: Ember.observer('avg_salary', function (sender, key, value, rev) {
        this.get('updateSalary') && this.get('updateSalary')(sender.get('salary'), sender.get('avg_salary'));
    }),
    actions: {
        updatePeriod(startIndex, endIndex) {
            let vacation_days = this.get('model').slice(startIndex, endIndex + 1);
            let total_salary = 0;
            let total_selling = 0;

            for (let day of vacation_days) {
                total_salary += day.salary;
                total_selling += day.selling;
            }

            this.setProperties({'salary_for_period': total_salary, 'selling_for_period': total_selling});
        }
    }
});
