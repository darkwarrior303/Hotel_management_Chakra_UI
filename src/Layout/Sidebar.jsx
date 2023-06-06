import { SearchIcon } from "@chakra-ui/icons"
import { Box, Checkbox, Heading, Input, InputGroup, InputLeftElement, List, ListItem, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from "@chakra-ui/react"
import React from 'react'
import Rating from "../Components/Rating"

const Sidebar = () => {
    return (
        <aside>
            <Box borderBottom='1px' borderColor={"gray.300"} pb="5" mb="5">
                <InputGroup size='lg' marginRight={0} marginLeft={"auto"} background={"gray.100"} borderColor={"transparent"}>
                    <InputLeftElement pointerEvents='none'>
                        <SearchIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='text' placeholder='Search Hotels' />
                </InputGroup>
            </Box>
            <Box borderBottom='1px' borderColor={"gray.300"} pb={"5"}>
                <Heading as='h6' size='sm' textTransform="uppercase" color="tomato" mb="4">+ star rating</Heading>
                <List spacing={3}>
                    <ListItem>
                        <Checkbox colorScheme='blue' defaultChecked textTransform="uppercase" color="#00A0DC">uncategorized</Checkbox>
                    </ListItem>
                    <ListItem>
                        <Checkbox colorScheme='blue' textTransform="uppercase">
                            <div style={{ display: "flex", alignItems: "center", color: "#828282" }}>
                                <Rating value={2} /> (160)
                            </div>
                        </Checkbox>
                    </ListItem>
                    <ListItem>
                        <Checkbox colorScheme='blue' textTransform="uppercase">
                            <div style={{ display: "flex", alignItems: "center", color: "#828282" }}>
                                <Rating value={3} /> (40)
                            </div>
                        </Checkbox>
                    </ListItem>
                    <ListItem>
                        <Checkbox colorScheme='blue' textTransform="uppercase">
                            <div style={{ display: "flex", alignItems: "center", color: "#828282" }}>
                                <Rating value={3} /> (121)
                            </div>
                        </Checkbox>
                    </ListItem>
                    <ListItem>
                        <Checkbox colorScheme='blue' textTransform="uppercase">
                            <div style={{ display: "flex", alignItems: "center", color: "#828282" }}>
                                <Rating value={4} /> (70)
                            </div>
                        </Checkbox>
                    </ListItem>
                    <ListItem>
                        <Checkbox colorScheme='blue' textTransform="uppercase">
                            <div style={{ display: "flex", alignItems: "center", color: "#828282" }}>
                                <Rating value={5} /> (48)
                            </div>
                        </Checkbox>
                    </ListItem>
                </List>
            </Box>
            <Box borderBottom='1px' borderColor={"gray.300"} pb={"5"} mt={"5"}>
                <Heading as='h6' size='sm' textTransform="uppercase" color="tomato" mb="4">price</Heading>
                <RangeSlider
                    colorScheme='red'
                    defaultValue={[10, 30]}
                    onRateChange={() => console.log()} >
                    <RangeSliderTrack>
                        <RangeSliderFilledTrack />
                    </RangeSliderTrack>

                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                </RangeSlider>
                <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "#00A0DC" }}>
                        <span>INR 100</span>
                        <span>INR 100,0000</span>
                    </div>
                </div>
            </Box>
            <Box borderBottom='1px' borderColor={"gray.300"} pb={"5"} mt={"5"}>
                <Heading as='h6' size='sm' textTransform="uppercase" color="tomato" mb="4">+ board basis</Heading>
                <List spacing={3}>
                    <ListItem>
                        <Checkbox colorScheme='blue' defaultChecked textTransform="uppercase" color="#00A0DC">room only</Checkbox>
                    </ListItem>
                    <ListItem>
                        <Checkbox colorScheme='blue' textTransform="uppercase" color="#00A0DC">breakfast</Checkbox>
                    </ListItem>
                    <ListItem>
                        <Checkbox colorScheme='blue' textTransform="uppercase" color="#00A0DC">half board</Checkbox>
                    </ListItem>
                </List>
            </Box>
            <Box borderBottom='1px' borderColor={"gray.300"} pb={"5"} mt={"5"}>
                <Heading as='h6' size='sm' textTransform="uppercase" color="tomato" mb="4">+ property type</Heading>
                <List spacing={3}>
                    <ListItem>
                        <Checkbox colorScheme='blue' defaultChecked textTransform="uppercase" color="#00A0DC">hotel</Checkbox>
                    </ListItem>
                    <ListItem>
                        <Checkbox colorScheme='blue' textTransform="uppercase" color="#00A0DC">aparthotel</Checkbox>
                    </ListItem>
                    <ListItem>
                        <Checkbox colorScheme='blue' textTransform="uppercase" color="#00A0DC">hostel</Checkbox>
                    </ListItem>
                    <ListItem>
                        <Checkbox colorScheme='blue' textTransform="uppercase" color="#00A0DC">apartment</Checkbox>
                    </ListItem>
                    <ListItem>
                        <Checkbox colorScheme='blue' textTransform="uppercase" color="#00A0DC">guesthouse</Checkbox>
                    </ListItem>
                    <ListItem>
                        <Checkbox colorScheme='blue' textTransform="uppercase" color="#00A0DC">bed & breakfast</Checkbox>
                    </ListItem>
                </List>
            </Box>
            <Box pb={"5"} mt={"5"}>
                <Heading as='h6' size='sm' textTransform="uppercase" color="tomato" mb="4">+ rate type</Heading>
                <List spacing={3}>
                    <ListItem>
                        <Checkbox colorScheme='blue' defaultChecked textTransform="uppercase" color="#00A0DC">refundable</Checkbox>
                    </ListItem>
                    <ListItem>
                        <Checkbox colorScheme='blue' textTransform="uppercase" color="#00A0DC">non-refundable</Checkbox>
                    </ListItem>
                </List>
            </Box>
        </aside>
    )
}

export default Sidebar