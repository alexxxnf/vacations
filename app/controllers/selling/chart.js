import Ember from 'ember';

export default Ember.Controller.extend({
    salary_observer: Ember.observer('salary', function (sender, key, value, rev) {
        this.transitionToRoute('selling.chart', sender.get('salary'), sender.get('avg_salary'));
    }),
    avg_salary_observer: Ember.observer('avg_salary', function (sender, key, value, rev) {
        this.transitionToRoute('selling.chart', sender.get('salary'), sender.get('avg_salary'));
    }),
    actions: {
        updatePeriod(startIndex, endIndex) {
            let vacation_days = this.get('model').slice(startIndex, endIndex);
            this.set('vacation_days', vacation_days);
        }
    }
});
