import DashboardLayout from "../../components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import InfoCard from "../Dashboard/components/InfoCard";
import ContactCard from "./components/ContactCard";
import { IoMail } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack spacing="6">
        <SupportCard
          leftComponent={<ContactCard></ContactCard>}
          title="Contact Us"
          text="Have a question or just want to know more? Feel free to reach out to
            us."
          icon={IoMail}
        />
        <SupportCard
          leftComponent={
            <InfoCard
              imgUrl="/bgGrid.svg"
              label="Chatbot"
              content="Chat with us now"
              primary="purple.500"
              secondary="white"
            ></InfoCard>
          }
          title="Live Chat"
          text="Don’t have time to wait for the answer? Chat with us now."
          icon={BiSolidMessageRounded}
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
