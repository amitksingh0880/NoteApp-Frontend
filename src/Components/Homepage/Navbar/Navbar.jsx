import { ReactNode } from 'react';
import { faker } from '@faker-js/faker'
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../../Redux/Users/user.type';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()
  const {auth , token, loading , error , name, email} = useSelector((state) =>state.userReducer)
  const nav = useNavigate()
  return (
    <>
      <Box zIndex={10} position={"fixed"} top={0} w={"100%"} boxShadow={"rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;"} bg={useColorModeValue('yellow.400')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontWeight={"bold"} fontFamily={"sans-serif"} cursor={"pointer"} onClick={()=>{
            nav("/")
          }}>Notes App</Box>

          <Flex alignItems={'center'}>
            <Stack alignItems={"center"} direction={'row'} spacing={7}>
                <Button display={auth?"block":"none"} bg={"green"} color={"white"} onClick={() =>{
                    nav("/notes")
                }} >All Notes</Button>
                <Button display={auth?"none":"block"} bg={"green"} color={"white"} onClick={()=>{
                    nav("/register")
                }}>SignUp</Button>
                <Button display={auth?"none":"block"} bg={"green"} color={"white"} onClick={()=>{
                     nav("/login")
                }}>LogIn</Button>

              <Button bg={"darkgray"} onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  border="2px solid green"
                  padding={2}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={faker.image.avatar()}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={faker.image.avatar()}
                    />
                  </Center>
                  <br />
                  <Center>
                    <Flex direction="column" alignItems="center">
                      <p>{auth ? name : 'Guest'}</p>
                      <p>{auth ? email : null}</p>
                    </Flex>
                  </Center>
                  <br />
                  <MenuDivider />
                  {/* <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem> */}
                  <MenuItem display={auth ? "block" : 'none'} onClick={()=>{
                    dispatch({type:LOGOUT})
                  }}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar