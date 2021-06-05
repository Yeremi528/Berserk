import React from 'react';
import {makeStyles,Typography,Card,CardMedia,CardContent,CardActions} from '@material-ui/core';
import juan from "../images/juan.jpg";
import TypeWriter from "react-typewriter-effect";


function About({title,dark,id}) {
    const classes= useStyles();
    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent} id={id}>
                <Typography variant="h4">{title}</Typography>
                <Card className={classes.card}>
                    <CardMedia image={juan} className={classes.media} title="pictures" />
                    <CardContent className={classes.cardContent}>
                        <TypeWriter
                        text="Kentarō Miura"
                        textStyle={{fontSize:"1,5rem",fontWeight:"700px",color:"tomato"}}
                        startDelay={100}
                        cursorColor="black"
                        typeSpeed={100}
                        />
                        <TypeWriter
                        text="Mangaka "
                        textStyle={{fontSize:"1.2rem",fontWeight:"500px",color:"black"}}
                        startDelay={1700}
                        cursorColor="black"
                        typeSpeed={100}
                        />
                        <Typography variant="h6" color="textSecondary">
                        Berserk (ベルセルク?) es un manga creado por Kentaro Miura y posteriormente
                         adaptado en anime, con un estilo épico fantástico y de fantasía oscura.
                          Miura publicó un prototipo de Berserk en 1988. El manga comenzó a publicarse 
                          al año siguiente en la extinta revista mensual Animal House, hasta que fue reemplazada
                           en 1992 por la revista quincenal Young Animal, donde fue publicado irregularmente
                            hasta el 2021 tras la muerte de su autor.

                        </Typography>
                    </CardContent>
                    <CardActions>
                        
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}
const useStyles = makeStyles((theme)=>({

    section:{
        minHeight: "100vh",
      
    },
    sectiondark:{
        background : "#5F2361",
        color:"#fff",
    },
    sectioncontent:{
        maxWidth: "80vw",
        margin: "0 auto",
    },
    media:{
        width:"40vw",
        height:"auto",
        borderRadius: "10px",
        objectFit:"cover",
        margin: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            width: "40vw",
        
        },
    },
        "& h1":{
            [theme.breakpoints.down("sm")]: {
                width: "1vw",
        },
    },
    
    cardContent:{
        marginTop: theme.spacing(1.5),
        [theme.breakpoints.down("sm")]: {
            width: "25vw",
        
            "& h6":{
                marginTop: theme.spacing(4),
                [theme.breakpoints.down("sm")]: {
                display: "none",
                

            },},
        },
    },

    card:{
        height: "70vh",
        display: "flex",
        marginTop: theme.spacing(6),
        position:"relative",
    },
  
        
    
  })) 
export default About
