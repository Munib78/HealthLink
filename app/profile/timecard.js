import React from 'react'
import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const Timecard = () => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <ul></ul>
      </CardBody>
    </Card>
  )
}

export default Timecard