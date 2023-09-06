"use client";

import { Input } from "@/components/input";
import styles from "./styles.module.css";
import { Button } from "@/components/button";

const SignInForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form action="signin">
          <Input label="E-mail" type="email" />
          <Input label="Senha" type="password" />
          <Button title="Entrar" variant="primary" type="submit" />
        </form>
      </div>
    </div>
  )
}

export { SignInForm }