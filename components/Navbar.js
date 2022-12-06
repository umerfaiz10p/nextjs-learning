import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Image src= "/10p-logo-1.png" width={40} height={40} alt=""/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href = "/about"><a>About</a></Link>
            <Link href = "/blogs"><a>Blogs</a></Link>
        </nav>
    );
}

export default Navbar;
<nav>

</nav>