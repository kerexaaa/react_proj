import { Grid, GridItem } from "@chakra-ui/react"
import DashboardLayout from "../../components/DashboardLayout"
import Portfolio from "./components/Portfolio"
import PriceSection from "./components/PriceSection"
import Transactions from "./components/Transactions"
import InfoCard from "./components/InfoCard"

const Dashboard = ({}) => {

  return (
    <DashboardLayout title="Dashboard">
      <Grid gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        xl: "repeat(2, 1fr)",
      }} gap={6} mb={{
        base: 6,
        xl: 0,
      }}>
        <GridItem colSpan={{
          base: 1,
          xl: 2,
        }}>
          <Portfolio></Portfolio>
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection></PriceSection>
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions></Transactions>
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard 
            imgUrl="/bgDots.svg" 
            label="Loans" 
            content="Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
            primary="white"
            secondary="purple.500"
          ></InfoCard>
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard 
            imgUrl="/bgGrid.svg"
            label="Contact" 
            content="Learn more about our real estate, mortgage, and  corporate account services"
            primary="purple.500"
            secondary="white"
          ></InfoCard>
        </GridItem>
      </Grid>
    </DashboardLayout>
  )
}

export default Dashboard