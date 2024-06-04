import { Image, Tag, Text } from "@chakra-ui/react"
import { CustomCard } from "../../../chakra/CustomCard"


const InfoCard = ({ imgUrl,label,content,primary,secondary }) => {
  return (
    <CustomCard 
      bgImg={imgUrl} bgColor={primary} bgPosition="right" bgRepeat="no-repeat" position="relative"
    >
      <Tag mb="4" background={secondary} color={primary} borderRadius="full">{label}</Tag>
      <Text fontWeight="medium" color={secondary} textStyle="h5">{content}</Text>
    </CustomCard>
  )
}

export default InfoCard