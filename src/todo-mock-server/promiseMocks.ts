import { addToDo, getFromLocalStorage } from './todoLocalStorage';
import { ToDo } from './types';

const fetchErrorResponse = {
  ok: false,
  status: 500,
};

type Success<T> = {
  ok: boolean;
  status: 200;
  json: () => Promise<T>;
};

const fetchSuccessResponse = <T>(data: T): Success<T> => ({
  ok: true,
  status: 200,
  json: () => Promise.resolve(data),
});

export const mockedFetch = <T>(data: T) => {
  const DELAY = 10;
  return new Promise<Success<T>>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0) {
        resolve(fetchSuccessResponse(data));
      } else {
        reject(fetchErrorResponse);
      }
    }, DELAY);
  });
};

export const promiseMocks = {
  getToDo: () => {
    const data = getFromLocalStorage();
    return mockedFetch(data);
  },
  addToDo: (todo: ToDo) => {
    const data = addToDo(todo);
    return mockedFetch(data);
  },
};
