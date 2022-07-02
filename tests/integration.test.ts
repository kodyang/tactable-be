import fetch from 'node-fetch';

import container from '../src/config';
import IDENTIFIERS from '../src/identifiers';
import { Manager } from '../src/interfaces';

import type { TodoData } from '../src/types';

jest.mock('node-fetch');

describe('ApiManager', () => {
  const mockFetch = jest.mocked(fetch);

  it('should call TodoClient.get() and fetch from API when fetchData() is called', async () => {
    const apiManager = container.get<Manager<TodoData[]>>(IDENTIFIERS.Manager);
    
    const mockResponse = [
      {
        userId: 111111,
        id: 222222,
        title: 'mocked response title',
        completed: true,
      }
    ];

    const json = jest.fn();
    json.mockResolvedValueOnce(mockResponse);
    mockFetch.mockResolvedValueOnce({ json } as any);

    const resp = await apiManager.fetchData();

    expect(mockFetch.mock.calls.length).toBe(1);;
    expect(resp).toBe(mockResponse);
  });
})