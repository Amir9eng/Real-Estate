import Link from 'next/link'
import Image from 'next/image'
import { Box, Flex, Text, Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'
import defaultImage from '../assets/images/house.jpg'
const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID
  }
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex
      flexWrap='wrap'
      width='420px'
      p='5'
      paddingTop='0'
      justifyContent='flexStart'
      cursor='pointer'
    >
      <Box>
        <Image
          src={coverPhoto ? coverPhoto.url : defaultImage}
          alt='image'
          width={400}
          height={260}
        />
      </Box>
      <Box w='full'>
        <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
          <Flex alignItems='center'>
            <Box paddingRight='3' color='green.300'>
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight='bold' fontSize='lg'>
              AED {millify(price)} {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          <Box>
            <Avatar size='sm' src={agency?.logo?.url} />
          </Box>
        </Flex>
        <Flex
          alignItems='center'
          padding='1'
          justifyContent='space-between'
          w='250px'
          color='blue.400'
        >
          {rooms} <FaBed /> | {baths} | {millify(area)} sqft <BsGridFill />
          <FaBath />
        </Flex>
        <Text fontSize='lg'>
          {title.length > 30 ? `${title.substring(0, 30)}` : title}
        </Text>
      </Box>
    </Flex>
  </Link>
)

export default Property
