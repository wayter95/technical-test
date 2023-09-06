"use client";

import Image from "next/image"
import Link from "next/link"
import styles from './styles.module.css'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Modal } from "../modal";
import { Forms } from "../forms";

const Header = () => {
  const route = useRouter();
  const [openModal, setOpenModal] = useState(false);

  return (
    <header>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/images/logo.svg" width={100} height={80} alt="Technical Test" />
          </Link>
        </div>

        <div className={styles.buttonsContent}>
          <button type="button" className={styles.btnHeader} onClick={() => route.push('/cart', { scroll: false })}>
            <Image src="/icons/outline-box.svg" width={20} height={20} alt="Technical Test" />
            <span>Carrinho</span>
          </button>
          <button type="button" className={styles.btnHeader} onClick={() => setOpenModal(true)}>
            <Image src="/icons/outline-user.svg" width={20} height={20} alt="Technical Test" />
            <span>Entrar</span>
          </button>
        </div>
      </div>
      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        iconPath="/icons/outline-user.svg"
        title="Entrar"
      >
        <Forms />
      </Modal>
    </header>
  )
}

export { Header }