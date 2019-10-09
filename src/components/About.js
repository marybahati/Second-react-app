import React from 'react';

class About extends React.Component {
  render () {
    return (
        <section id="one" className="main special">
        <div className="container">
            <span className="image fit primary"><img src="images/pic01.jpg" alt="" /></span>
            <div className="content">
                <header className="major">
                    <h2>Who I am</h2>
                </header>
                <p>Am a frontend developer who codes using Javascript to create a fresh feel in websites.I use React Js to create amazing websites</p>
                <p>I am also familiar with Node Js of which i use it to write code for my backend related work.</p>
                <p>Am also familiar with Pythton and i have interracted with Django.I created a school managemt system that allows students and teachers to register</p>
            </div>
            <a href="#two" className="goto-next scrolly">Next</a>
        </div>
    </section>
    )
  }
}
export default About;
