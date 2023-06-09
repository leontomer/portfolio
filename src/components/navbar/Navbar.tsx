import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { about, projects, resume, contact } from "../../Constants";
import "./Navbar.css";

// type Props = { children: React.ReactNode };

const Navbar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        color="secondary"
      >
        <Toolbar>
          <a className="link1" href="/">
            {about}
          </a>
          <a className="link" href="/projects">
            {projects}
          </a>
          <a className="link" href="/resume">
            {resume}
          </a>
          <a className="link" href="/contact">
            {contact}
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
