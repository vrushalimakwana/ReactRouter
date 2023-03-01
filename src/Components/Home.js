import {Link, useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const navToPage = (url)=> {
        navigate(url)
    }

    return (
        <div>
            <h1>Home Page</h1>
            <Link to = "/about">Go to About Page</Link>
            <br /> <br/>
            <button onClick={()=> navToPage('/about')}>Go to About Page</button>
            <br /> <br/>
            <button onClick={()=> navToPage('/filter')}>Go to Filter Page</button>
        </div>
    )
}
export default Home;