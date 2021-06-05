import React from 'react';
import logo from '../images/logo.png';
import {AppBar,List,Toolbar,IconButton,Drawer, Divider,ListItem,ListItemIcon} from '@material-ui/core';
import {makeStyles} from "@material-ui/core";
import {Link, animateScroll as scroll} from "react-scroll";
import InfoIcon from '@material-ui/icons/Info';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MenuIcon from "@material-ui/icons/Menu";
import {useState} from "react";
import CancelIcon from '@material-ui/icons/Cancel';


const links = [
    {
        id:"about",
        text: "Quien era",
        icon: <InfoIcon fontSize="large"/>
    },
    {
        id:"Skills",
        text: "Momentos Debastadores",
        icon: <EmojiObjectsIcon fontSize="large" />
    },
   
    {
        id:"contact",
        text: " Batallas memorables",
        icon: <PhoneAndroidIcon fontSize="large"/>
    },
    

]

export const NavBar = () => {
    const classes= useStyles();
    const [open, setOpen]= useState(false)
    return (
        <>
        <AppBar position="sticky" className={classes.root}>
            <Toolbar className={classes.toolbar}>
                <img src={logo} className={classes.logo} alt="Logo" />
                <List className={classes.menu}>
                    {
                        links.map(({id,text},index) =>(
                            <Link key={index}
                             to={id}
                             spy={true} 
                             activeClass="active"
                             smooth={true}
                             duration={500}
                             offset={-70}>{text}
                             </Link>
                        ))
                    }
                </List>
                <IconButton edge="end" 
                className={classes.menuButton}
                onClick={()=>setOpen(!open)}>
                     <MenuIcon fontSize="large"/></IconButton>
            </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
            <IconButton  onClick={()=>setOpen(!open)}>
                <CancelIcon className={classes.colorbotonsalir} fontSize="large" />
            </IconButton>
            <Divider/>
                 {
                    links.map(({id,text,icon},index) =>(
                        <Link key={index}
                        className={classes.sidebar}
                         to={id}
                         spy={true} 
                         activeClass="active"
                         smooth={true}
                         duration={500}
                         offset={-70}>
                        <ListItem component="h5">
                            <span>
                                <ListItemIcon>
                                    {icon}
                                </ListItemIcon>
                            </span>{text}
                        </ListItem>
                        </Link>
                    ))
                }
        

            </Drawer>
    </>
    )
}
const useStyles = makeStyles((theme)=>({
    root: {
        backgroundColor: "black",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
    },
    toolbar:{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    logo:{
        height: "5rem",
        objectFit : "contain",
        "&:hover":{
            cursor:"pointer",
        }
        },
    menu: {
        [theme.breakpoints.down("sm")]:{
                display: "none",
         },
        "& a":{
            color: "purple",
            fontSize: "1.4rem",
            fontWeight:"bold",
            marginLeft: theme.spacing(3)
            },
            "& a:hover":{
                cursor: "pointer",
                color:"tomato",
                borderBottom: "3px solid tomato",
            }
        
        },
        menuButton: {
            display: "none",
            [theme.breakpoints.down("sm")]: {
                display:"block",
                color: "tomato",
                position: "absolute",
                top:0,
                right:10,
            }
        },
        sidebar: {
            width:"30vw",
            [theme.breakpoints.down("sm")]: {
                width: "60vw",
            },
            "& h5":{
                margin: theme.spacing(10,0,0,4),
                fontSize: "1.4rem",
                color: "#333",
                fontWeight: "bold"
            },
            "& h5:hover":{
                color:"tomato",
                cursor: "pointer"
            }
        }
    
  }))

export default NavBar
