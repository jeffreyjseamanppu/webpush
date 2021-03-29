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
      'https://fcm.googleapis.com/fcm/send/e4f7haybxow:APA91bGFBkV2oBBuu4t1Xnz-fDXHERza2wcIz8M_j0wxJyNGyDiU6JO3T09ABxJEv6q6KvVCP7YPy8Uy65uO-lX0-8dsHpo7gfYUQWv7LgjtnYD9wDfcyAaFJUBsA1VJIjq_BXJFEe_Y',
    expirationTime: null,
    keys: {
      p256dh:
        'BEmxDHLfaJXTntRU6xUbb_4NuJ91m-3hx0351hSKI8pY0Fsl9kiX5pLdkW3Xn6M4nofcXVbcNW0n0_p7wd-S8OY',
      auth: 'DPwziQAufRznlCRzuzFy-w'
    }
  };
  
  push.sendNotification(sub, 'test message');
  