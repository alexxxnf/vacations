import Ember from 'ember';

export default Ember.Controller.extend({
    salary_observer: Ember.observer('salary', function (sender, key, value, rev) {
        this.get('updateSalary') && this.get('updateSalary')(sender.get('salary'), sender.get('avg_salary'));
    }),
    avg_salary_observer: Ember.observer('avg_salary', function (sender, key, value, rev) {
        this.get('updateSalary') && this.get('updateSalary')(sender.get('salary'), sender.get('avg_salary'));
    })
});
