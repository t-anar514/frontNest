import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { CiMenuBurger, CiInstagram } from "react-icons/ci";
import { FaYoutube, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const DrawerComponent = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="dark:bg-black dark:text-white">
      <List>
        {[
          "Home",
          "JustDropped",
          "Most Popular",
          "Accessories",
          "Shoe Laces",
          "Sizing",
          "Track Order",
          "FAQs",
          "About US",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              {/* <ListItemText primary={text} /> */}
              <p className="text-2xl pb-6 pl-3">{text}</p>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {/* {['Log in', 'Trash', 'Spam'].map((text, index) => ( */}
        <ListItem key="Log in" disablePadding>
          <ListItemButton>
       
            {/* <ListItemIcon> */}
            {/* {index % 2 === 0 ? */}
            <div className="flex flex-col w-full pl-3 ">
                <div className="flex w-full justify-start ">
                  <Link href="/Login">
              <button>Log in</button></Link>
</div>
              <div className="flex w-full justify-evenly gap-x-8 pt-8">
                <FaTiktok size={30}/>
                <FaYoutube size={30}/>
                <CiInstagram size={30}/>
              </div>
            </div>
            {/* : <MailIcon />} */}
            {/* </ListItemIcon> */}
            {/* <ListItemText primary="Log in" /> */}
          </ListItemButton>
        </ListItem>
        {/* ))} */}
      </List>
      </div>
    </Box>
  );

  return (
    <div>
      {["Draw"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
          <CiMenuBurger className="text-black dark:text-white" size={30}/>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default DrawerComponent;
