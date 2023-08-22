import Logo from './logo'
import { usePathname } from 'next/navigation';
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const Navbar = props => {
    const {path} = props
    const currentRoute = usePathname();
    const inactive = useColorModeValue('#de8383', '#ffdbea')
    const active = useColorModeValue('black', 'white')
    return (
        <Box position="fixed" as="nav" w="100%" bg={useColorModeValue('#ffffff60', '#ffffff20')}
        style={{backdropFilter:'blur(10px'}} zIndex={1} {...props}>
            <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                direction={{ base: 'column', md: 'row' }}
                display={{ base: 'none', md: 'flex' }}
                width={{ base: 'full', md: 'auto' }}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
                >
                    <Link href="/projects" p={2} color={currentRoute === "/projects" ? active : inactive } path={path}>
                        Projects
                    </Link>
                    <Link href="/resume" p={2} color={currentRoute === "/resume" ? active : inactive } path={path}>
                        Resume
                    </Link>
        
                </Stack>
                <Box flex={1} align="right" pt={2}>
                    <ThemeToggleButton/>
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                        <MenuButton
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant="outline"
                        />
                        <MenuList>
                            <MenuItem as='a' href='/'>
                            About
                            </MenuItem>
                            <MenuItem as='a' href="/projects">
                            Projects
                            </MenuItem>
                            <MenuItem as='a' href="/resume">
                            Resume
                            </MenuItem>
                        </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar