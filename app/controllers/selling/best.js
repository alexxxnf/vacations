import Ember from 'ember';

export default Ember.Controller.extend({
    vacations_length_observer: Ember.observer('vacations_length', function (sender, key, value, rev) {
        this.transitionToRoute('selling.best', sender.get('vacations_length'));
    }),
});
