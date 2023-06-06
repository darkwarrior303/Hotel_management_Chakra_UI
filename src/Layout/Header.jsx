import { Heading, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react"
import React from 'react'

import { SearchIcon } from '@chakra-ui/icons'

const Header = () => {
    return (
        <>
            <header>
                <Heading as='h1' size='xl' noOfLines={1}>1312 Hotels found in DISNEYLAND PARIS, FR</Heading>
                <Text color='grey' textTransform={"uppercase"}>For Friday, 18th november,2022 for 2 night(s)</Text>
            </header>
            <InputGroup width={200} marginRight={0} marginLeft={"auto"}>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.300' />
                </InputLeftElement>
                <Input type='text' placeholder='Modify Search' />
            </InputGroup>
        </>
    )
}

export default Header