import { TextField, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../utils/ThemeUtil";

// Responsive break point
const max_width_for_mobile = 767;

export default function SearchBar({ value, onChange }) {
  const isMobile = useMediaQuery(`(max-width:${max_width_for_mobile}px)`);

  const inputWidth = isMobile ? "100%" : "240px";
  return (
    <ThemeProvider theme={theme}>
      <TextField
        value={value}
        onChange={onChange}
        placeholder="Search for a lesson"
        sx={{
          // height: "48px",
          width: inputWidth,
          backgroundColor:"#fff",
          border: "1px solid #709294",
          borderRadius: "8px",
          fontFamily: "Source Sans Pro",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "20px",
        }}
        color="primary300"
      />
    </ThemeProvider>
  );
}
