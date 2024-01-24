import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from 'react';
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import NavBar from './NavBar';


const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}


const DASHBOARD_LIST = [
  {
    id: 1,
    primaryName: "Stock Enter",
    primaryIcon: <LocalShippingOutlinedIcon style={{color:"white"}} />,
    path: "/stockenter"
  },
  {
    id: 2,
    primaryName: "Stock Release",
    primaryIcon: <InventoryOutlinedIcon style={{color:"white"}} />,
    path: "/stockrelease"
  },
  {
    id: 3,
    primaryName: "Stock Return",
    primaryIcon: <AccountBalanceOutlinedIcon style={{color:"white"}} />,
    path: "/stockreturn"
  },
  {
    id: 4,
    primaryName: "Sales",
    primaryIcon: <FaUserDoctor style={{color:"white"}} />,
    path: "/sales"
  },
  {
    id: 5,
    primaryName: "Inventory",
    primaryIcon: <FaUserDoctor style={{color:"white"}} />,
    path: "/inventories"
  },
  {
    id: 6,
    primaryName: "Add Items",
    primaryIcon: <FaUserDoctor style={{color:"white"}} />,
    path: "/additems"
  },
  {
    id: 7,
    primaryName: "Add Staff",
    primaryIcon: <FaUserDoctor style={{color:"white"}} />,
    path: "/addstaff"
  },
  {
    id: 8,
    primaryName: "Add Shop",
    primaryIcon: <FaUserDoctor style={{color:"white"}} />,
    path: "/addshop"
  },
  {
    id: 9,
    primaryName: "Add Types",
    primaryIcon: <FaUserDoctor style={{color:"white"}} />,
    path: "/addtypes"
  }
];

export default function ResponsiveDrawer(props: Props) {

  const [openItems, setOpenItems] = React.useState([]);

  const handleClick = (itemId) => {
    if (openItems.includes(itemId)) {
      setOpenItems(openItems.filter((item) => item !== itemId));
    } else {
      setOpenItems([...openItems, itemId]);
    }
  };
  

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  

  const drawer = (
    <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
    <Grid item>
    <Grid item align='center'>
        <img
          src="/images/Logo.jpg"
          alt="logo"
          style={{ height: "51px", width: "51px" }}
        />
      </Grid>
      <List
        sx={{
          height: "calc(100vh - 58px)",
          width: "100%",
          bgcolor: "#0d47a1"
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {DASHBOARD_LIST.map((item) => (
          <div key={item.id}>
            <Link to={item.path} style={{textDecoration:'none'}}>
              <ListItemButton onClick={() => handleClick(item.id)}>
                <ListItemIcon>
                  {item.primaryIcon}
                </ListItemIcon>
                <ListItemText style={{ color: "white" }} primary={item.primaryName} />
              </ListItemButton>
            </Link>
          </div>
        ))}
      </List>
    </Grid>

    <NavBar />

  </Grid>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
     
    </Box>
  );
}
