import React from 'react';
import './App.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom'

class AboutMe extends React.Component {
    render(){
        return (
            <div className = "aboutme">
                <h1>Kristen Worden</h1>
                <p style={{margin:"70px 140px 70px 100px"}}>I am a third-year undergraduate student at the University of Michigan studying Computer Science. 
                    This past summer, I have been working on a couple of projects to make use of the extra time I have due to the pandemic. On this website, I am documenting
                    the major project I have been working on, and its documentation can be found in the 'Projects' tab. Below, you can find a link to my LinkedIn and my Resume.
                    Thank you for taking the time to visit my portfolio website!</p>
                    <a href="https://www.linkedin.com/in/kristenworden/">
                     <img style={{margin:"50px 70px 70px 50px"}} src="./1200px-Linkedin.svg.png" alt="Link to LinkedIn Account" width="70" height="70"></img>

                    </a>
                    <a href="./Resume_Kristen_Worden.pdf">
                        
                     <img src="./document-icon.png" alt="Link to Download Resume" width="100" height="70"></img>
                     
                    </a>
                <p style={{margin:"70px 140px 70px 100px"}}><i>This website was developed using React.js.</i></p> 
            </div>
        );
                }
}

class Project extends React.Component {
    render(){
        const mystyle = {
            margin:"0px 100px 70px 100px",
            textAlign: "left"
        };
        return(
            <div className = "project">
                <h1>Automated Weed-puller Project</h1>
                
                <p style={{margin:"100px 100px 10px 100px"}}> <u> Project Summary </u> </p>
                <p style={{margin:"0px 100px 70px 100px"}}>At my permanent residence, we try to avoid using synthetic weed killers for health reasons. 
                As a result, we frequently have to pull the weeds in our front yard ourselves.  
                To lessen the burden, my father and I decided to design an automated weed-puller that could detect weeds with artificial intelligence, 
                navigate towards it in a precise manner, and pull it out from the ground with a tool attached to a motor-controlled arm. 
                I am documenting some of the work we have done below; since this is a work-in-progress, 
                I will occasionally be updating this page with new content. </p>

                <img src="" alt="Image of Robot" width="500" height="600"></img>
                <img src="" alt="Image of Robot" width="500" height="600"></img>


                <p style={{margin:"70px 70px 10px 70px"}}> <u> Major Components and Their Functions </u> </p>
                <p style={mystyle}>
                    <ul>
                        <li>Raspberry Pi 3 Model B+
                            <p>
                                The 'brain' of the weed-pulling robot. Decides and relays to the Arduino which state it should be in based on the information it gathers from the VL53L0X Laser sensor and the TensorFlow Lite Object Detection Model (the AI used to detect the target). 
                            </p>
                        </li>
                        <li>Arduino Mega 2560
                            <p>
                            Executes the motion of the robot based on the state it is in (i.e. idle, longitudinal motion, lateral motion). Can navigate to a precise location using its PI controller and the Quadrature Encoders.
                            </p>
                        </li>
                        <li>Arduino Motor Shield
                            <p>
                        Attached to the Mega, it enables motor control by the Arduino.
                            </p>
                        </li>
                        <li>VL53L0X ToF Laser Range Finder
                            <p>
                        Can detect that there is an object ahead within a certain range, and when it is within that range, it is able to inform the distance between itself and the object. It will let the robot know how much it has to move to arrive at the target weed.
                            </p>
                        </li>
                        <li>Quadrature Encoder
                            <p>
                            Sends a digital signal every time the wheel turns a select amount; the accumulated count of these signals can be used to calculate the distance the robot moved.
                            </p>
                        </li>
                    </ul>
                </p>

                <p style={{margin:"70px 70px 10px 70px"}}> <u> Documentation of Work </u> </p>
                <p style={{margin:"0px 100px 70px 100px"}}>
The program to run on the Arduino Mega 2560 was created using Mathworks's Simulink and Stateflow. The images below are what the model currently looks like. When running it on the Mega, 
this model gets deployed directly onto it and it is able to run independently.
</p>
<img src="./Model_Top.JPG" alt="Screenshot of Simulink Model" width="1300" height="1000"></img>
<p>
The above image is the top level of the model.
</p>
<img src="./Motor_Shield.JPG" alt="Screnshot of Motor Shield Model" width="1000" height="800"></img>
<p>
The above image is the model of the Arduino Motor Shield.
</p>
<img src="./Stateflow_Chart.JPG" alt="Screenshot of Stateflow Chart" width="1000" height="800"></img>
<p>
The above image is the model of the stateflow chart.
</p>
<img src="./Lateral_Top.JPG" alt="Screenshot of Lateral Top State" width="1000" height="800"></img>
<p>
The above image is the top level of the lateral state in the stateflow chart.
</p>
<img src="./Lateral_Bottom.JPG" alt="Screenshot of Lateral Inner" width="1300" height="800"></img>
<p>
The above image depicts the subsystem in the lateral state.
</p>
 <img src="./Pause.JPG" alt="Screenshot of Pause" width="1000" height="800"></img>
<p>
The above image depicts the Pause state.
</p>
 <img src="./Long_Top.JPG" alt="Screenshot of Long Top" width="1000" height="800"></img>
<p>
The above image depicts the top level of the longitudinal state.
</p>
 <img src="./Long_Bottom.JPG" alt="Screenshot of Lateral Inner" width="1300" height="800"></img>
<p>
The above image depicts the subsystem in the longitudinal state.
</p>
</div>
        );
}
}

class App extends React.Component {
    render(){
        return ( 
            <div className = "App">
                <Navigation />
                <Main />  
            </div>
        );
    }
}

class Navigation extends React.Component {
    render(){
        
        return (
             <Navbar bg="light" variant="light" sticky="top">
                
                <Nav className="mr-auto">
                    <Nav.Link  href = "/my-portfolio/">About Me</Nav.Link>
                    <Nav.Link href="/project">Projects</Nav.Link>
                </Nav>
             </Navbar>
         );
    }
}

class Main extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path='/my-portfolio/' component={AboutMe}></Route>
                <Route exact path='/my-portfolio/project' component={Project}></Route>
            </Switch>
        );
                }
}

export default App;
