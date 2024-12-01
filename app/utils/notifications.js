import {Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onNotification: function (notification) {
    console.log('Notification received:', notification);
  },
  requestPermissions: Platform.OS === 'ios',
});

export const scheduleNotification = (title, message, date) => {
  PushNotification.localNotificationSchedule({
    channelId: 'reminder-channel',
    title,
    message,
    date,
  });
};
