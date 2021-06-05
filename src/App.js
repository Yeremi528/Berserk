
import {makeStyles} from "@material-ui/core";
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {
  const classes= useStyles();
  return (
    <div>
      <NavBar/>
      <About title="Bienvenidos a ver un poco de esta obra maestra" id="about" dark={true}/>
      <Skills title="Momentos desgarradores" id="skills" dark={false}/>
      <Contact title="Recordar" id="contact" dark={false}/>
    </div>
  );
}
const useStyles = makeStyles((theme)=>({

  root:{
    
  }
}))
export default App;
