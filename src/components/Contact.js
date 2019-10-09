import React from 'react'

class Contact extends React.Component {
  render () {
    return (
        <section id="footer">
        <div className="container">
            <header className="major">
                <h2>Get in touch</h2>
            </header>
            <form method="post" action="#">
                <div className="row gtr-uniform">
                    <div className="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
                    <div className="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
                    <div className="col-12"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                    <div className="col-12">
                        <ul className="actions special">
                            <li><input type="submit" value="Send Message" className="primary" /></li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
        <footer>
            <ul className="icons">
                <li><a href="https://twitter.com/marybahati6" ><span className="label">Twitter</span></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100010375212485" ><span className="label">Facebook</span></a></li>
                <li><a href="https://www.instagram.com/marianvinaj/?hl=en" ><span className="label">Instagram</span></a></li>
                <li><a href="https://www.linkedin.com/in/marybahati/" ><span className="label">LinkedIn</span></a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; MaryBahati</li><li>Stack: <a href="http://html5up.net">React</a></li><li>Other Projects: <a href="https://github.com/marybahati/">Here</a></li>
            </ul>
        </footer>
    </section>
    )
  }
}
export default Contact;