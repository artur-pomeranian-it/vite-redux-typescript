import { testData } from './testData';
import { ToDo } from './types';

const localStorageName = 'todo-api';

export const getFromLocalStorage = (): ToDo[] => {
  const storedData = localStorage.getItem(localStorageName);
  return storedData ? JSON.parse(storedData) : testData;
};

export const getToDo = (id: number): ToDo | undefined => {
  return getFromLocalStorage().find((data) => data?.id === id);
};

const saveToLocalStorage = (data: ToDo[]) => {
  localStorage.setItem(localStorageName, JSON.stringify(data));
};
type EditsCallback = (todo: ToDo[]) => ToDo[];

export const editLocalStorage = (callback: EditsCallback): ToDo[] => {
  const data = getFromLocalStorage();
  const newData = callback(data);
  saveToLocalStorage(newData);
  return newData;
};

export const addToDo = (todo: ToDo): ToDo => {
  const newData = editLocalStorage((data) => {
    const { id } = data.reduce(
      (prev, current) => (prev?.id > current?.id ? prev : current),
      { id: 0 }
    );
    const newId = id + 1;
    const newToDo = {
      ...todo,
      id: newId,
      createdAt: new Date().toISOString(),
      isDone: false,
    };
    console.log('ADD', newId, newToDo);
    data.push(newToDo);
    return data;
  });
  return newData.reduce((prev, current) =>
    prev?.id > current?.id ? prev : current
  );
};

export const deleteToDo = (id: number): void => {
  editLocalStorage((data) => data.filter((todo) => todo?.id !== id));
};

export const markAsDone = (id: number) => {
  const newData = editLocalStorage((data) =>
    data.map((todo) =>
      todo?.id !== id
        ? todo
        : { ...todo, isDone: true, doneDate: new Date().toISOString() }
    )
  );
  return newData.find((todo) => todo.id === id);
};

export const updateToDo = (id: number, newTodo: ToDo): ToDo | undefined => {
  const newData = editLocalStorage((data) =>
    data.map((todo) => (todo?.id !== id ? todo : { ...todo, ...newTodo }))
  );
  return newData.find((todo) => todo?.id === id);
};
