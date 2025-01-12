import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const buttonSx = {
  color: "black",
  display: "flex",
  justifyContent: "space-between",
};

export default function UserInfoItem({ content }: { content: string }) {
  return (
    <Button
      sx={{ ...buttonSx }}
      size={"large"}
      className={"w-[100%] cursor-pointer hover:bg-[rgba(200,200,200,0.5)]"}
    >
      {content}
      <ArrowForwardIosIcon fontSize={"small"}></ArrowForwardIosIcon>
    </Button>
  );
}
