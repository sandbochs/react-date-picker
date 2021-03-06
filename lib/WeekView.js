'use strict';

var React = require('react');
var moment = require('moment');

module.exports = React.createClass({

    displayName: 'WeekView',

    getDefaultProps: function getDefaultProps() {
        return {
            days: [],
            date: null
        };
    },

    getDaysForView: function getDaysForView(value) {
        var first = moment(value).startOf('month');
        var start = this.getWeekStartMoment(first);
        var result = [];
        var i = 0;

        if (first.add('days', -1).isBefore(start)) {
            //make sure the last day of prev month is included
            start.add('weeks', -1);
        }

        for (; i < 42; i++) {
            result.push(moment(start));
            start.add('days', 1);
        }

        return result;
    },

    render: function render() {

        var days = this.props.days;
        var date = this.props.date;

        return React.createElement(
            'table',
            null,
            React.createElement(
                'tbody',
                null,
                weekDayNames.map(renderDayName)
            )
        );
    }

});