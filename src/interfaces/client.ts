export interface Client<T> {
  get: () => Promise<T>
}