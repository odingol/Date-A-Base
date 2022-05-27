import React from "react";
import { Link, Typography } from "@mui/material";

export default function Game(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}{" "}
      <Link color="inherit" href="https://mui.com/">
        DataBase
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
