import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BiTransferAlt } from "react-icons/bi";
import { PiHeadsetBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const isActiveLink = (link) => {
    return location.pathname == link;
  }

  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BiTransferAlt,
      text: "Transaction history",
      link: "/transaction",
    },
  ];

  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h={{
        base: "100%",
        xl: "100dvh",
      }}
      position={{
        base: "static",
        lg: "relative",
      }}
    >
      <Stack
        w={{
          base: "auto",
          lg: "inherit",
        }}
        h="full"
        pos={{
          base: "static",
          lg: "fixed",
        }}
        flexDir="column"
        justify="space-between"
      >
        <Box>
          <Heading textAlign="center" fontSize="1.25rem" as="h1" pt="3.5rem">
            @username
          </Heading>
          <Box mt="6" mx="3">
            {navLinks.map((nav) => (
              <Link to={nav.link} key={nav.text}>
                <HStack
                  bg={isActiveLink(nav.link) ?  "black.5" : "transparent"}
                  color={isActiveLink(nav.link) ?  "p.black" : "black.60"}
                  cursor="pointer"
                  py="3"
                  px="4"
                  borderRadius=".625rem"
                  _hover={{
                    bg: "#F3F3F7",
                    color: "#171717",
                  }}
                >
                  <Icon as={nav.icon} />
                  <Text fontSize="14px" fontWeight="medium">
                    {nav.text}
                  </Text>
                </HStack>
              </Link>
            ))}
          </Box>
        </Box>
        <Box mt="6" mx="3" mb="6">
          <Link to="/support">
            <HStack
              cursor="pointer"
              key="Support"
              py="3"
              px="4"
              bg={isActiveLink("/support") ?  "black.5" : "transparent"}
              color={isActiveLink("/support") ?  "p.black" : "black.60"}
              borderRadius=".625rem"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
            >
              <Icon as={PiHeadsetBold} />
              <Text fontSize="14px" fontWeight="medium">
                Support
              </Text>
            </HStack>
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
