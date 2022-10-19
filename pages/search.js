import { useRouter } from 'next/router'
import { useState } from 'react'
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'

const Search = () => {
  const [search, setSearch] = useState(false)
  const router = useRouter()

  return (
    <Box>
      <Flex
        cursor='pointer'
        bg='gray.100'
        borderBottom='1px'
        borderColor='gray.200'
        padding='2'
        fontWeight='black'
        fontSize='lg'
        justifyContent='center'
        alignItems='center'
        onClick={() => setSearch(prevFilters => !prevFilters)}
      >
        <Text>Search properties with filter</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter}></Icon>
      </Flex>
      {search && <SearchFilters />}
    </Box>
  )
}

export default Search
