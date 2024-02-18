import { Link } from "react-router-dom"
import { useAppContext } from "../contexts/AppContext"
import SignOutButton from "./SignOutButton";


const Header = () => {
    const { isLoggedIn } = useAppContext();
    return (
        <div className="bg-blue-900 py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-4xl text-white font-bold tracking-tight">
                    <Link to='/'>Bookings.com</Link>
                </span>
                <span className="flex space-x-2">
                    {
                        isLoggedIn ? <>
                            <Link to='/my-bookings' className="flex rounded-lg items-center text-white px-3 font-bold hover:bg-blue-400">My Bookings</Link>
                            <Link className="flex items-center rounded-lg text-white px-3 font-bold hover:bg-blue-400" to='/my-hotels'>My Hotels</Link>
                            <SignOutButton />
                        </>
                            :
                            <Link to='/sign-in' className="flex bg-white rounded-lg items-center text-blue-600 p-2 font-bold hover:bg-gray-100 hover:text-blue-950">Sign In</Link>
                    }
                </span>
            </div>
        </div>
    )
}

export default Header