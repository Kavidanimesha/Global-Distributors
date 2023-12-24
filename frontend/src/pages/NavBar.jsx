import React from "react";
import { AppBar, Grid, IconButton, ListItemIcon, Toolbar } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const drawerWidth = 240;

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: "60px",
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#0d47a1",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <InboxIcon />
          </IconButton>

          <Grid
            item
            display={"flex"}
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={{ ml: "auto" }}
          >
            <ListItemIcon
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <AccountCircleIcon style={{ fontSize:'40px' , color: "white", cursor: "pointer" }} />
            </ListItemIcon>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
