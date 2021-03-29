var push = require('web-push');

//let vapidKeys = push.generateVAPIDKeys();
//console.log(vapidKeys);

let vapidKeys = {
    publickey: 'BDzYfjVqZoHJdMJaThzhiYGKbkx6f5oDN4YujNwWjTdCbbZlLC2eX_OvMk2MoCDzX5dF0MqvUmyVzadT_P9mY9w',
    privatekey: 'rHaWsC7qeIHoMRwH1YTSJo3YBTc4yuEpVzg85vv-5qw'
}

push.setVapidDetails('mailto:jseaman@pointpark.edu', vapidKeys.publickey, vapidKeys.privatekey)

//If we were using a server and API. When we'd click the subscribe button, the end point would be provided back to us
//We are hard coding this as if we did receive this information from the server.
let sub = {
    endpoint:'https://fcm.googleapis.com/fcm/send/f4xxJSTW6sw:APA91bGrXk9G4OxVFqtTOGkbaiglWTpSrnY27XGmDosdOr0OxBR4DVPCJlpqhBfhcsDwVWM2NJiQ61z7_kbSCbnWffD1gGkJNVWGQ7wR6YOBaiCmQgRQn2ayY6udYcpXG6yOv34ze3zY',
    expirationTime:null,
    keys: {
        p256dh:
        'BMfmvyO9HWsJR4bHSHD_w-Xu-OUF6Q90hTLqnBa-mNh3QWwRco87S2XZg3Mezc2phV7rRyJXRaqTMsXKECWzdXI',
        auth: 'HNNBj3OiqxMV-QbyJdSwzQ'
    }
};


push.sendNotification(sub, 'Test Message')