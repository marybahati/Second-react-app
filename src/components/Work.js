import React from 'react'


class Work extends React.Component {
  render () {
    return (
        <section id="two" className="main special">
        <div className="container">
            <span className="image fit primary"><img src={"./images/pic02.jpg"} alt=""/></span>
            <div className="content">
                <header className="major">
                    <h2>What I do</h2>
                </header>
                <p>I create most of the websites using React js and Node js <br/>I create others using HTML CSS and JavaScript <br/>I also create others using Django </p>

                <ul className="icons-grid">
                    <li>
                        <span className="icon solid major fa-camera-retro"></span>
                        <h3><a className='atag'  href='https://github.com/marybahati?tab=repositories' target='blank'>GreensKiosk</a></h3>
                    </li>
                    <li>
                        <span className="icon solid major fa-pencil-alt"></span>
                        <h3><a className='atag'  href='https://github.com/marybahati?tab=repositories' target='blank'>BRCK Template</a></h3>
                    </li>
                    <li>
                        <span className="icon solid major fa-code"></span>
                        <h3><a className='atag' href='https://github.com/marybahati?tab=repositories' target='blank'>Noon's Cafe</a></h3>
                    </li>
                    <li>
                        <span className="icon solid major fa-coffee"></span>
                        <h3><a className='atag' href='https://github.com/marybahati?tab=repositories' target='blank'>FruitCake</a></h3>
                    </li>
                </ul>
            </div>
            <a href="#three" className="goto-next scrolly">Next</a>
        </div>
    </section>
    )
  }
}
export default Work;