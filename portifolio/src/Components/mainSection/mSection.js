import React, {useRef} from 'react';
import main from '../../Assets/css-styles/main.css';
import profile from '../../Assets/images/profile.jpg';
import calculator from '../../Assets/images/Calculator.png';
import fylo from '../../Assets/images/FyloLanding.png';
import snap from '../../Assets/images/Snap.png';
import card from '../../Assets/images/CardComponent.png';
import twitter from '../../Assets/images/twitter.png';
import linkedin from '../../Assets/images/linkedin.png';
import email from '../../Assets/images/o-email.png';
import github from '../../Assets/images/github.png';
export function Mother() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    let status = "about";  

    function ShowHide() { 
        if (status === "about") {
            ref1.current.style.display = "grid";
            ref2.current.style.display = "none";
            ref3.current.style.display = "none";
            ref4.current.style.display = "none"; 
            console.log("rendered");
        } else if (status === "projects") {
            ref1.current.style.display = "none";
            ref2.current.style.display = "grid";
            ref3.current.style.display = "none";
            ref4.current.style.display = "none"; 
            alert("click on the projects picture to go to the live page");
        } else if (status === "tech") {
            ref1.current.style.display = "none";
            ref2.current.style.display = "none";
            ref3.current.style.display = "grid";
            ref4.current.style.display = "none"; 
        } else if (status === "contacts") {
            ref1.current.style.display = "none";
            ref2.current.style.display = "none";
            ref3.current.style.display = "none";
            ref4.current.style.display = "grid"; 
        }
    }
    const about = () => {
        status = "about";
        console.log("activated - about");
        ShowHide();
    }
    const projects = () => {
        status = "projects";
        console.log("activated - projects");
        ShowHide();
    }
    const tech = () => {
        status = "tech";
        console.log("activated - tech");
        ShowHide();
    }
    const contacts = () => {
        status = "contacts";
        console.log("activated - contacts");
        ShowHide();
    }
    return (
        <main className="mainDiv">
            <nav className="menublock">
                <button className="contactsbtn" onClick={contacts}>Contacts</button>
                <button className="projectsbtn" onClick={projects}>Projects</button>
                <button className="aboutbtn" onClick={about}>About Me</button>
                <button className="techbtn" onClick={tech}>Technology</button>
            </nav>
            <section className="Presentation">
                <img src={profile} className="profile_pic" alt=""/> 
                <h2 className="name">Walter Siqueira</h2>
                <h3 className="job">Programmer</h3>
            </section>
            <section className="about" ref={ref1}>
                <h1 className="title_about">About me</h1>
                <p className="description">Hello i'm Walter Siqueira a self-taugh programmer, born in Bazil,
                i've learned programming all by myself at home throught the internet.
                You can find my previous works on the Projects button bellow</p>
                <p className="welcome"> hope you like my work and welcome to my website!!.</p>
            </section>
            <section className="projects" ref={ref2}>
                <a className="card" href="https://card-feature-opal.vercel.app" target="_blank" ><img src={card} className="card" alt="card-component project"/></a>    
                <a className="calc" href="https://simple-calculator-self.vercel.app" target="_blank"><img src={calculator} className="calc" alt="interactive calculator"/></a>
                <a className="fylo" href="https://fylo-landing-two.vercel.app/" target="_blank"><img src={fylo} className="fylo" alt="corporative introduction page"/></a>
                <a className="snap" href="https://intro-section-page.vercel.app/" target="_blank"><img src={snap} className="snap" alt="corporative introduction homepage"/></a>
            </section>
            <section className="technology" ref={ref3}>
                <h1 className="title_tech">Technology</h1>
                <ul className="stylelist">
                    <li>Css</li>
                    <li>Scss/Sass</li>
                    <li>Styled Components</li>
                </ul>
                <ul className="logiclist">
                    <li>Javascript</li>
                    <li>React.js</li>
                </ul>
            </section>
            <section className="contact" ref={ref4}>
                <img alt="" src={linkedin} className="iconL" width="50px" height="50px"/>
                <h2 className="linkedin"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/walter-siqueira">my linkedin</a></h2>
                <img alt="" src={twitter} className="iconT" width="50px" height="50px"/>
                <h2 className="twitter"><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Walter__BS">my twitter</a></h2>
                <img alt="" src={email} className="iconE" width="50px" height="50px"/>
                <h2 className="email"><a href="mailto:walterbarbozasiqueira@gmail.com" target="_blank">my email</a></h2>
                <img alt="" src={github} className="iconG" width="50px" height="50px"/>
                <h2 className="github"><a target="_blank" rel="noopener noreferrer" href="https://github.com/WalterSiqueira">my github</a></h2>
                
            </section>
        </main>
    )
}
