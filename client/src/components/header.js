import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";

const Header = () => {
  return (
    <Typography
      variant="h5"
      color="gold"
      background-color="purple"
      align="center"
    >
      <h1 textAlign="center" className="gameTitle">
        Date<span>-A-</span>Base
      </h1>
      <Button variant="contained" align="right">
        <Link className="QuitGame" to="/">
          Log Out / Quit
        </Link>
      </Button>
    </Typography>
  );
};

export default Header;
