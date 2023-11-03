var r = require('rethinkdb');

var connection = null;

r.connect({host: 'localhost', port: 28015}, function (err, conn) {

    if (err) {
        throw err;
    }

    connection = conn;

    r.db('spent_time').table('event').indexCreate(
        'userStartTime', [r.row('user'), r.row('startTime')]
    ).run(connection, function (err, result) {

        if (err) {
            throw err;
        }

        console.log('userStartTime', result);
    });

});

