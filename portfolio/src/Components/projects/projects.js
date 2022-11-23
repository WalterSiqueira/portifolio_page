import React from 'react';
import noteApp from '../../Assets/images/noteApp.png';
import SimpleCalc from '../../Assets/images/SimpleCalc.png';
import FyloLanding from '../../Assets/images/FyloLanding.png';
import TipCalc from '../../Assets/images/TipCalc.png';
import ReactIcon from '../../Assets/images/react.png';
import SassIcon from '../../Assets/images/sass.png';
import JavascriptIcon from '../../Assets/images/java-script.png';
import CssIcon from '../../Assets/images/css.png';
import HtmlIcon from '../../Assets/images/html-5.png';
function ProjectSection({projectsId}) {
  return (
    <section ref={projectsId} className='projectsBlock'>
        <h2 className='projectsTitle'>Projects</h2>
        <div className='noteAppBlock'>
          <img className='noteImg'src={noteApp}/> 
          <h4 className='noteTitle'>To-do App</h4>
          <h5 className='noteDescription'>A to-do app to keep your notes that use CRUD operations</h5>
          <h3 className='noteSubtitle'>Technologies</h3>
          <div className='noteButtonsBlock'>
            <button className='reactBtn'><img className='reactIcon'src={ReactIcon}/></button>
            <button className='sassBtn'><img className='sassIcon' src={SassIcon}/></button>
            <button className='javascriptBtn'><img className='javascriptIcon' src={JavascriptIcon}/></button>
            <button className='cssBtn'><img className='cssIcon' src={CssIcon}/></button> 
          </div>
          <a target='_blank' href='https://todo-walter.vercel.app/' className='noteLiveBtn'>Live Site</a>
          <a target='_blank' href='https://github.com/WalterSiqueira/To_do_app' className='noteGithubBtn'>Github</a>
        </div>
        <div className='calcBlock'>
          <img className='calcImg' src={SimpleCalc}/> 
          <h4 className='calcTitle'>calculator App</h4>
          <h5 className='calcDescription'>A simple calculator to do math operations</h5>
          <h3 className='calcSubtitle'>Technologies</h3>
          <div className='calcButtonsBlock'>
            <button className='htmlBtn'><img className='htmlIcon' src={HtmlIcon}/></button>
            <button className='sassBtn'><img className='sassIcon' src={SassIcon}/></button>
            <button className='javascriptBtn'><img className='javascriptIcon' src={JavascriptIcon}/></button>
            <button className='cssBtn'><img className='cssIcon' src={CssIcon}/></button> 
          </div>
          <a target='_blank' href='https://simple-calculator-self.vercel.app/' className='calcLiveBtn'>Live Site</a>
          <a target='_blank' href='https://github.com/WalterSiqueira/Calculator' className='calcGithubBtn'>Github</a>
        </div>
        <div className='fyloBlock'>
          <img className='fyloImg' src={FyloLanding}/> 
          <h4 className='fyloTitle'>Landing page</h4>
          <h5 className='fyloDescription'>A landing page for a fictious enterpraise called fylo</h5>
          <h3 className='fyloSubtitle'>Technologies</h3>
          <div className='fyloButtonsBlock'>
            <button className='reactBtn'><img className='reactIcon' src={ReactIcon}/></button>
            <button className='sassBtn'><img className='sassIcon' src={SassIcon}/></button>
            <button className='javascriptBtn'><img className='javascriptIcon' src={JavascriptIcon}/></button>
            <button className='cssBtn'><img className='cssIcon' src={CssIcon}/></button> 
          </div>
          <a target='_blank' href='https://fylo-landing-two.vercel.app/' className='fyloLiveBtn'>Live Site</a>
          <a target='_blank' href='https://github.com/WalterSiqueira/fylo-landing-page' className='fyloGithubBtn'>Github</a>
        </div>
        <div className='tipBlock'>
          <img className='tipImg' src={TipCalc}/> 
          <h4 className='tipTitle'>Tip calculator App</h4>
          <h5 className='tipDescription'>A restaurant's tip calculator</h5>
          <h3 className='tipSubtitle'>Technologies</h3>
          <div className='tipButtonsBlock'>
            <button className='htmlBtn'><img className='htmlIcon' src={HtmlIcon}/></button>
            <button className='javascriptBtn'><img className='javascriptIcon' src={JavascriptIcon}/></button>
            <button className='cssBtn'><img className='cssIcon' src={CssIcon}/></button> 
          </div>
          <a target='_blank' href='https://tip-calculator-orcin.vercel.app/' className='tipLiveBtn'>Live Site</a>
          <a target='_blank' href='https://github.com/WalterSiqueira/tip_calculator' className='tipGithubBtn'>Github</a>
        </div>
    </section>
    
  )
}
export default ProjectSection;
