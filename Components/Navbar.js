import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const router = useRouter();
    console.log(router);

    return <nav>
        <Link href="/">
            {/* Link는 오직 href를 위한 것 */}
            {/* <a style={{ color: router.pathname === "/" ? "red" : "blue" }} className="hello">Home</a> */}
            {/* <a className={router.pathname === "/" ? styles.active : null}>Home</a> */}
            <a className={`${styles.link} ${router.pathname === "/" ? styles.active : null}`}>Home</a>
        </Link>
        <Link href="/about">
            {/* <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>About</a> */}
            {/* <a className={router.pathname === "/about" ? styles.active : null}>About</a> */}
            <a className={`${styles.link} ${router.pathname === "/about" ? styles.active : null}`}>About</a>

        </Link >
    </nav >
}