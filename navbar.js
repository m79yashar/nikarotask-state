const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>nikaro task</h1> 
            <div className="links">
                <a href="/">Home </a>
                <a href="/creat" style={{
                    color: "white",
                    backgroundColor:"#3561f1",
                    borderRadius:"8px"
                }}>new task</a>
            </div> 
        </nav>
     );
}
 
export default Navbar;