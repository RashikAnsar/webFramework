type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  /**
   * `on` is the method for adding event listener
   * @param {string} eventName name of the event
   * @param {function} callback callback fn()
   */
  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  /**
   * trigger method triggers the events that are listening
   * @param {string} eventName name of the event same as in on method
   */
  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }
    handlers.forEach(callback => callback());
  }
}
