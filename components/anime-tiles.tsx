import React from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Link,
} from "@nextui-org/react";
import { motion } from "framer-motion";

const AnimeTiles = ({
  title,
  coverImage,
  averageRating,
  tinyCoverImage,
  description,
  ageRating,
  episodeCount,
  nextRelease,
  youtubeVideoId,
  subType,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "tween", stiffness: 200, damping: 20 }}
      >
        <Card isPressable onPress={onOpen}>
          <Image src={coverImage} alt={title} className="z-1" />
          <CardFooter>
            <h1>{title}</h1>
          </CardFooter>
        </Card>
      </motion.div>
      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalContent>
          {(onClose) => (
            <div className="">
              <ModalHeader className="grid grid-cols-3 gap-12 mx-4">
                <Image
                  src={tinyCoverImage}
                  alt={title}
                  className="justify-self-start"
                />
                <h1 className="text-xl justify-self-center">{title}</h1>
                <h1 className="justify-self-end">Rating: {averageRating}</h1>
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-3">
                  <ul>
                    <li>Age Rating: {ageRating}</li>
                    <li>Episode Count: {episodeCount}</li>
                    <li>Next Release: {nextRelease}</li>
                    <li>Type: {subType}</li>
                  </ul>
                  <div className="justify-self-center">
                    <p className="">Watch A Preview</p>
                    <Button
                      as={Link}
                      isExternal
                      href={`https://youtube.com/watch?v=${youtubeVideoId}`}
                      className="w-1/4 bg-red-500"
                    >
                      YouTube
                    </Button>
                  </div>
                  <div></div>
                </div>
                <p className="justify-self-start">{description}</p>
              </ModalBody>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AnimeTiles;
