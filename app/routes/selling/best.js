import Ember from 'ember';

const TOP_PROFIT_NUMBER = 10;

export default Ember.Route.extend({
    model(params, transition) {
        this.set('params', params);
        let vacations_length = params.vacations_length;

        let parent_model = this.modelFor('selling');

        let endDate = new Date(parent_model[0].date.getTime());
        endDate.setDate(parent_model[0].date.getTime() + (vacations_length - 1));

        let curVal = {
            start_date: parent_model[0].date,
            end_date: endDate,
            salary: 0,
            selling: 0,
            diff: 0,
        };

        for (let i = 0; i < vacations_length; ++i) {
            curVal.salary += parent_model[i].salary;
            curVal.selling += parent_model[i].selling;
        }
        curVal.diff = curVal.selling - curVal.salary;

        let model = [];
        model.push(curVal);
        for (let i = 1, l = parent_model.length; i < l; ++i) {
            let nextElem = parent_model[i + (vacations_length - 1)];
            if (!nextElem) {
                let nextElemDate = new Date(curVal.start_date.getTime());
                nextElemDate.setDate(curVal.start_date.getDate() + (vacations_length - 1));
                nextElem = {
                    date: nextElemDate,
                    salary: 0,
                    selling: 0,
                };
            }

            let salary = curVal.salary - parent_model[i - 1].salary + nextElem.salary;
            let selling = curVal.selling - parent_model[i - 1].selling + nextElem.selling;
            let diff = selling - salary;
            let nextVal = {
                start_date: parent_model[i].date,
                end_date: nextElem.date,
                salary,
                selling,
                diff
            };

            model.push(nextVal);
            curVal = nextVal;
        }

        return model;
    },
    setupController(controller, model) {
        this._super(controller, model);

        let top_profit_dates = model.concat().sort(function (a, b) {
            return b.diff - a.diff;
        }).slice(0, TOP_PROFIT_NUMBER);

        controller.setProperties({
            'vacations_length': this.get('params').vacations_length,
            top_profit_dates,
        });
    }
});
