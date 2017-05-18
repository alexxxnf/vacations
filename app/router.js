import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function () {
    this.route('selling', {path: '/:salary/:avg_salary'}, function () {
        this.route('chart', {path: '/chart'});
        this.route('best', {path: '/best/:vacations_length'});
    });
});

export default Router;
