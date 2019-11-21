import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Parallax } from 'react-parallax';
import Profiticity from './Projects/Profiticity'
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// Images
import aboutImg from '../images/about.jpeg';
import profiticityLogo from '../images/profiticity.png';
import conffianzLogo from '../images/conffianzlogo.png';
import trueBeautyLogo from '../images/truebeauty.png';
import Conffianz from './Projects/Conffianz';
import TrueBeauty from './Projects/TrueBeauty';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: 20,
        marginBottom: 20,
    },
    control: {
        padding: theme.spacing(2),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const Home = () => {

    const classes = useStyles();
    const [display, setDisplay] = useState('');

    const viewProject = (project) => {
        console.log('clicked', project)
        setDisplay(project)
    };
    useEffect(() => {
        console.log(display)
      }, [display]);
    return (
        <div>
            <NavBar />
            <div>                
                {(display === 'profiticity')?
                    <Profiticity viewproject={viewProject}/>: (display === 'conffianz') ? 
                    <Conffianz viewproject={viewProject}/>: (display === 'truebeauty') ? 
                    <TrueBeauty viewproject={viewProject}/>: null
                }
            </div>
            <Parallax
                bgImage={require('../images/home-land.jpg')}
                bgImageAlt=""
                strength={400}
                className='parralax'
            >
                <h1>TYLER SIMMONS</h1>
                <h2>WEB DEVELOPER</h2>
                <a className='btn' href='#contact'>Contact</a>
                <div style={{ height: '200px' }} />
            </Parallax>
            <div className="about-me" id='about'>
                <div className="am-text">
                    <div className="text-content">
                        <h1>About Me</h1>
                        <p>I'm a full stack developer and I take pride in projects. Constantly trying to improve. That's how I got where I am today. Willing to take risks, after all that's how I'm going to grow.<br /><br />I grew up in Las Vegas Nevada, currently living in Utah.  I love the outdoors but I still consider myself a city guy. I enjoy being surrounded by the people that I love. I'm always up for a challenge especially if I'm with a team. Family means a lot to me and I love to meet new people.</p>
                    </div>
                <span id='skills'></span>
                </div>
                <img src={aboutImg} alt="" />
            </div>
            <div className="skills">
                <h1>SKILLS</h1>
                <div className="ind-skils">
                    <ul>
                        <li>
                            <h3>REACT</h3>
                            <img src="https://img.icons8.com/office/50/000000/react.png" alt='' />
                        </li>
                        <li>
                            <h3>JAVASCRIPT</h3>
                            <img src="https://img.icons8.com/color/50/000000/javascript.png" alt='' />
                        </li>
                        <li>
                            <h3>HTML</h3>
                            <img src="https://img.icons8.com/ios-filled/50/000000/html-5.png" alt='' />
                        </li>
                        <li>
                            <h3>CSS</h3>
                            <img src="https://img.icons8.com/color/48/000000/css3.png" alt='' />
                        </li>
                        <li>
                            <h3>NODEJS</h3>
                            <img src="https://img.icons8.com/windows/32/000000/node-js.png" alt='' />
                        </li>
                        <li>
                            <h3>SHOPIFY</h3>
                            <img src="https://img.icons8.com/bubbles/50/000000/shopify.png" alt='' />
                        </li>
                        <li>
                            <h3>WORDPRESS</h3>
                            <img src="https://img.icons8.com/metro/26/000000/wordpress.png" alt='' />
                        </li>
                        <li>
                            <h3>SQL</h3>
                            <img src="https://img.icons8.com/ultraviolet/40/000000/sql.png" />
                        </li>
                    </ul>
                </div>
                <span id='projects'></span>
            </div>
            <Parallax
                bgImage={require('../images/home-bottom.jpg')}
                bgImageAlt=""
                strength={400}
                className='bottom-par'
            >
                <h1>PROJECTS</h1>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={5}>
                            <Grid item>
                                <Paper className="paper" id='profiticity' onClick={()=>viewProject('profiticity')}><img src={profiticityLogo} /></Paper>
                            </Grid>
                            <Grid item>
                                <Paper className="paper" id='conffianz' onClick={()=>viewProject('conffianz')}><img src={conffianzLogo}/></Paper>
                            </Grid>
                            <Grid item>
                                <Paper className="paper" id='trueBeauty' onClick={()=>viewProject('truebeauty')}><img src={trueBeautyLogo} /></Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <div className="contact" id='contact'>
                    <div className="bar"></div>
                    <div className="c-text">
                        <h1>CONTACT</h1>
                        <p>tylersimmons212@gmail.com</p>
                        <p>GitHub: https://github.com/TylerSimmons212</p>
                        <a href='https://www.linkedin.com/in/tylersimmons212/'><img src="https://img.icons8.com/ios-filled/50/000000/linkedin-circled.png"/></a>
                    </div>
                    <form action="mailto:tylersimmons212@gmail.com" method="post" enctype="text/plain">
                        <TextField
                            id="filled-basic"
                            className={classes.textField}
                            label="Name"
                            margin="normal"
                            variant="filled"
                            name="name"
                        /><br />
                        <TextField
                            id="filled-basic"
                            className={classes.textField}
                            label="Email"
                            margin="normal"
                            variant="filled"
                            name="mail"
                        /><br />
                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows="4"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            name="message"
                        /><br />
                        <Button variant="outlined" className={classes.button} type="reset" value="Clear">
                            Clear
                        </Button>
                        <Button type='submit' variant="contained" color="primary" value="Send" className={classes.button} id='send-btn'>
                            Send
                        </Button>
                    </form>
                </div>
            </Parallax>
        </div>
    )
}

export default Home;