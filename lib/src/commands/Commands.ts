import * as _ from 'lodash';
import { NativeCommandsSender } from '../adapters/NativeCommandsSender';
import { Notification, NotificationCategory, NotificationPermissions } from '../interfaces/Notification';
import { UniqueIdProvider } from '../adapters/UniqueIdProvider';

export class Commands {
  constructor(
    private readonly nativeCommandsSender: NativeCommandsSender,
    private readonly uniqueIdProvider: UniqueIdProvider
  ) {}

  public sendLocalNotification(notification: Notification, id?: string) {
    const notificationId = id ? id : this.uniqueIdProvider.generate('Notification_');
    const result = this.nativeCommandsSender.sendLocalNotification(notification, notificationId);
    return result;
  }

  public getInitialNotification() {
    const result = this.nativeCommandsSender.getInitialNotification();
    return result;
  }
  
  public requestPermissions() {
    const result = this.nativeCommandsSender.requestPermissions();
    return result;
  }

  public abandonPermissions() {
    const result = this.nativeCommandsSender.abandonPermissions();
    return result;
  }

  public registerPushKit() {
    this.nativeCommandsSender.registerPushKit();
  }

  public setCategories(categories: [NotificationCategory?]) {
    this.nativeCommandsSender.setCategories(categories);
  }

  public getBadgeCount(): Promise<number> {
    return this.nativeCommandsSender.getBadgeCount();
  }

  public setBadgeCount(count: number) {
    this.nativeCommandsSender.setBadgeCount(count);
  }

  public cancelLocalNotification(notificationId: string) {
    this.nativeCommandsSender.cancelLocalNotification(notificationId);
  }

  public cancelAllLocalNotifications() {
    this.nativeCommandsSender.cancelAllLocalNotifications();
  }

  public isRegisteredForRemoteNotifications(): Promise<boolean> {
    return this.nativeCommandsSender.isRegisteredForRemoteNotifications();
  }

  public checkPermissions(): Promise<NotificationPermissions> {
    return this.nativeCommandsSender.checkPermissions();
  }

  public removeAllDeliveredNotifications() {
    this.nativeCommandsSender.removeAllDeliveredNotifications();
  }

  public removeDeliveredNotifications(identifiers: Array<string>) {
    return this.nativeCommandsSender.removeDeliveredNotifications(identifiers);
  }
}
