"use client";

import Image from "next/image"
import Link from "next/link"
import styles from './styles.module.css'
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Modal } from "../modal";
import { Forms } from "../forms";
import { useAuth } from "@/hooks/auth-hook";
import { toast } from "react-toastify";

const Header = () => {
  const {account, isAuthenticated, signOut} = useAuth();
  const route = useRouter();
  const [openModal, setOpenModal] = useState(false);

  const handleChangeAuth = () => {
    if(isAuthenticated) {
      signOut();
      toast.success("Você deslogou da sua conta!")
      return;
    }

    setOpenModal(true);
  }

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
          <button type="button" className={styles.btnHeader} onClick={() => handleChangeAuth()}>
            <Image src="/icons/outline-user.svg" width={20} height={20} alt="Technical Test" />
            <span>{account ? account.fullName : "Entrar"}</span>
          </button>
        </div>
      </div>
      <Modal
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        iconPath="/icons/outline-user.svg"
        title="Entrar"
      >
        <Forms closeModal={() => setOpenModal(false)} />
      </Modal>
    </header>
  )
}

export { Header }