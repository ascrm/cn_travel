import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

export default function UserInfoItem({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <Button
      sx={{
        color: "black",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 10px",
      }}
      size={"large"}
      className={"w-[100%] cursor-pointer hover:bg-[rgba(200,200,200,0.5)]"}
    >
      <div className={"flex-center-box"}>{children}</div>
      <ArrowForwardIosIcon fontSize={"small"}></ArrowForwardIosIcon>
    </Button>
  );
}
