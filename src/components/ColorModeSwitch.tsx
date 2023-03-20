import { HStack, Switch, Text,useColorMode } from "@chakra-ui/react";


export const ColorModeSwitch = () => {

    const data = useColorMode();
    console.log(data);
    
  return (
    <HStack>
      <Switch
        isChecked={data.colorMode === "dark"}
        onChange={data.toggleColorMode}
      />
      <Text color={"white"}>dark mode</Text>
    </HStack>
  );
};
