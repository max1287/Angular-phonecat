'use strict';

angular.
    module('phoneList').
    component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ['Phone',
            function PhoneListController(Phone) {
            this.orderProp = 'age';
            this.desc = '';
            this.phones = Phone.query();
            }
        ]
    });