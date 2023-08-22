import Link from 'next/link'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 28px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 10px;
padding: 30px;

&:hover img{
    transform: rotate(30deg);
}
`
const Logo = () => {

    return (
        <Link href="/portfolio">
   
                <LogoBox>
                    <Text 
                    color={useColorModeValue('#e08297','pink')} 
                    fontFamily='PT Sans'
                    fontWeight="bold"
                    ml={3}>
                        Jennifer Kim
                    </Text>
                </LogoBox>

        </Link>
    )
}

export default Logo