import 'reflect-metadata';
import { injectable, inject } from 'inversify';

import { Manager, Client } from '../interfaces';
import IDENTIFIERS from '../identifiers';

@injectable()
class ApiManager<T> implements Manager<T> {
  
  private _client: Client<T>

  constructor(
    @inject(IDENTIFIERS.Client) client: Client<T>
  ) {
    this._client = client;
  }

  public async fetchData(): Promise<T> {
    return this._client.get();
  }
}

export default ApiManager;