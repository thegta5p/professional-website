"use client";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import AcmProjects from "../../data/acm-projects.json";

export default function Extracurriculars() {
  return (
    <div>
      <Tabs aria-label='Dynamic Tabs' items={AcmProjects}>
            {(item)=> (
                <Tab key={item.id} title={item.title}>
                    <Card>
                        <CardHeader>
                            <h1>{item.title}</h1>
                        </CardHeader>
                        <CardBody>
                            <p>{item.content}</p>
                        </CardBody>
                    </Card>
                </Tab>
            )}
        </Tabs>
    </div>
  );
}
