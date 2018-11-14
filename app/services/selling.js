import Ember from 'ember';

const HOLIDAY = 1;
const DAY_OFF = 2;

function holidays(year, month) {
    //  TODO: get it from Google
    const holidays = {
        2018: {
            1: {1: HOLIDAY, 2: HOLIDAY, 3: HOLIDAY, 4: HOLIDAY, 5: HOLIDAY, 6: HOLIDAY, 7: HOLIDAY, 8: HOLIDAY, 13: DAY_OFF, 14: DAY_OFF, 20: DAY_OFF, 21: DAY_OFF, 27: DAY_OFF, 28: DAY_OFF},
            2: {3: DAY_OFF, 4: DAY_OFF, 10: DAY_OFF, 11: DAY_OFF, 17: DAY_OFF, 18: DAY_OFF, 23: HOLIDAY, 24: DAY_OFF, 25: DAY_OFF},
            3: {3: DAY_OFF, 4: DAY_OFF, 8: HOLIDAY, 9: DAY_OFF, 10: DAY_OFF, 11: DAY_OFF, 17: DAY_OFF, 18: DAY_OFF, 24: DAY_OFF, 25: DAY_OFF, 31: DAY_OFF},
            4: {1: DAY_OFF, 7: DAY_OFF, 8: DAY_OFF, 14: DAY_OFF, 15: DAY_OFF, 21: DAY_OFF, 22: DAY_OFF, 29: DAY_OFF, 30: DAY_OFF},
            5: {1: HOLIDAY, 2: DAY_OFF, 5: DAY_OFF, 6: DAY_OFF, 9: HOLIDAY, 12: DAY_OFF, 13: DAY_OFF, 19: DAY_OFF, 20: DAY_OFF, 26: DAY_OFF, 27: DAY_OFF},
            6: {2: DAY_OFF, 3: DAY_OFF, 10: DAY_OFF, 11: DAY_OFF, 12: HOLIDAY, 16: DAY_OFF, 17: DAY_OFF, 23: DAY_OFF, 24: DAY_OFF},
            7: {1: DAY_OFF, 7: DAY_OFF, 8: DAY_OFF, 14: DAY_OFF, 15: DAY_OFF, 21: DAY_OFF, 22: DAY_OFF, 28: DAY_OFF, 29: DAY_OFF},
            8: {4: DAY_OFF, 5: DAY_OFF, 11: DAY_OFF, 12: DAY_OFF, 18: DAY_OFF, 19: DAY_OFF, 25: DAY_OFF, 26: DAY_OFF},
            9: {1: DAY_OFF, 2: DAY_OFF, 8: DAY_OFF, 9: DAY_OFF, 15: DAY_OFF, 16: DAY_OFF, 22: DAY_OFF, 23: DAY_OFF, 29: DAY_OFF, 30: DAY_OFF},
            10: {6: DAY_OFF, 7: DAY_OFF, 13: DAY_OFF, 14: DAY_OFF, 20: DAY_OFF, 21: DAY_OFF, 27: DAY_OFF, 28: DAY_OFF},
            11: {3: DAY_OFF, 4: HOLIDAY, 5: DAY_OFF, 10: DAY_OFF, 11: DAY_OFF, 17: DAY_OFF, 18: DAY_OFF, 24: DAY_OFF, 25: DAY_OFF},
            12: {1: DAY_OFF, 2: DAY_OFF, 8: DAY_OFF, 9: DAY_OFF, 15: DAY_OFF, 16: DAY_OFF, 12: DAY_OFF, 23: DAY_OFF, 30: DAY_OFF, 31: DAY_OFF}
        },
        2019: {
            1: {1: HOLIDAY, 2: HOLIDAY, 3: HOLIDAY, 4: HOLIDAY, 5: HOLIDAY, 6: HOLIDAY, 7: HOLIDAY, 8: HOLIDAY, 12: DAY_OFF, 13: DAY_OFF, 19: DAY_OFF, 20: DAY_OFF, 26: DAY_OFF, 27: DAY_OFF},
            2: {2: DAY_OFF, 3: DAY_OFF, 9: DAY_OFF, 10: DAY_OFF, 16: DAY_OFF, 17: DAY_OFF, 23: HOLIDAY, 24: DAY_OFF},
            3: {2: DAY_OFF, 3: DAY_OFF, 8: HOLIDAY, 9: DAY_OFF, 10: DAY_OFF, 16: DAY_OFF, 17: DAY_OFF, 23: DAY_OFF, 24: DAY_OFF, 30: DAY_OFF, 31: DAY_OFF},
            4: {6: DAY_OFF, 7: DAY_OFF, 13: DAY_OFF, 14: DAY_OFF, 20: DAY_OFF, 21: DAY_OFF, 27: DAY_OFF, 28: DAY_OFF},
            5: {1: HOLIDAY, 2: DAY_OFF, 3: DAY_OFF, 4: DAY_OFF, 5: DAY_OFF, 9: HOLIDAY, 10: DAY_OFF, 11: DAY_OFF, 12: DAY_OFF, 18: DAY_OFF, 19: DAY_OFF, 25: DAY_OFF, 26: DAY_OFF},
            6: {1: DAY_OFF, 2: DAY_OFF, 8: DAY_OFF, 9: DAY_OFF, 12: HOLIDAY, 15: DAY_OFF, 16: DAY_OFF, 22: DAY_OFF, 23: DAY_OFF, 29: DAY_OFF, 30: DAY_OFF},
            7: {6: DAY_OFF, 7: DAY_OFF, 13: DAY_OFF, 14: DAY_OFF, 20: DAY_OFF, 21: DAY_OFF, 27: DAY_OFF, 28: DAY_OFF},
            8: {3: DAY_OFF, 4: DAY_OFF, 10: DAY_OFF, 11: DAY_OFF, 17: DAY_OFF, 18: DAY_OFF, 24: DAY_OFF, 25: DAY_OFF, 31: DAY_OFF},
            9: {1: DAY_OFF, 7: DAY_OFF, 8: DAY_OFF, 14: DAY_OFF, 15: DAY_OFF, 21: DAY_OFF, 22: DAY_OFF, 28: DAY_OFF, 29: DAY_OFF},
            10: {2: DAY_OFF, 6: DAY_OFF, 12: DAY_OFF, 13: DAY_OFF, 19: DAY_OFF, 20: DAY_OFF, 26: DAY_OFF, 27: DAY_OFF},
            11: {2: DAY_OFF, 3: DAY_OFF, 4: HOLIDAY, 9: DAY_OFF, 10: DAY_OFF, 16: DAY_OFF, 17: DAY_OFF, 13: DAY_OFF, 24: DAY_OFF, 30: DAY_OFF},
            12: {1: DAY_OFF, 7: DAY_OFF, 8: DAY_OFF, 14: DAY_OFF, 15: DAY_OFF, 21: DAY_OFF, 22: DAY_OFF, 28: DAY_OFF, 29: DAY_OFF}
        },
        2020: {
            1: {1: HOLIDAY, 2: HOLIDAY, 3: HOLIDAY, 4: HOLIDAY, 5: HOLIDAY, 6: HOLIDAY, 7: HOLIDAY, 8: HOLIDAY, 11: DAY_OFF, 12: DAY_OFF, 18: DAY_OFF, 19: DAY_OFF, 25: DAY_OFF, 26: DAY_OFF}
        }
    };

    return holidays[year] && holidays[year][month];
}

function isHoliday(year, month, day) {
    let month_holidays = holidays(year, month);
    return month_holidays && month_holidays[day] === HOLIDAY;
}

function isDayOff(year, month, day) {
    let month_holidays = holidays(year, month);
    return month_holidays && month_holidays[day] === DAY_OFF;
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
