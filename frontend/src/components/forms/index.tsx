"use client"
import { useState } from "react"
import { SignUpForm } from "./signup-form"
import { SignInForm } from "./signin-form"
import styles from "./styles.module.css";

interface IFormProps {
  closeModal: () => void;
}

const Forms = ({ closeModal }: IFormProps) => {
  const [showModal, setShowModal] = useState('authentication')

  const handleChangeModalToRegister = () => {
    setShowModal("register");
  }

  const handleChangeModalToAuthenticaiton = () => {
    setShowModal("authentication");
  }

  return (
    <div className={styles.container}>
      {
        showModal === 'register' &&
        <>
          <SignUpForm closeModal={closeModal} />
          <span>Já tenho conta! <strong onClick={() => handleChangeModalToAuthenticaiton()}>acessar</strong></span>
        </>
      }
      {
        showModal === 'authentication' &&
        <>
          <SignInForm closeModal={closeModal}/>
          <span>Ainda não tenho conta! <strong onClick={() => handleChangeModalToRegister()}>cadastrar</strong></span>
        </>
      }
    </div>
  )
}

export { Forms }