import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import logo from "/public/images/Size=Large.png"

export default function Header(){
  return(
    <header className={styles.header}>
      <h1>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="로고" width={120} height={40} />
        </Link>
      </h1>
    </header>
  );
}