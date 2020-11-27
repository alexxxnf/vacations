import Ember from 'ember';

const DEFAULT_START_DATE = '2020-01-01';
const DEFAULT_END_DATE = '2022-01-01';

export default Ember.Route.extend({
    selling: Ember.inject.service('selling'),
    model(params) {
        this.set('params', params);

        let start_date = new Date(DEFAULT_START_DATE);
        let end_date = new Date(DEFAULT_END_DATE);
        let model = this.get('selling').selling(params.salary, params.avg_salary, start_date, end_date);

        return model;
    },
    setupController(controller, model) {
        this._super(controller, model);

        controller.setProperties({
            'salary': this.get('params').salary,
            'avg_salary': this.get('params').avg_salary,
        });
    }
});
