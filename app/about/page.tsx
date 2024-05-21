import { title } from "@/components/primitives";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image} from "@nextui-org/react";


import AboutData from "../../data/about.json";
export default function AboutPage() {

  
  return (
    <div>
      <div>
        {AboutData.map((data) => (
          <Card key={data.title}>
            <CardHeader>
              <h1>{data.title}</h1>
            </CardHeader>
            <Image src={data.image} alt="background image" className="z-0 w-full h-full object-cover"/>
            <CardFooter>
              <Button key={data.title}>Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
