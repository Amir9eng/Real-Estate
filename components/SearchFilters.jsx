import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { MdCancel } from 'react-icons/md'
import Image from 'next/image'
import {
  Flex,
  Box,
  Select,
  Icon,
  Button,
  Input,
  Spinner,
  Text
} from '@chakra-ui/react'
import { filterData, getFilterValues } from '../utils/fetchData'

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData)
  const router = useRouter()

  const searchProperties = filterValues => {
    const path = router.pathname
    const { query } = router

    const values = getFilterValues(filterValues)

    values.forEach(item => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })
    router.push({ pathname: path, query })
  }

  return (
    <Flex bg='gray.100' flexWrap='wrap' p='4' justifyContent='center'>
      {filters.map(filter => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            w='fit-content'
            p='2'
            onChange={e =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map(item => (
              <option value={item.value} key={item.key}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  )
}

export default SearchFilters
