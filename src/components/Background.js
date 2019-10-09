import React from 'react';

class Background extends React.Component {
  render () {
    return (
        <section id="header">
        <header className="major">
            <h1>coding-journey</h1>
            <p>A little about my work in <a href="https://egghead.io/courses/the-beginner-s-guide-to-react" target='blank'>React</a> and Hobbies</p>
        </header>
        <div className="container">
            <ul className="actions special">
                <li><a href="#one" className="button primary scrolly">Begin</a></li>
            </ul>
        </div>
    </section>
    )
  }
}
export default Background;
