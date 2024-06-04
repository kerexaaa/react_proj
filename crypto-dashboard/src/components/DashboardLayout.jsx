import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react"
import Sidebar from "./Sidebar"
import TopNavigation from "./TopNavigation"
import SideDrawer from "./SideDrawer";


const DashboardLayout = ({ title, children }) => {

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box>
      <Flex>
        <Box display={{
          base: "none",
          lg: "flex",
        }}>
          <Sidebar/>
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow="1">
          <TopNavigation title={title} onOpen={onOpen}/>
          <Container mt="6" maxW="70rem" mx="auto">{children}</Container>
        </Box>
      </Flex>
    </Box>
  )
}

export default DashboardLayout