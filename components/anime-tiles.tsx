import React from 'react'
import {Card, CardFooter, CardHeader, Image, Modal,ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";

const AnimeTiles = ({title, coverImage, averageRating, tinyCoverImage, description}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  
  return (
    <div>
      <Card isPressable onPress={onOpen}>
        <Image src={coverImage} alt={title} className='z-1'/>
        <CardFooter>
          <h1>{title}</h1>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalContent>
          {(onClose)=> (
            <div className=''>
              <ModalHeader className='grid grid-cols-3 gap-12 mx-4'>
                <Image src={tinyCoverImage} alt={title} className='justify-self-start'/>
                <h1 className='text-xl justify-self-center'>{title}</h1>
                <h1 className='justify-self-end'>Rating: {averageRating}</h1>
              </ModalHeader>
              <ModalBody className=''>
                <p>{description}</p>
              </ModalBody>
              <ModalFooter>
                
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default AnimeTiles