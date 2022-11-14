import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { Form } from 'react-router-dom'

const Upload = () => {
     return (
          <Container maxW={"container.xl"} h={"100vh"} p={"16"}>

               <VStack color={"purple.500"} h={"full"} justifyContent={"center"}>
                    <AiOutlineCloudUpload size={"10vmax"} />

                    <form>
                         <HStack>
                              <Input type={"file"} required />
                              <Button type={"submit"} colorScheme={"purple"}>Upload</Button>
                         </HStack>
                    </form>
               </VStack>
          </Container>
     )
}

export default Upload