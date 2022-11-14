import { Button, Container, Heading, Input, VStack, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
     return (
          <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
               <form>
                    <VStack alignItems={"stretch"} spacing={"8"} m={"auto"} my={"16"}
                         w={["full", "96"]}>
                         <Heading>
                              Video Hub | Sign Up
                         </Heading>
                         <Avatar alignSelf={"center"} boxSize={"24"} />

                         <Input
                              placeholder={"Enter your name here"}
                              type={"text"}
                              required
                              focusBorderColor={"purple.500"}
                         />

                         <Input
                              placeholder={"Enter your email here"}
                              type={"email"}
                              required
                              focusBorderColor={"purple.500"}
                         />
                         <Input
                              placeholder={"Enter your password here"}
                              type={"password"}
                              required
                              focusBorderColor={"purple.500"}
                         />

                         <Button colorScheme={"purple"} type={"submit"}>Sign Up</Button>
                         <Text textAlign={"right"}>Already Signed Up? {" "}
                              <Button variant={"link"} alignSelf={"flex-end"}>
                                   <Link to={"/login"}>Log In</Link>
                              </Button>
                         </Text>
                    </VStack>
               </form>
          </Container>
     )
}

export default Signup