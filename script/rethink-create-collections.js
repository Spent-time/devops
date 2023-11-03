var r = require('rethinkdb');

var connection = null;

r.connect({host: 'localhost', port: 28015}, function (err, conn) {

    if (err) {
        throw err;
    }

    connection = conn;


    r.db('spent_time').tableCreate('event').run(connection, function (err, result) {

        if (err) {
            throw err;
        }

        console.log('event', result);
    });


    r.db('spent_time').tableCreate('item').run(connection, function (err, result) {

        if (err) {
            throw err;
        }

        console.log('item', result);
    });


    r.db('spent_time').tableCreate('session').run(connection, function (err, result) {

        if (err) {
            throw err;
        }

        console.log('session', result);
    });


    r.db('spent_time').tableCreate('setting').run(connection, function (err, result) {

        if (err) {
            throw err;
        }

        console.log('setting', result);
    });

    r.db('spent_time').tableCreate('users').run(connection, function (err, result) {

        if (err) {
            throw err;
        }

        console.log('users', result);
    });


});
