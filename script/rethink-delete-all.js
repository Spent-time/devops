var r = require('rethinkdb');

var connection = null;

/** DO NOT CHANGE !!! **/
r.connect({host: 'localhost', port: 28015}, function (err, conn) {

    if (err) {
        throw err;
    }

    connection = conn;


    r.db('spent_time').table('event').delete({}).run(connection, function (err, result) {

        if (err) {
            throw err;
        }

        console.log('event', result);
    });

    r.db('spent_time').table('item').delete({}).run(connection, function (err, result) {

        if (err) {
            throw err;
        }

        console.log('item', result);
    });

    r.db('spent_time').table('session').delete({}).run(connection, function (err, result) {

        if (err) {
            throw err;
        }

        console.log('session', result);


    });

    r.db('spent_time').table('setting').delete({}).run(connection, function (err, result) {

        if (err) {
            throw err;
        }

        console.log('setting', result);


    });

    r.db('spent_time').table('users').delete({}).run(connection, function (err, result) {

        if (err) {
            throw err;
        }

        console.log('users', result);
    });
});

//process.exit();


