import { Link } from "react-router-dom"


const Header = () => {
    return (
        <div className="bg-blue-900 py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-4xl text-white font-bold tracking-tight">
                    <Link to='/'>Bookings.com</Link>
                </span>
                <span className="flex space-x-2">
                    <Link to='/sign-in' className="flex bg-white rounded-lg items-center text-blue-600 px-3 font-bold hover:bg-gray-100 hover:text-blue-950">Sign In</Link>
                </span>
            </div>
        </div>
    )
}

export default Header