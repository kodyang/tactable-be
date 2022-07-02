import container from './config';
import IDENTIFIERS from './identifiers';
import { Manager } from './interfaces';

import type { TodoData } from './types';

(async function () {
  const apiManager = container.get<Manager<TodoData[]>>(IDENTIFIERS.Manager);
  const data = await apiManager.fetchData();
  console.log("Data returned from apiManager fetchData(): ", data);
})();
