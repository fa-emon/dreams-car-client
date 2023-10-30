import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router-dom";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const isUserLoggedIn = !!user;

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch((error) => {
                console.log('error', error)
            })
    }

    const navOptions = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/addProduct'}>Add Product</Link></li>
        <li><Link to={'/myCart'}>My Cart</Link></li>
        {
            user ?
                <>
                    <li><button onClick={handleLogOut} className="btn btn-ghost btn-sm">LogOut</button></li>
                </> :
                <>
                    <li><Link to={'/login'}>Log In</Link></li>
                    <li><Link to={'/register'}>Sign Up</Link></li>
                </>
        }
    </>

    return (
        <div className="navbar rounded bg-gradient-to-r from-violet-300 to-fuchsia-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 heading-font">
                        {navOptions}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl heading-font">Dreams Car</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 heading-font">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {isUserLoggedIn &&
                    <>
                        <h2 className="all-font me-5">{user?.displayName}</h2>
                        <img
                            src={user?.photoURL} // Replace with the actual image path
                            alt="User Profile"
                            className="w-10 h-10 rounded-full mr-2"
                        />
                    </>
                }
            </div>

        </div>

    );
};

export default NavBar;