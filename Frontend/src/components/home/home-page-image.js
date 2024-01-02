import { Box, Flex, Hide, Image } from "@chakra-ui/react";

const HomePageImage = () => {
  return (
    <Hide below="md">
      <Flex w={["50%", "50%", "70%"]} alignItems="center" position="relative">
        <Box
          position="absolute"
          alignItems="center"
          borderRadius="2xl"
          bg="var(--blue-gradient)"
          top={0}
          bottom={0}
          mx={"9"}
          w="90%"
          minW={"600px"}
          height="600px"
        ></Box>
        <Image
          src="https://www.freepnglogos.com/uploads/bmw-png/bmw-reviews-and-rating-motor-trend-1.png"
          top="10vh"
          position="absolute"
          minW={"730px"}
        />
      </Flex>
    </Hide>
  );
};

export default HomePageImage;
