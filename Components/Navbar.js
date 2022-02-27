import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    console.log(router);

    return <nav>
        <Link href="/">
            <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
            <a className={router.pathname === "about" ? "active" : ""}>About</a>
        </Link>
        <style jsx>{`
        nav{
            background-color:tomato;

        }
        a{
            text-decoration:none;
        }
        .active{
            color:yellow;
        }
        `}</style>

        {/* className생각하지 않아도 되고 import 하지 않아도 됨 */}


    </nav >
}