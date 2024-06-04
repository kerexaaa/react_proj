import { Box, HStack, Heading, Icon, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { CiUser } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";

const TopNavigation = ({ title, onOpen }) => {
  return (
    <Box pos="relative" zIndex="10" bg="white" px="4">
      <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
        <Icon as={IoMenu} fontSize="2.5rem" onClick={onOpen} display={{
          base: "block",
          lg: "none",
        }} />
        <Heading fontWeight="medium" fontSize="1.75rem">{title}</Heading>

        <Menu>
          <MenuButton>
            <Icon as={CiUser} fontSize="2.5rem"/>
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
      </Box>
  )
}

export default TopNavigation