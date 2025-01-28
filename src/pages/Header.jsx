import React, { useState } from 'react';
import { Box, Flex, Text, Spacer, VStack } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoSkype } from 'react-icons/io';
import { GoPaperAirplane } from 'react-icons/go';
import { CiUser } from 'react-icons/ci';
import { Button } from '@/components/ui/button';
import { GoArrowDownRight } from 'react-icons/go';
import { FiAlignJustify } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    
      <Flex
        as="header"
        bg="red.500"
        color="white"
        px={{ base: 4, md: 6 }}
        py={{ base: 1.5, md: 2 }}
        align="center"
        fontSize={{ base: 'xs', md: 'xs' }}
        mx={{ base: 4, md: 10 }}
        mb={{ base: 1, md: 0 }}
        roundedBottom={15}
        direction={{ base: 'column', md: 'row' }}
      >
      
        <Flex
          gap={6}
          wrap="wrap"
          align="center"
          justify="center"
          display={{ base: 'none', md: 'flex' }} 
        >
          <Box display="flex" alignItems="center" gap={2}>
            <FaMapMarkerAlt color="var(--chakra-colors-yellow-400)" />
            <Text>
              <Text as="span" fontWeight="bold">Location:</Text> 61W Business Str Hobert, LA
            </Text>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <FaEnvelope color="var(--chakra-colors-yellow-400)" />
            <Text>
              <Text as="span" fontWeight="bold">Email:</Text> sendmail@risehand.com
            </Text>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <FaPhoneAlt color="var(--chakra-colors-yellow-400)" />
            <Text>
              <Text as="span" fontWeight="bold">Phone:</Text> +98 060 712 34
            </Text>
          </Box>
        </Flex>

        <Spacer />
        <Flex align="center" gap={3}>
        <CiUser color="var(--chakra-colors-yellow-400)" />
        <Text
            fontWeight="bold"
            cursor="pointer"
            fontSize={{ base: 'sm', md: 'md', '600px': '16px' }} 
          >
            Become a Volunteer
          </Text>

        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
        <a href="https://www.messenger.com" target="_blank" rel="noopener noreferrer">
          <IoLogoSkype />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <GoPaperAirplane />
        </a>
      </Flex>

      </Flex>
      <Flex
          as="header"
          bg="white"
          color="black"
          px={{ base: 4, md: 10 }} 
          py={{ base: 2, md: 1 }}
          w="100%"
          maxWidth="container.xl" 
          mx="auto"
          align="center"
          fontSize={{ base: 'xs', md: 'sm' }}
          justify="space-between"
          direction="row"
          textAlign={{ base: 'center', md: 'left' }}
          position="relative"
          >
          <Flex
            align="center"
            gap={2}
            flex={{ base: 1, md: 'none' }}
            justify={{ base: 'center', md: 'flex-start' }}
          >
            <Flex direction="column">
              <Text fontSize={{ base: '2xl', md: '2xl' }} fontWeight="bold">
                Risehand
              </Text>
              <Text color="red" fontSize={{ base: 'sm', md: 'sm' }}>
                Charity Foundation
              </Text>
            </Flex>
          </Flex>

          <Flex align="center" gap={6} display={{ base: 'none', md: 'flex' }}>
          {['Home', 'Pages', 'Donations', 'Portfolio', 'Blog', 'Contact'].map((item) => (
            <Box
              key={item}
              display="flex"
              alignItems="center"
            >
              <Text
                as="span"
                color={item === 'Home' ? 'red.500' : 'black'}
                _hover={{ color: 'red.500', cursor: 'pointer' }} 
                transition="color 0.3s ease" 
              >
                {item}
              </Text>
            </Box>
          ))}
          </Flex>

        <Flex align="center" display={{ base: 'none', md: 'flex' }} ml={4}>
        <Button
          bg="red"
          color="white"
          leftIcon={<GoArrowDownRight />}
          width={{ base: "800%", sm: "120px", md: "180px" }}  
          fontSize="md" 
        >
          Donate Now
        </Button>
      </Flex>

      <Box
        display={{ base: 'block', md: 'none' }}
        position="absolute"
        top="100%"
        right="1rem"
        cursor="pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
      <Button
        bg="red.500"
        color="white"
        fontSize={{ base: 'sm', sm: 'md' }} 
        padding={{ base: '1px 2px', sm: '3px 4px' }} 
        borderWidth={{ base: '1px', sm: '2px' }}
        borderColor="white" 
        borderRadius="md" 
      >
        <FiAlignJustify />
      </Button>
    </Box>

      
    </Flex>

      <Box
        position="fixed"
        top={0}
        left={isMenuOpen ? 0 : '-85%'}
        height="100vh"
        width="85%"
        bg="white"
        boxShadow="md"
        transition="left 0.3s ease-in-out"
        zIndex={999}
        padding="20px"
      >

    <Box
      bg="yellow.400"
      color="white"
      borderRadius="full"
      p={{ base: '2', sm: '3' }}  
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      onClick={() => setIsMenuOpen(false)} 
      fontSize={{ base: 'xs', sm: 'xs' }} 
    >
  <ImCross />
</Box>


  <VStack
    spacing={4}
    align="flex-start"
    fontSize={{ base: 'xs', sm: 'md' }} 
    color="black"
    mt={4}
  >
    {['Home', 'Pages', 'Donations', 'Portfolio', 'Blog', 'Contact'].map((item) => (
      <Text
        key={item}
        color={item === 'Home' ? 'red.500' : 'black'}
        _hover={{ color: 'red.500', cursor: 'pointer' }}
        fontSize={{ base: 'xs', md: 'lg' }} 
      >
        {item}
      </Text>
    ))}
  </VStack>
</Box>

    </>
  );
}

export default Header;
