import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card p={6} borderRadius="1rem" flexGrow="1">
      <Stack spacing="6">
        <Text fontSize="sm" fontWeight="medium">
          You will receive response within 24 hours of time of submit.
        </Text>

        <HStack
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Nick" type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input placeholder="Smith" type="text" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input placeholder="example@email.com" type="email" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="example@email.com" type="email" />
        </FormControl>
        <Checkbox defaultChecked>
          <Text fontSize="xs">
            I agree with
            <Box as="span" color="purple.500">
              {" "}
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize="sm" colorScheme="purple">
            Send a message
          </Button>
          <Button fontSize="sm" colorScheme="gray">
            Book a meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
