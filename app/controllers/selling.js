import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        'changeSalary': function (salary, avg_salary) {
            let dirty_hack = Ember.getOwner(this).lookup('controller:application');
            let current_route = dirty_hack.currentPath;
            let current_params = dirty_hack.target.currentState.routerJsState.params[current_route];
            let new_params = [current_route, salary, avg_salary].concat(Object.values(current_params));

            this.transitionToRoute.apply(this, new_params);
        }
    }
});
