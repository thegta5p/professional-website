"use client";
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image,
} from "@nextui-org/react";
import React from "react";

import AboutData from "../../data/about.json";
export default function AboutPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [content, setContent] = React.useState("test");
  const [title, setTitle] = React.useState("title");

  const handleOpen = (content: string, title: string) => {
    setContent(content);
    setTitle(title);
    onOpen();
  };

  return (
    <div>
      <div className="grid grid-rows-4 gap-12 ">
        {AboutData.map((data) => (
          <Card key={data.title}>
            <CardHeader className="absolute top-0 bg-black/40">
              <h1 className="text-xl">{data.title}</h1>
            </CardHeader>
            <Image
              removeWrapper
              src={data.image}
              alt="background image"
              className="z-0 w-full h-full object-cover"
            />
            <CardFooter className="absolute bottom-0">
              <Button
                key={data.title}
                onPress={() => handleOpen(data.content, data.title)}
              >
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{title}</ModalHeader>
              <ModalBody>
                <p>{content}</p>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
