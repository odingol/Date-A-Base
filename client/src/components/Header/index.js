import * as React from "react";
import Auth from "../../utils/auth";
import Signup from "../../pages/Signup";
// Styling imports
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Paper,
} from "@mui/material";

import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";

const styles = {
  paperContainer: {
    minHeight: "17vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "./assets/images/backgrounds/nav1.jpeg"
    })`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // opacity: "70%",
  },
};

const pages = [""];
const settings = ["Profile", "Account", "Logout"];

export default function Header(props) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Paper style={styles.paperContainer}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <a href="https://www.fontspace.com/category/bold">
                <img
                  src="https://see.fontimg.com/api/renderfont4/K7pMp/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjQ0U1RkJCIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RGF0ZSBBIEJhc2U/boldblaster-italic.png"
                  alt="Bold fonts"
                />
              </a>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <a href="https://www.fontspace.com/category/bold">
                <img
                  src="https://see.fontimg.com/api/renderfont4/K7pMp/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjQ0U1RkJCIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/RGF0ZSBBIEJhc2U/boldblaster-italic.png"
                  alt="Bold fonts"
                />
              </a>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 5 }}>
                  <Avatar alt="Remy Sharp" src="./assets/images/Teacher-Brian.png" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              {Auth.loggedIn() ? (
                <>
                  <Button variant="contained" align="right" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="contained" align="right" onClick={Signup}>
                    Sign up
                  </Button>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </Paper>
    </AppBar>
  );
}

// import React from "react";
// import { Typography, Button } from "@mui/material";
// import Auth from "../../utils/auth";
// import Signup from "../../pages/Signup";

// export default function Header(props) {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };
//   return (
//     <Typography
//       variant="h5"
//       color="gold"
//       backgroundColor="purple"
//       align="center"
//       marginTop="0"
//     >
//       <h1 textAlign="center" className="gameTitle">
//         Date<span>-A-</span>Base
//       </h1>
//       {Auth.loggedIn() ? (
//         <>
//           <Button variant="contained" align="right" onClick={logout}>
//             Logout
//           </Button>
//         </>
//       ) : (
//         <>
//           <Button variant="contained" align="right" onClick={Signup}>
//             Sign up
//           </Button>
//         </>
//       )}
//     </Typography>
//   );
// }
