var push = require('web-push');


let vapidKeys = {
    publickey: 'BHLf4LGAERsLj8yWf-ItFrcKTnt-9jd6-BS6z_EkA9VtnpzjKKAL-tiwk0REsOOexMP9l2vAch4QENE0cHVkRP8',
    privatekey: 'Ak9FCnE32K1mlLBxqnwgFg7eeH8J3Dee5Id0j1oGIBs'
};


push.setVapidDetails('mailto:jseaman@pointpark.edu', vapidKeys.publickey, vapidKeys.privatekey);

//If we were using a server and API. When we'd click the subscribe button, the end point would be provided back to us
//We are hard coding this as if we did receive this information from the server.

  
  //credentials for chrome
  
  let sub = {
    endpoint:
      '"https://fcm.googleapis.com/fcm/send/e4f7haybxow:APA91bGFBkV2oBBuu4t1Xnz-fDXHERza2wcIz8M_j0wxJyNGyDiU6JO3T09ABxJEv6q6KvVCP7YPy8Uy65uO-lX0-8dsHpo7gfYUQWv7LgjtnYD9wDfcyAaFJUBsA1VJIjq_BXJFEe_Y',
    expirationTime: null,
    keys: {
      p256dh:
        'BEmxDHLfaJXTntRU6xUbb_4NuJ91m-3hx0351hSKI8pY0Fsl9kiX5pLdkW3Xn6M4nofcXVbcNW0n0_p7wd-S8OY',
      auth: 'DPwziQAufRznlCRzuzFy-w'
    }
  };

  //push.sendNotification(sub, 'test message');
  
