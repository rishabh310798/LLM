import React from "react";
import { Select, Box, CheckIcon, Center, NativeBaseProvider, extendTheme } from "native-base";
const newColorTheme = {
    brand: {
      900: "#8287af",
      800: "#7c83db",
      700: "#b3bef6",
    },
  };
  const theme = extendTheme({ colors: newColorTheme });

const DropdownPicker = () => {
  const [service, setService] = React.useState("");
  return <Center>
      <Box maxW="300">
        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size="5" />
      }} mt={1} onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
        </Select>
      </Box>
    </Center>;
};

    export default () => {
        return (
          <NativeBaseProvider theme={theme}>
            <Center flex={1} px="3">
                <DropdownPicker />
            </Center>
          </NativeBaseProvider>
        );
    };
    