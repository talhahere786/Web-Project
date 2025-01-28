import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text, VStack, Flex, chakra, Button, Input, Image } from "@chakra-ui/react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

const Donation = () => {
    const [donationAmount, setDonationAmount] = useState("");
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const handleAmountClick = (amount) => {
      setDonationAmount(amount);
      if (amount === "") {
        inputRef.current.focus();
      }
    };

    const handleDonateNow = () => {
    
      navigate("/success");
    };

  return (
    <>
    <Header />
    <Flex
      direction="row"
      align="center"
      justify="center"
      bg="#fff1ea"
      boxShadow="md"
      mx={{ base: 4, lg: 180 }}
      height="auto"
      wrap="wrap"
      my={8}
    >
    
      <Box flex="1" maxW={{ base: "100%", md: "30%" }} 
      height={{ base: "300px", md: "400px" }} overflow="hidden"
      display={{ base: "none", sm: "block" }}>
        <Image
          src="images/img_1.png"
          alt="Donation Image"
          objectFit="cover"
          width="100%"
          height="100%"
          transition="transform 0.5s ease"
          sx={{
            _hover: {
              transform: "scale(1.1)", 
            },
          }}
        />
      </Box>

      {/* Text Section */}
      <Box flex="2" p={6}>
        <VStack align="flex-start" spacing={4}>
          <Text fontSize={{ base: 15, sm: 18, md: 20, lg: 22 }} fontWeight="bold">
            Raise Your Hand To The Poor Children Education For Better Future Life
          </Text>

          <Text fontSize={{ base: 9, sm: 9, md: 10, lg: 12 }}>
          There is no better way than to donate your time to the education of impoverished children. 
          Many children NGOs are also providing tuition for them where you can volunteer or donate money.
          </Text>

          <Text fontSize={12}>
            <chakra.span fontSize={{ sm: 11, md: 14, lg: 17 }} color="red.500" fontWeight="bold" px={2}>
              $799
            </chakra.span>
            of
            <chakra.span fontSize={{ sm: 11, md: 14, lg: 17 }} color="orange.500" fontWeight="bold" px={2}>
              $1500
            </chakra.span>{" "}
            raised
          </Text>

          {/* Static Progress Bar */}
          <Box width="100%" bg="gray.300" height="6px" borderRadius="full" overflow="hidden">
            <Box width="50%" height="100%" bg="red.500" borderRadius="full"></Box>
          </Box>

          <Flex align="center" my={2} bg="white" borderRadius={50} width="auto">
            <Button bg="white" color="black" borderRadius="50px" size="sm">
              $
            </Button>
            <Input
              placeholder=""
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              size="md"
              variant="outline"
              bg="white"
              borderRadius="50px"
              ml={2}
              width="80px"
              ref={inputRef}
              border="none"
            />
          </Flex>
          <Flex wrap="wrap" gap={{base:2, sm: 2, md: 2, lg: 2 }} p={1}>
          {["10.00", "25.00", "50.00", "100.00", "250.00"].map((amount) => (
            <Button
              key={amount}
              bg="white"
              fontWeight="bold"
              color="black"
              borderRadius={50}
              _hover={{ bg: "#ffb327", color: "white" }}
              size={{ base: "xs", md: "sm", lg: "sm" }} 
              fontSize={{ base: "xs", md: "sm", lg: "sm" }} 
              onClick={() => handleAmountClick(amount)}

            >
              ${amount}
            </Button>
          ))}
          <Button
            bg="#ffb327"
            fontWeight="bold"
            color="white"
            borderRadius={50}
            _hover={{ bg: "#ffb327", color: "white" }}
            size={{ base: "xs", md: "sm", lg: "sm" }} 
            fontSize={{ base: "xs", md: "sm", lg: "sm" }} 
            onClick={() => handleAmountClick("")}
          >
            Custom Amount
          </Button>
        </Flex>

        <Flex 
        justify={{ base: "center", sm: "flex-start" }} 
        align="center" 
        width="100%"
        >
        <Button
          bg="red.500"
          fontWeight="bold"
          color="white"
          borderRadius={50}
          my={5}
          _hover={{ bg: "#ffb327", color: "white" }}
          size={{ base: "sm", md: "sm", lg: "md" }}
          fontSize={{ base: "sm", md: "sm", lg: "md" }}
          onClick={handleDonateNow}
         >
          Donate Now
        </Button>
      </Flex>


        </VStack>
      </Box>
    </Flex>
     <Footer />
     </>
  );
};

export default Donation;
