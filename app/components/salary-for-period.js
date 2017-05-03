import Ember from 'ember';

export default Ember.Component.extend({
    salary: Ember.computed('salary_for_period', function () {
        return Math.round(this.get('salary_for_period'));
    }),
    selling: Ember.computed('selling_for_period', function () {
        return Math.round(this.get('selling_for_period'));
    }),
    diff: Ember.computed('salary_for_period', 'selling_for_period', function () {
        return Math.round(this.get('selling_for_period') - this.get('salary_for_period'));
    }),
});
