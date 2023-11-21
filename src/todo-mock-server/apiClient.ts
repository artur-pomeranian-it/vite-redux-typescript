import { promiseMocks } from './promiseMocks';

export const getTodo = async () => {
  const response = await promiseMocks.getToDo();
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw Error('Server error');
  }
};
