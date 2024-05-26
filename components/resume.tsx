import React from "react";
import Resume from "../public/Resume.pdf";
import { Card, CardHeader, CardFooter, Button, Image } from "@nextui-org/react";

const resume = () => {
  return (
    <div className="mt-12">
      <h1 className="text-xl">Here is a link to my resume:</h1>
      <Button onPress={() => window.open(Resume)} className="mt-4 bg-blue-500">
        Resume
      </Button>
    </div>
  );
};

export default resume;
