import {Link} from "react-router-dom";

function About() {
    return<>
        <h1>About Page</h1>
        <Link to = "/">Go to Home Page</Link>
        <li><Link to = "/User/Helly" >Helly</Link></li>
        <li><Link to = "/User/Kenny" >Kenny</Link></li>
    </>
}

export default About;