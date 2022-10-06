import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onNotification: notification => {
    console.log('NOTIFICATION:', notification);
    notification.finish(() => {
      console.log('Finish!');
    });
  },
});

PushNotification.createChannel(
  {
    channelId: 'general',
    channelName: 'General Notification',
  },
  created => console.log(`Created Channel Return '${created}'`),
);
