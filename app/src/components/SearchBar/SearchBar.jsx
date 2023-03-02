import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Search } from "../../assets/Icons";

export default function SearchBar({ value, onChange }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        value={value}
        onChange={onChange}
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <Search fillColor="#000" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
