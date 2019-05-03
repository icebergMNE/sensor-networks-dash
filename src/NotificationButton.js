import React from 'react';
import { askForPermissioToReceiveNotifications } from './push-notifications';
const NotificationButton = () => (
    <button onClick={askForPermissioToReceiveNotifications} >
      Click to receive notifications
    </button>
);
export default NotificationButton;