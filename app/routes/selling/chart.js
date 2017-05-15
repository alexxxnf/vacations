import Ember from 'ember';

export default Ember.Route.extend({
    model(_, transition) {
        let model = this.modelFor('selling');
        return model;
    },
});
