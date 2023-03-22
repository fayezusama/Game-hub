import { HStack, Switch, Text,useColorMode } from "@chakra-ui/react";


export const ColorModeSwitch = () => {

    const data = useColorMode();
    
  return (
    <HStack>
      <Switch
        isChecked={data.colorMode === "dark"}
        onChange={data.toggleColorMode}
      />
      <Text whiteSpace='nowrap' color={"white"}>dark mode</Text>
    </HStack>
  );
};
