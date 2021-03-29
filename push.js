var push = require('web-push');


let vapidKeys = {
    publickey: 'BDzYfjVqZoHJdMJaThzhiYGKbkx6f5oDN4YujNwWjTdCbbZlLC2eX_OvMk2MoCDzX5dF0MqvUmyVzadT_P9mY9w',
    privatekey: 'rHaWsC7qeIHoMRwH1YTSJo3YBTc4yuEpVzg85vv-5qw'
};

push.setVapidDetails('mailto:jseaman@pointpark.edu', vapidKeys.publickey, vapidKeys.privatekey);

//If we were using a server and API. When we'd click the subscribe button, the end point would be provided back to us
//We are hard coding this as if we did receive this information from the server.

let sub = {
    endpoint:
      'https://updates.push.services.mozilla.com/wpush/v2/gAAAAABgY…31eFtKk7s1jTb3Eh73Uo1VVv_2YhFP4n6AvEGTQQ2ff94goM5cZsnxon6MoI',
    expirationTime: null,
    keys: {
      p256dh:
        'BFXW2Gom0lQZ7yOMGYqwKsN2FYx6mrYIUgErhdPti4q8Aqx5yoKnqKxuxUDvtbaxpNT_iU-Wb4dCEvvTBJrjMOY',
      auth: 'DiUoSdgKI_M0fNQALkDjhA'
    }
  };
  
  push.sendNotification(sub, 'test message');
  
  