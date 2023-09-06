"use client"
import { useState } from "react"
import { SignUpForm } from "./signup-form"
import { SignInForm } from "./signin-form"
import styles from "./styles.module.css";

const Forms = () => {
  const [showModal, setShowModal] = useState('register')

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
          <SignUpForm />
          <span>Já tenho conta! <strong onClick={() => handleChangeModalToAuthenticaiton()}>acessar</strong></span>
        </>
      }
      {
        showModal === 'authentication' &&
        <>
          <SignInForm />
          <span>Ainda não tenho conta! <strong onClick={() => handleChangeModalToRegister()}>cadastrar</strong></span>
        </>
      }
    </div>
  )
}

export { Forms }