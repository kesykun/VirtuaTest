import { AiOutlineLock } from "react-icons/ai";

const NavBar = () => {
    return (
        <nav className="Navbar">
            <div className="Navbar__container">
                <h1>Virtua</h1>
                <div>
                    <p>Course List</p>
                    <p>FAQ</p>
                    <p>Calendar</p>
                </div>
                <p>
                    <AiOutlineLock size={20} /> Login
                </p>
            </div>
        </nav>
    );
};

export default NavBar;