import Ember from 'ember';


function holidays(year, month) {
    //  TODO: get it from Google
    let holidays = {
        2016: [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 16, 17, 23, 24, 30, 31],
            [6, 7, 13, 14, 21, 22, 23, 27, 28],
            [5, 6, 7, 8, 12, 13, 19, 20, 26, 27],
            [2, 3, 9, 10, 16, 17, 23, 24, 30],
            [1, 2, 3, 7, 8, 9, 14, 15, 21, 22, 28, 29],
            [4, 5, 11, 12, 13, 18, 19, 25, 26],
            [2, 3, 9, 10, 16, 17, 23, 24, 30, 31],
            [6, 7, 13, 14, 20, 21, 27, 28],
            [3, 4, 10, 11, 17, 18, 24, 25],
            [1, 2, 8, 9, 15, 16, 22, 23, 29, 30],
            [4, 5, 6, 12, 13, 19, 20, 26, 27],
            [3, 4, 10, 11, 17, 18, 24, 25, 31]
        ],
        2017: [
            [1, 2, 3, 4, 5, 6, 7, 8, 14, 15, 21, 22, 28, 29],
            [4, 5, 11, 12, 18, 19, 23, 24, 25, 26],
            [4, 5, 8, 11, 12, 18, 19, 25, 26],
            [1, 2, 8, 9, 15, 16, 22, 23, 29, 30],
            [6, 7, 13, 14, 20, 21, 27, 28],
            [3, 4, 10, 11, 17, 18, 24, 25],
            [1, 2, 8, 9, 15, 16, 22, 23, 29, 30],
            [5, 6, 12, 13, 19, 20, 26, 27],
            [2, 3, 9, 10, 16, 17, 23, 24, 30],
            [1, 7, 8, 14, 15, 21, 22, 28, 29],
            [4, 5, 6, 11, 12, 18, 19, 25, 26],
            [2, 3, 9, 10, 16, 17, 23, 24, 30, 31]
        ]
    };

    return holidays[year] && holidays[year][month - 1];
}

function isHoliday(year, month, day) {
    return holidays(year, month).indexOf(day) !== -1;
}

function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

function workDaysInMonth(year, month) {
    let holidaysInMonth = holidays(year, month);
    return daysInMonth(year, month) - (holidaysInMonth || []).length;
}

function salaryRatio(year, month, day) {
    let ratio;

    if (isHoliday(year, month, day)) {
        ratio = 0;
    } else {
        ratio = 1 / workDaysInMonth(year, month);
    }

    return ratio;
}

function sellingRatio() {
    return 1 / 29.3;
}

function salaryAndSelling(salary, avgSalary, year, month, day) {
    return {
        'salary': salary * salaryRatio(year, month, day),
        'selling': avgSalary * sellingRatio()
    }
}


export default Ember.Service.extend({

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
