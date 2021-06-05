import React from 'react'
import html from "../images/gambino.jpg";
import javascript from "../images/eclipse.jpg";
import css from "../images/css.jpg";
import node from "../images/griffin.jpg";
import picReact from "../images/react.png";
import { TimelineItem,Timeline,TimelineOppositeContent,TimelineSeparator, TimelineConnector, TimelineContent} from '@material-ui/lab';
import {Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";

import react1 from "../images/react1.jpg";

const Tecnologias =()=>{
    const classes= useStyles();
    const skills=[
        {
            
            src:html,
            title:"Guts mata a Gambino",
            
        },
        {
            
            src:javascript,
            title:"El eclipse",
            
        },
        {
           
            src:css,
            title:"El duelo",
            
        },
        {
           
            src:node,
            title:"Torturan a griffin",
            
        },
        {
            
            src:picReact,
            title:"Guts mata a Adonnis",
            
        },
        {
            
            src:react1,
            title:"Violan a Casca",
            
        },
    ]

    return (
        <Timeline align="left">
            {
                skills.map(({year,src,title},index)=>(
                    <TimelineItem key={index}>
                        <TimelineOppositeContent>
                            <Typography variant="h6" color="textSecondary">
                                {year}
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                                 <img src={src} alt={title} className={classes.customLogo} />
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Paper elevation={6} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    {title}
                                </Typography>
                            </Paper>
                        </TimelineContent>
                        </TimelineItem>
                ))
            }

        </Timeline>
            
    )
}
const useStyles = makeStyles((theme)=>({

    customLogo:{
        width:"20vw",
      
    },
    paper:{
        padding:"6px 16px",
        maxWidth:"20vw",
    }
  }))

  

export default Tecnologias
