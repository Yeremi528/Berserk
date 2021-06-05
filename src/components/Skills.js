import React from 'react';
import {makeStyles,Typography} from "@material-ui/core";
import Tecnologias from "./Tecnologias";

function Skills({title,dark,id}) {
    const classes= useStyles();
    return (
        <div className={classes.video}>
           
            <div className={`${classes.section} ${dark || classes.fondo}`}>
                <div className={classes.sectioncontent} id={id}></div>
                    <Typography variant="h4" color="primary">{title}</Typography>
                    <Tecnologias/>
            </div>
        </div>
    )
}
const useStyles = makeStyles((theme)=>({

    section:{
        minHeight: "100vh",
      
    },
    sectiondark:{
        background : "#333",
        color:"#fff",
    },
    fondo:{
        background: "black",
        color:"#333",
    },
    "& h4":{
        margin: theme.spacing(10,0,0,4),
        fontSize: "1.4rem",
        color: "#333",
        fontWeight: "bold"
    },
  })) 
export default Skills
