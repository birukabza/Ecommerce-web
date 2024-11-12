import { Loader, Flex } from "@mantine/core";

function CenteredLoader() {
  return (
    <Flex
      style={{ height: '100vh' }} // full viewport height
      align="center" // vertical center
      justify="center" // horizontal center
    >
      <Loader size={100} color="blue" variant="dots" />
    </Flex>
  );
}

export default CenteredLoader;