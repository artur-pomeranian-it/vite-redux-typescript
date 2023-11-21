import { useEffect, useRef, useState } from 'react';
import { getTodo } from '../../todo-mock-server/apiClient';
import { ToDo } from '../../todo-mock-server/types';
import { Card, Flex, RadioGroup, Text, TextField } from '@radix-ui/themes';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

// Documentation
// https://blog.logrocket.com/use-state-url-persist-state-usesearchparams/#usesearchparamsstate-hook

export const ToDos = () => {
  const [todos, setTodos] = useState<ToDo[]>([]);
  const [searchParams, setParams] = useSearchParams();
  // const [location] = useLocation();
  const color = searchParams.get('color') || 'light';
  const search = searchParams.get('search') || '';
  const navigate = useNavigate();
  console.log('searchParams', color, searchParams.toString());

  useEffect(() => {
    getTodo().then((data) => setTodos(data));
  }, []);
  return (
    <div>
      <h2>ToDos</h2>
      <div className="wrapper">
        <div>
          <RadioGroup.Root
            defaultValue={color}
            value={color}
            onValueChange={(value) => {
              searchParams.set('color', value);
              // navigate(`/todos?${searchParams.toString()}`);
              setParams(searchParams);
            }}
          >
            <Flex gap="2" direction="column">
              <Text as="label" size="2">
                <Flex gap="2">
                  <RadioGroup.Item value="light" /> Light
                </Flex>
              </Text>
              <Text as="label" size="2">
                <Flex gap="2">
                  <RadioGroup.Item value="dark" /> Dark
                </Flex>
              </Text>
            </Flex>
          </RadioGroup.Root>
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length > 0) {
                searchParams.set('search', value);
                navigate(`/todos?${searchParams.toString()}`);
              }
            }}
          />
          {todos.map(({ title, id }) => (
            <Card key={id}>{title}</Card>
          ))}
        </div>
      </div>
    </div>
  );
};
