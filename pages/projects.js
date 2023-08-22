import { Container, SimpleGrid, Text } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid'
import connectn from '../public/images/connectn.png'
import curiocity from '../public/images/curiocity.png'
import kindling from '../public/images/kindling.png'
import bloxorz from '../public/images/bloxorz.png'
import cattale from '../public/images/cattale.png'
import mobmentality from '../public/images/mobmentality.png'
import Layout from '../components/layouts/article'


const Projects = () => {
return (
    <Layout>
    <Container>
        <Text fontSize='3xl' fontWeight='500' align='center' pb={3}>
            Ongoing Projects
        </Text>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
            link="https://drive.google.com/file/d/1R1dKgitXxVhGSWVfsPiXpz_R5pG9MR7Y/view?usp=sharing" 
            title="Cat's Tale" 
            thumbnail={cattale}>
            An RPG featuring a cat&apos;s journey in a village. Developed with GameMaker Studio 2
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem 
            link="https://github.com/tylerchang/mob_mentalityr" 
            title="Mob Mentality" 
            thumbnail={mobmentality}>
            A family game where players answer questions and align with the majority. Made using React and Firebase
          </WorkGridItem>
        </Section>
        </SimpleGrid>

        <Text fontSize='3xl' fontWeight='500' align='center' pb={3} pt={3}>
            Completed Projects
        </Text>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.2}>
            <WorkGridItem 
              link="https://github.com/elizabethkim11/bloxorz" 
              title="Animated 3D Block" 
              thumbnail={bloxorz}>
              A 3D user-interactive game that mimics Bloxorz, using Javascript and TinyGL/WebGL
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem 
              link="https://docs.google.com/presentation/d/1CqTcXWYFSjAr_7mH2KYRSL0OqVfioSeg_ZkbXav2Ypo/edit?usp=sharing" 
              title="Curiocity" 
              thumbnail={curiocity}>
              A React Native application that generates places to visit depending on user&apos;s preferences
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.4}>
            <WorkGridItem
              link="https://github.com/Cs35L-Project/kindling"
              title="Kindling"
              thumbnail={kindling}>
              A React website that allows an individual to swipe through and become friends with other registered users 
          </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem 
              link="https://github.com/jennkim0409/connectngame" 
              title="Connect N" 
              thumbnail={connectn}>
              A C++ terminal game where users can play Connect N against an AI that never loses
            </WorkGridItem>
          </Section>
        </SimpleGrid>
    </Container>
    </Layout>
)
}

export default Projects