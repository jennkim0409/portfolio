import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const WorkGridItem = ({ children, link, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
   <a href={link} target="_blank">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      <Text fontSize={14}>{children}</Text>
      </a>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 15px;
      }
    `}
  />
)