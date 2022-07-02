import { Container } from 'inversify';

import IDENTIFIERS from '../identifiers';
import { Manager, Client } from '../interfaces';
import { ApiManager, TodoClient } from '../classes';

import type { TodoData } from '../types';

const container = new Container();

container.bind<Manager<TodoData[]>>(IDENTIFIERS.Manager).to(ApiManager);
container.bind<Client<TodoData[]>>(IDENTIFIERS.Client).to(TodoClient);

export default container;