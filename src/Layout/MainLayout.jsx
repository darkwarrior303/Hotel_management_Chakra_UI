import { StarIcon } from '@chakra-ui/icons'
import { Badge, Box, Button, Heading, Icon, Image } from '@chakra-ui/react'
import React from 'react'
import hotelData from "../Data/hotel_data.json"
import { IoMdThumbsUp } from 'react-icons/io'
import { FaMapMarkerAlt, FaHome, FaUserFriends, FaBed } from 'react-icons/fa'

const MainLayout = () => {
    const hotel = hotelData.HotelFindResponse.Hotels.Hotel[2]
    return (
        <Box borderWidth='1px' borderColor="#00A0DC" borderRadius='lg' overflow='hidden'>
            <div style={{ display: 'flex', padding: "25px" }}>
                <div>
                    <Image src={hotel.ThumbImages.__cdata} alt={hotelData.imageAlt} />
                </div>
                <div>
                    <Box p='6'>
                        <Box display='flex' justifyContent="space-between" >
                            <Box display='flex' mt='2' alignItems='center'>
                                <StarIcon mr={1} color={'orange'} />
                                <StarIcon mr={1} color={'orange'} />
                                <StarIcon mr={1} color={'orange'} />
                                <StarIcon mr={1} color={'orange'} />
                            </Box>
                            <Badge display="flex" alignItems="center" p="7px" px="15px" borderRadius="full" textTransform="capitalize" color='#00A0DC'><Icon as={FaHome} color='#00A0DC' fontSize={16} mr="5px" />Available</Badge>
                        </Box>
                        <Box position="relative">
                            <Heading as='h6' size='lg' color="#00A0DC" mb="4">Charming Waterfront Condo</Heading>
                            <Box color="#828282">
                                <Heading as="h6" size="sm" fontSize="14px" mb={'5'} color="#828282" fontWeight="300"> <Icon as={FaMapMarkerAlt} color="gray" fontSize={16} mr="5px" /> Address: 86 Tanners HillGreater Landon SEB 4PN [p]:+442086926219 London.</Heading>
                                <p style={{ fontSize: "14px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem sequi vel unde facilis optio pariatur sit quisquam tenetur quod </p>
                            </Box>
                            <Box mt={'2'} display="flex" justifyContent="space-between">
                                <Heading as='h6' size='lg' color="tomato" mb="4">Prices Starting From</Heading>
                                <Heading as='h6' size='lg' color="#00A0DC" mb="4">EUR 200</Heading>
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                                <Button colorScheme='linkedin' size='lg'> Break Fast Only </Button>
                                <Button colorScheme='linkedin' variant='outline' size='lg'> More Detail </Button>
                            </Box>
                        </Box>
                    </Box>
                </div>
            </div>
            {
                hotel.RoomDetails.RoomDetail.map((item, i) => {
                    return (
                        <div key={i}>
                            <Box borderWidth={20} borderColor="#00A0DC">
                                <Heading as='h6' display="flex" alignItems="center" fontSize={13} color={"white"} backgroundColor='#00A0DC'> <Icon as={IoMdThumbsUp} color="white" fontSize={16} mr="10px" /> You found the best dial</Heading>
                            </Box>
                            <Box padding={"20px"}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ color: "tomato", fontWeight: 700 }}>Double Room</div>
                                    <div><Icon as={FaUserFriends} color="gray" fontSize={16} mr="5px" /> {item.Adults} guests(max)</div>
                                    <div><Icon as={FaBed} color="gray" fontSize={16} mr="5px" /> 1 King bed</div>
                                    <div style={{ color: "#00A0DC", fontWeight: 700 }}>Total ₹{item.TotalRate}</div>
                                </div>
                                <Box mt={5} display={'flex'} justifyContent={"space-between"}>
                                    <p style={{ color: 'green' }}>Cancellaction till 26Feb 2023, 23:59 hrs</p>
                                    <Button colorScheme='linkedin' size='lg'> BOOK NOW </Button>
                                </Box>
                            </Box>
                        </div>
                    )
                })
            }
        </Box>
    )
}

export default MainLayout