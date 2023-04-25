import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

const CardsContainer = () => {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="w-full max-w-[26rem] bg-blue-200 rounded-lg overflow-hidden"
    >
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-6 pb-4 px-6 bg-gradient-to-b from-blue-300 to-blue-500"
      >
        <Avatar
          style={{ width: "40px", height: "40px" }}
          size="lg"
          variant="circular"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="candice wu"
        />
        <div className="flex w-full flex-col gap-1">
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="white">
              Candice Wu
            </Typography>
            <div className="5 flex items-center gap-0">
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
            </div>
          </div>
          <Typography color="white" className="text-sm">
            Abewd @ Sydney
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-6 pt-4 pb-6">
        <Typography className="text-gray-700 text-base leading-relaxed">
          &quot;Hi Hello this is our website We are doing chat things And we are
          doing multiplaer and solo things Please update this with proper stuff
          and thigns&quot;
        </Typography>
      </CardBody>
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center justify-between">
          <Typography variant="h5" color="white">
            Candice Wu
          </Typography>
          <div className="5 flex items-center gap-0">
            <StarIcon className="h-5 w-5 text-yellow-700" />
            <StarIcon className="h-5 w-5 text-yellow-700" />
            <StarIcon className="h-5 w-5 text-yellow-700" />
            <StarIcon className="h-5 w-5 text-yellow-700" />
            <StarIcon className="h-5 w-5 text-yellow-700" />
          </div>
        </div>
        <Typography color="white" className="text-sm">
          Abewd @ Sydney
        </Typography>
      </div>
    </Card>
  );
};

export default CardsContainer;
