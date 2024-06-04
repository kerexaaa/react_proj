import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap={6}
      justify="space-between"
      align={{
        base: "center",
        xl: "unset"
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="384px">
        <Icon as={icon} boxSize="6" color="purple.500"></Icon>
        <Text textStyle="h2" as="h2" fontWeight="medium">
          {title}
        </Text>
        <Text fontSize="sm" fontWeight="normal" color="black.60">
          {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full" mb={{
        base: "6",
        xl: "0",
      }}>
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
