'use strict';

const moment = require('moment');

module.exports = {
    up: (queryInterface) => {
        return queryInterface.bulkInsert('user', [{
            name: 'Srettha Terananont',
            email: 'strayedpeople@gmail.com',
            imageUrl: 'https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/15966118_10211128107775460_23387941090311074_n.jpg?oh=4ca3528905e8f54f7b1a1d449edbf2c4&oe=5A961CC6',
            gender: 'male',
            ageRange: '21',
            isAdmin: true,
            isDeleted: false,
            createdAt: moment().format(),
            updatedAt: moment().format()
        }], {});
    },

    down: (queryInterface) => {
        return queryInterface.bulkDelete('user', null, {});
    }
};