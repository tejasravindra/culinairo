import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { styled } from "@mui/system";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  margin: 0 16px;
`;

const NavBar = () => {
  return (
    <AppBar
      position="sticky"
      color="primary"
      sx={{ backgroundColor: "#ffffff" }}
    >
      <Toolbar>
        <Tooltip title="Inventory">
          <IconButton
            edge="start"
            color="inherit"
            component={StyledLink}
            to="/"
            sx={{ color: "#000000" }}
          >
            <HomeIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Recipes">
          <IconButton
            color="inherit"
            component={StyledLink}
            to="/recipes"
            sx={{ color: "#000000" }}
          >
            <MenuBookIcon />
          </IconButton>
        </Tooltip>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center", textTransform: "lowercase" }}
        >
          culinairo
        </Typography>
        <Tooltip title="Feedback">
          <IconButton
            color="inherit"
            component={StyledLink}
            to="/feedback"
            sx={{ color: "#000000" }}
          >
            <FeedbackIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Settings">
          <IconButton
            edge="end"
            color="inherit"
            component={StyledLink}
            to="/settings"
            sx={{ color: "#000000" }}
          >
            <SettingsIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
