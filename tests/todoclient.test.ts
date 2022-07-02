import fetch from 'node-fetch';
import { TodoClient } from '../src/classes';

jest.mock('node-fetch');

describe('TodoClient', () => {
  const mockFetch = jest.mocked(fetch);

  it('should call fetch with the correct endpoint', async () => {
    const todoData = [
      {
        userId: 123456,
        id: 234567,
        title: 'test title',
        completed: true,
      }
    ]
    const json = jest.fn();
    json.mockResolvedValueOnce(todoData);
    mockFetch.mockResolvedValueOnce({ json } as any);

    const todoClient = new TodoClient();
    const resp = await todoClient.get();

    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch.mock.lastCall[0]).toBe('https://jsonplaceholder.typicode.com/todos');
    expect(json.mock.calls.length).toBe(1);
    expect(resp).toEqual(todoData);
  })
})