import { Flex, Text, TextInput, Textarea, Button } from "@mantine/core";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Contact.scss";

import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  const styles = {
    margin: location.pathname !== "/contact" ? "":"13rem auto",
    width: location.pathname !== "/contact" ? "":"90vw",
    
  }

  return (
    <div className="contact-page" style={styles}>
      <Flex
        justify="space-between"
        align="center"
        direction={{ base: "column", md: "row" }}
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <div style={{ flex: 1, marginBottom: "2rem" }}>
          <Text size="xl" weight={700} style={{ marginBottom: "1rem" }}>
            Any Store
          </Text>
          <Text size="lg" style={{ fontStyle: "italic", marginBottom: "2rem" }}>
            Your go-to place for everything you need.
          </Text>

          <Flex gap="1rem">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
              <FaInstagram size={24} />
            </a>
          </Flex>
        </div>

        <div style={{ flex: 1, marginLeft: "2rem" }}>
          <Text size="lg" weight={600} style={{ marginBottom: "1rem" }}>
            Contact Us
          </Text>
          <form>
            <Flex direction="column" gap="1rem">
              <TextInput
                label="Your Name"
                placeholder="Enter your name"
                styles={{ input: { background: "black", color: "white" }, label: { color: "white" } }}
              />
              <TextInput
                label="Your Email"
                placeholder="Enter your email"
                styles={{ input: { background: "black", color: "white" }, label: { color: "white" } }}
              />
              <Textarea
                label="Message"
                placeholder="Write your message"
                styles={{ input: { background: "black", color: "white" }, label: { color: "white" } }}
              />
              <Button type="submit" color="gray">
                Submit
              </Button>
            </Flex>
          </form>
        </div>
      </Flex>
    </div>
  );
};



export default Contact;
