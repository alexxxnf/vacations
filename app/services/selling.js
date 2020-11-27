import Ember from 'ember';

const H = 1;  //  Holiday
const O = 2;  //  Day off

function holidays(year, month) {
    //  TODO: get it from Google
    const holidays = {
        /*2019: {
            1: {1: H, 2: H, 3: H, 4: H, 5: H, 6: H, 7: H, 8: H, 12: O, 13: O, 19: O, 20: O, 26: O, 27: O},
            2: {2: O, 3: O, 9: O, 10: O, 16: O, 17: O, 23: H, 24: O},
            3: {2: O, 3: O, 8: H, 9: O, 10: O, 16: O, 17: O, 23: O, 24: O, 30: O, 31: O},
            4: {6: O, 7: O, 13: O, 14: O, 20: O, 21: O, 27: O, 28: O},
            5: {1: H, 2: O, 3: O, 4: O, 5: O, 9: H, 10: O, 11: O, 12: O, 18: O, 19: O, 25: O, 26: O},
            6: {1: O, 2: O, 8: O, 9: O, 12: H, 15: O, 16: O, 22: O, 23: O, 29: O, 30: O},
            7: {6: O, 7: O, 13: O, 14: O, 20: O, 21: O, 27: O, 28: O},
            8: {3: O, 4: O, 10: O, 11: O, 17: O, 18: O, 24: O, 25: O, 31: O},
            9: {1: O, 7: O, 8: O, 14: O, 15: O, 21: O, 22: O, 28: O, 29: O},
            10: {2: O, 6: O, 12: O, 13: O, 19: O, 20: O, 26: O, 27: O},
            11: {2: O, 3: O, 4: H, 9: O, 10: O, 16: O, 17: O, 23: O, 24: O, 30: O},
            12: {1: O, 7: O, 8: O, 14: O, 15: O, 21: O, 22: O, 28: O, 29: O}
        },*/
        2020: {
            1: {1: H, 2: H, 3: H, 4: H, 5: H, 6: H, 7: H, 8: H, 11: O, 12: O, 18: O, 19: O, 25: O, 26: O},
            2: {1: O, 2: O, 8: O, 9: O, 15: O, 16: O, 22: O, 23: H, 24: O, 29: O},
            3: {1: O, 7: O, 8: H, 9: O, 14: O, 15: O, 21: O, 22: O, 28: O, 29: O},
            4: {4: O, 5: O, 11: O, 12: O, 18: O, 19: O, 25: O, 26: O},
            5: {1: H, 2: O, 3: O, 4: O, 5: O, 9: H, 10: O, 11: O, 16: O, 17: O, 23: O, 24: O, 30: O, 31: O},
            6: {6: O, 7: O, 12: H, 13: O, 14: O, 20: O, 21: O, 27: O, 28: O},
            7: {4: O, 5: O, 11: O, 12: O, 18: O, 19: O, 25: O, 26: O},
            8: {1: O, 2: O, 8: O, 9: O, 15: O, 16: O, 22: O, 23: O, 29: O, 30: O},
            9: {5: O, 6: O, 12: O, 13: O, 19: O, 20: O, 26: O, 27: O},
            10: {3: O, 4: O, 10: O, 11: O, 17: O, 18: O, 24: O, 25: O, 31: O},
            11: {1: O, 4: H, 7: O, 8: O, 9: O, 14: O, 15: O, 21: O, 22: O, 28: O, 29: O},
            12: {5: O, 6: O, 12: O, 13: O, 19: O, 20: O, 26: O, 27: O},
        },
        2021: {
            1: {1: H, 2: H, 3: H, 4: H, 5: H, 6: H, 7: H, 8: H, 9: O, 10: O, 16: O, 17: O, 23: O, 24: O, 30: O, 31: O},
            2: {6: O, 7: O, 13: O, 14: O, 21: O, 23: H, 27: O, 28: O},
            3: {6: O, 7: O, 8: H, 13: O, 14: O, 20: O, 21: O, 27: O, 28: O},
            4: {3: O, 4: O, 10: O, 11: O, 17: O, 18: O, 24: O, 25: O},
            5: {1: H, 2: O, 3: O, 8: O, 9: H, 15: O, 16: O, 22: O, 23: O, 29: O, 30: O},
            6: {5: O, 6: O, 12: H, 13: O, 14: O, 19: O, 20: O, 26: O, 27: O},
            7: {3: O, 4: O, 10: O, 11: O, 17: O, 18: O, 24: O, 25: O, 31: O},
            8: {1: O, 7: O, 8: O, 14: O, 15: O, 21: O, 22: O, 28: O, 29: O},
            9: {4: O, 5: O, 11: O, 12: O, 18: O, 19: O, 25: O, 26: O},
            10: {2: O, 3: O, 9: O, 10: O, 16: O, 17: O, 23: O, 24: O, 30: O, 31: O},
            11: {4: H, 5: O, 6: O, 7: O, 13: O, 14: O, 20: O, 21: O, 27: O, 28: O},
            12: {4: O, 5: O, 11: O, 12: O, 18: O, 19: O, 25: O, 26: O, 31: O},
        },
        2022: {
            1: {1: H, 2: H, 3: H, 4: H, 5: H, 6: H, 7: H, 8: H, 9: O, 15: O, 16: O, 22: O, 23: O, 29: O, 30: O},
        }
    };

    return holidays[year] && holidays[year][month];
}

function isHoliday(year, month, day) {
    let month_holidays = holidays(year, month);
    return month_holidays && month_holidays[day] === H;
}

function isDayOff(year, month, day) {
    let month_holidays = holidays(year, month);
    return month_holidays && month_holidays[day] === O;
}

function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function workDaysInMonth(year, month) {
    let holidaysInMonth = Object.keys(holidays(year, month)).length;
    return daysInMonth(year, month) - holidaysInMonth;
}

function salaryRatio(year, month, day) {
    let ratio;

    if (isHoliday(year, month, day) || isDayOff(year, month, day)) {
        ratio = 0;
    } else {
        ratio = 1 / workDaysInMonth(year, month);
    }

    return ratio;
}

function sellingRatio(year, month, day) {
    let ratio;

    if (isHoliday(year, month, day)) {
        ratio = 0;
    } else {
        ratio = 1 / 29.3;
    }

    return ratio
}

function salaryAndSelling(salary, avgSalary, year, month, day) {
    return {
        'salary': salary * salaryRatio(year, month, day),
        'selling': avgSalary * sellingRatio(year, month, day)
    }
}


export default Ember.Service.extend({
    isDayOff,
    isHoliday,
    selling: function (salary, avgSalary, start_date, end_date) {
        let current_date = start_date;
        let data = [];

        while (current_date < end_date) {
            let year = current_date.getFullYear();
            let month = current_date.getMonth() + 1;
            let day = current_date.getDate();
            let money = salaryAndSelling(salary, avgSalary, year, month, day);

            data.push({
                date: current_date,
                selling: money.selling,
                salary: money.salary,
            });

            current_date = new Date(current_date.getTime());
            current_date.setDate(current_date.getDate() + 1);
        }

        return data;
    }
});
