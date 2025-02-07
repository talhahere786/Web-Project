import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Donation from "../components/Donation"
import { Flex } from "@chakra-ui/react";
import Banner from '../components/Banner';
function DonationPage() {
    return (
      <>
        <Flex direction={"column"}>
          <Header />
          <Banner></Banner>
          <Donation />
          <Footer />
        </Flex>
      </>
    );
}

export default DonationPage
