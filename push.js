var push = require('web-push');

//let vapidKeys = push.generateVAPIDKeys();
//console.log(vapidKeys);

let vapidKeys = {
    publickey: 'BDzYfjVqZoHJdMJaThzhiYGKbkx6f5oDN4YujNwWjTdCbbZlLC2eX_OvMk2MoCDzX5dF0MqvUmyVzadT_P9mY9w',
    privatekey: 'rHaWsC7qeIHoMRwH1YTSJo3YBTc4yuEpVzg85vv-5qw'
}

push.setVapidDetails('mailto:jseaman@pointpark.edu', vapidKeys.publickey, vapidKeys.privatekey)
let sub = {};

push.sendNotification(sub, 'Test Message')