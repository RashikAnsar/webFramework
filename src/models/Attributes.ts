export class Attributes<T> {
  constructor(private data: T) {}

  /**
   * Get the values from attribute
   * @param {string} key
   * @returns {string | number}
   */
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  /**
   * @param {typeparam} update is Generic type
   */
  set(update: T): void {
    Object.assign(this.data, update);
  }
}
