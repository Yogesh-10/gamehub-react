import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack justifyContent='space-between'>
      <Switch
        colorScheme='green'
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        padding='10px'
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
