"use client";

import Image from "next/image"
import Link from "next/link"
import styles from './styles.module.css'

const Header = () => {

  return (
    <header>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/images/logo.svg" width={100} height={80} alt="Technical Test" />
          </Link>
        </div>

        <div className={styles.buttonsContent}>
          <button type="button" className={styles.btnHeader}>
            <Image src="/icons/outline-box.svg" width={20} height={20} alt="Technical Test" />
            <span>Carrinho</span>
          </button>
          <button type="button" className={styles.btnHeader}>
            <Image src="/icons/outline-user.svg" width={20} height={20} alt="Technical Test" />
            <span>Entrar</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export { Header }