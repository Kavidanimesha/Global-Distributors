import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import DraftsIcon from "@mui/icons-material/Drafts";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { TiUserAddOutline } from "react-icons/ti";
import { TbTallymark4 } from "react-icons/tb";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { FaUserDoctor } from "react-icons/fa6";
import { LiaFilePrescriptionSolid } from "react-icons/lia";
import { GiMedicines } from "react-icons/gi";
import { AiFillMedicineBox } from "react-icons/ai";
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
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
    id: 2,
    primaryName: "Suppliers",
    primaryIcon: <LocalShippingOutlinedIcon style={{color:"white"}} />,
    secondaryItems: [
      {
        id: 1,
        secondaryName: "Add Supplier",
        secondaryIcon: <TiUserAddOutline style={{color:"white"}}   />,
        path: "/addsuppliers"
      },
      {
        id: 2,
        secondaryName: "All Suppliers",
        secondaryIcon: <TbTallymark4  style={{color:"white"}} />,
        path: "/allsuppliers"
      }
    ],
  },
  {
    id: 3,
    primaryName: "Customers",
    primaryIcon: <PeopleOutlineIcon style={{color:"white"}} />,
    secondaryItems: [
      {
        id: 1,
        secondaryName: "All Customers",
        secondaryIcon: <PeopleOutlineIcon style={{color:"white"}} />,
        path: "/allcustomers"
      },
    ],
  },
  {
    id: 4,
    primaryName: "Purchases",
    primaryIcon: <ShoppingCartOutlinedIcon style={{color:"white"}}/>,
    secondaryItems: [
      {
        id: 1,
        secondaryName: "Add Purchase",
        secondaryIcon: <AddShoppingCartOutlinedIcon style={{color:"white"}} />,
        path: "/addpurchase"
      },
      {
        id: 2,
        secondaryName: "All Purchases",
        secondaryIcon: <InventoryOutlinedIcon style={{color:"white"}}  />,
        path: "/allpurchase"
      },
    ],
  },
  {
    id: 5,
    primaryName: "Inventory",
    primaryIcon: <InventoryOutlinedIcon style={{color:"white"}} />,
    secondaryItems: [
      {
        id: 1,
        secondaryName: "View Inventory",
        secondaryIcon: <InventoryOutlinedIcon style={{color:"white"}} />,
        path: "/inventory"
      },
    ],
  },
  {
    id: 6,
    primaryName: "Cashier",
    primaryIcon: <PaymentsOutlinedIcon style={{color:"white"}} />,
    secondaryItems: [
      {
        id: 1,
        secondaryName: "Billing",
        secondaryIcon: <AttachMoneyOutlinedIcon style={{color:"white"}} />,
        path: "/billing"
      },
    ],
  },
  {
    id: 7,
    primaryName: "Receptionist",
    primaryIcon: <AccountBalanceOutlinedIcon style={{color:"white"}} />,
    secondaryItems: [
      {
        id: 1,
        secondaryName: "Billing",
        secondaryIcon: <PersonAddAltOutlinedIcon style={{color:"white"}} />,
        path: "/receptionist"
      },
      {
        id: 2,
        secondaryName: "Patient Records",
        secondaryIcon: <DraftsIcon style={{color:"white"}} />,
        path: "/createpatientrecords"
      },
    ],
  },
  {
    id: 8,
    primaryName: "Doctor",
    primaryIcon: <FaUserDoctor style={{color:"white", fontSize: '21px'}} />,
    secondaryItems: [
      {
        id: 1,
        secondaryName: "Prescription",
        secondaryIcon: <LiaFilePrescriptionSolid style={{color:"white", fontSize: '28px'}}  />,
        path: "/prescriptionform"
      },
      {
        id: 2,
        secondaryName: "Patient Records",
        secondaryIcon: <DraftsIcon style={{color:"white"}} />,
        path: "/viewpatientrecords"
      },
    ],
  },
  {
    id: 9,
    primaryName: "Drug",
    primaryIcon: <GiMedicines style={{color:"white", fontSize: '26px'}}  />,
    secondaryItems: [
      {
        id: 1,
        secondaryName: "Add Drugs",
        secondaryIcon: <AiFillMedicineBox style={{color:"white", fontSize: '26px'}}  />,
        path: "/adddrugs"
      },
      {
        id: 2,
        secondaryName: "All Drugs",
        secondaryIcon: <VaccinesOutlinedIcon style={{color:"white"}}  />,
        path: "/alldrugs"
      },
    ],
  },
  {
    id: 10,
    primaryName: "Reports",
    primaryIcon: <LiaFilePrescriptionSolid style={{color:"white", fontSize: '26px'}}  />,
    secondaryItems: [
      {
        id: 1,
        secondaryName: "View Reports",
        secondaryIcon: <AiFillMedicineBox style={{color:"white", fontSize: '26px'}}  />,
        path: "/allreports"
      },
    ],
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
          Width: 340,
          bgcolor: "#0d47a1"
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {DASHBOARD_LIST.map((item) => (
          <div key={item.id}>
            <ListItemButton onClick={() => handleClick(item.id)}>
              <ListItemIcon>
                {item.primaryIcon}
              </ListItemIcon>
              <ListItemText style={{ color: "white" }} primary={item.primaryName} />
              {openItems.includes(item.id) ? <ExpandLess style={{ color: "white" }} /> : <ExpandMore style={{ color: "white" }} />}
            </ListItemButton>

            <Collapse
              in={openItems.includes(item.id)}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {item.secondaryItems.map((secondaryItem) => (
                    <Link to={secondaryItem.path} style={{textDecoration:'none'}} key={secondaryItem.id}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      {secondaryItem.secondaryIcon}
                    </ListItemIcon>
                      <ListItemText style={{ color: "white" }} primary={secondaryItem.secondaryName} />
                  </ListItemButton>
                    </Link>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </Grid>

    <NavBar />

  </Grid>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
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
