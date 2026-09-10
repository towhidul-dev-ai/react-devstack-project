import Logo from "../assets/logo-text.png"


const Nav = () => {
    return (
        <nav className="bg-[#FFFFFF] sticky top-0 z-50 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <img src={Logo} alt="" />
                <ul className="flex gap-4 items-center no-underline text-[14px] font-medium transition-colors duration-300">
                    <li className="text-pink-500"><a href="">Home</a ></li>
                    <li><a href="">Technologies</a ></li>
                    <li><a href="">Project</a ></li>
                    <li><a href="">About</a ></li>
                    <li><a href="">Contact</a ></li>
                </ul>


                <div className="flex gap-4 items-center" >
                    <a>Sign In</a >
                    <button className="btn btn-active btn-secondary">Sign In</button>
                </div>

            </div>
        </nav>
    );
};

export default Nav;