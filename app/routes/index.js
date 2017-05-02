import Ember from 'ember';

const DEFAULT_SALARY = '50000';
const DEFAULT_AVG_SALARY = '50000';

export default Ember.Route.extend({
    beforeModel() {
        this.transitionTo('chart', DEFAULT_SALARY, DEFAULT_AVG_SALARY);
    }
});
