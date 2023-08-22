import {
  Container,
  Box,
  useColorModeValue,
  Text,
  Flex,
  Show
} from '@chakra-ui/react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import cat from '../public/images/cat.gif'
import Section from '../components/section'
import Timeline from '../components/timeline/timeline'

const Page = () => {
    return (
        <Container pt={7}>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={5} mb={10} align="center" fontWeight='semibold'>
            <Text fontSize='3xl' as='b'>Jennifer Kim</Text>
                <Typewriter
                  options={{
                    strings: [
                      "A CS Student at UCLA",
                      "A Software Engineer",
                      "Interested in Graphics",
                      "Experience in Full Stack",
                    ],
                    autoStart: true,
                    loop:true,
                  }}
                />
            </Box>
          
          <Section delay={0.1}>
            <Text fontSize='3xl' fontWeight='500' align='center' pb={3}>
              About Me
            </Text>
            <Flex>
              <Show breakpoint='(min-width: 530px)'>
                <Image src={cat} alt="cat GIF" width={160} unoptimized={true}/>
              </Show>
              <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} align="left">
                <Text fontSize='1xl'>Hi, I&apos;m Jennifer! I&apos;m currently a fourth-year 
                computer science student at UCLA. </Text>
                <Text fontSize='1xl' pt={3}>I really enjoy art and animation, which is
                why I&apos;m particularly interested in graphics and design development.</Text>
                <Text fontSize='1xl' pt={3}>In my free time I enjoy doing crafts, baking, and singing.
                </Text>
              </Box>
            </Flex>  
          </Section>

          <Section delay={0.15}>
          <Text fontSize='3xl' fontWeight='500' align='center' pb={3} pt={5}>
              Experience
          </Text>
          <Timeline/>
          </Section>



            
        </Container>
    )
}

export default Page