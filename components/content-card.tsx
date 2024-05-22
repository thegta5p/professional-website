import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

const ContentCard = ({ title, description, date }) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <h1 className="text-xl font-bold">{title}</h1>
        </CardHeader>
        <CardBody>{description}</CardBody>
        <CardFooter>{date}</CardFooter>
      </Card>
    </div>
  );
};

export default ContentCard;
