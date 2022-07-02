export interface Manager<T> {
  fetchData: () => Promise<T>;
}