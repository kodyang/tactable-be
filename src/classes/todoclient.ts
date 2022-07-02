import 'reflect-metadata';
import { injectable } from 'inversify';
import fetch from 'node-fetch';

import { Client } from '../interfaces';

import type { TodoData } from '../types';

const URL_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';

@injectable()
class TodoClient implements Client<TodoData[]> {

  public async get(): Promise<TodoData[]> {

    return fetch(URL_ENDPOINT)
      .then(res => res.json() as Promise<TodoData[]>)
      .catch(err => {
        console.error('TodoClient fetch error: ', err);
        // TODO: Add eror handling (retry logic?). For now assume returning empty array is ok
        return [];
      });
  }
}

export default TodoClient;