import { Flex, RadioGroup, Text } from '@radix-ui/themes';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  selectBackgroundColor,
  toggleBackgroundColor,
} from '../../redux/settingsSlice';

export const Settings = () => {
  const dispatch = useAppDispatch();
  const color = useAppSelector(selectBackgroundColor);
  const handleRadio = () => {
    dispatch(toggleBackgroundColor());
  };
  return (
    <div>
      <h2>Settings</h2>
      <RadioGroup.Root defaultValue={color} onValueChange={handleRadio}>
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
    </div>
  );
};
