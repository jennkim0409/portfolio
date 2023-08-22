import {
    Text,
    Container,
    Button,
    useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import React from "react";
import { saveAs } from "file-saver";

const Resume = () => {
    const saveFile = () => {
        saveAs(
          "/Jennifer_Kim_Resume.pdf",
          "Jennifer_Kim_Resume.pdf"
        );
      };
    return (
        <Layout>
        <Container align="center">
            <Text fontSize='3xl' fontWeight='500' align='center' pb={3}>
                Resume
            </Text>
        <Section delay={0.2}>
            <Container pb={4}>
            <Button size='md' colorScheme={useColorModeValue('blackAlpha', 'pink')} onClick={saveFile}>Download My Resume</Button>
            </Container>
            <iframe width='100%' height='700px' src='Jennifer_Kim_Resume.pdf' />
        </Section>
        </Container>
        </Layout>
    )
}

export default Resume