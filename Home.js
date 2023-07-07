import { useState } from "react";
const Home = () => {
    const [Age,setAge] = useState(23);
    const changeAge = () => {
        setAge(Age+1);
    }
    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>
                I am yashar moosapour and I <b>{Age}</b> years old
            </p>
            <button onClick={changeAge}>click me</button>
        </div>    
    );
}
 
export default Home;