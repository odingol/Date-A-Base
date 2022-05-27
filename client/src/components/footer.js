import { Link, Typography } from "@mui/material";

const Footer = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}{" "}
      <Link color="inherit" href="https://mui.com/">
        Date-A-Base
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Footer;
