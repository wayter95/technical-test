"use client";

import { Input } from "@/components/input";
import styles from "./styles.module.css";
import { Button } from "@/components/button";

const SignUpForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form action="signup">
          <Input label="Nome completo" />
          <Input label="E-mail" />
          <Input label="Telefone" />
          <Input label="Senha" type="password" />
          <Button title="Criar minha conta" variant="primary" type="submit"/>
        </form>
      </div>
    </div>
  )
}

export { SignUpForm }