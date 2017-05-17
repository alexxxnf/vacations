import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        'change': function () {
            this.sendAction('changeSalary', this.get('salary'), this.get('avg_salary'));
        }
    }
});
