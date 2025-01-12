import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { TextField } from "@mui/material";

export default function Search() {
  return (
    <div>
      <TextField
        sx={{ marginRight: "30px" }}
        size={"small"}
        className={"w-[400px]"}
        slotProps={{
          input: {
            endAdornment: <SearchOutlinedIcon />,
          },
        }}
      ></TextField>
    </div>
  );
}
