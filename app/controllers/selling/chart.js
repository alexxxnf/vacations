import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        updatePeriod(startIndex, endIndex) {
            let vacation_days = this.get('model').slice(startIndex, endIndex);
            this.set('vacation_days', vacation_days);
        }
    }
});
