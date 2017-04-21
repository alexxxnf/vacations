import Ember from 'ember';

export default Ember.Route.extend({
    start_date: '2017-01-01',
    end_date: '2018-01-01',
    selling: Ember.inject.service('selling'),
    model() {
        let start_date = new Date(this.start_date);
        let end_date = new Date(this.end_date);
        let salary = 50000;
        let avg_salary = 50000;
        let model = this.get('selling').selling(salary, avg_salary, start_date, end_date);

        return model;
    }
});
