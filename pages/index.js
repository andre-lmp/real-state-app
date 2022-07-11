import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Banner = ({
  imageUrl,
  purpose,
  firstTitle,
  secondTitle,
  firstDescription,
  secondDescription,
  linkName,
  butonText,
}) => (
  <Flex flex="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width="500" height="300" alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold">
        {firstTitle}
        <br />
        {secondTitle}
      </Text>
      <Text
        fontSize="lg"
        paddingTop="3"
        paddingBottom="3"
        fontWeight="medium"
        color="gray.700"
      >
        {firstDescription}
        <br />
        {secondDescription}
      </Text>
      <Button fontSize="sm">
        <Link href={linkName}>{butonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home() {
  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        firstTitle="Rental Homes for"
        secondTitle="Everyone!"
        firstDescription="Explore Apartaments, Villas, Homes"
        secondDescription="and more."
        butonText="Explore Renting"
        linkName="/seacrh?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Banner
        purpose="BUY A HOME"
        firstTitle="Find, Buy & Own Your"
        secondTitle="Dream Home!"
        firstDescription="Explore Apartaments, Villas, Homes"
        secondDescription="and more."
        butonText="Explore Buying"
        linkName="/seacrh?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
    </Box>
  );
}
