import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
import Particle from "../Particle";
// import pdf from "../../Assets/../Assets/Soumyajit_Behera-BIT_MESRA.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import Preloader from "../src/components/Pre";
// import Navbar from "./components/Navbar";
import { Button, Flex, Heading, Image, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function Service() {
  return (
    <Flex
      direction={{ base: 'column', large: 'row' }}
      maxWidth="32rem"
      padding="1rem"
      width="100%"
    >
      <Image
        alt="Abstract art"
        height="21rem"
        
        width="100%"
      />
      <Flex justifyContent="space-between" direction="column">
        <Heading level={3}>Solar Lamps Project</Heading>
        <Text>
          
        </Text>
        <Button
          variation="primary"
          onClick={() => alert('Opening album')}
        >
          Photographs
        </Button>
      </Flex>
    </Flex>
  );
}

export default Service;
