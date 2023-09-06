"use client";

import { Input } from "@/components/input";
import styles from "./styles.module.css";
import { Button } from "@/components/button";
import { FormEvent, useState } from "react";
import { useAuth } from "@/hooks/auth-hook";

interface IFormProps {
  closeModal: () => void;
}

const SignInForm = ({ closeModal }: IFormProps) => {
  const { signIn } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      email,
      password
    }

    const result = await signIn(data)

    if (result) {
      handleCleanForm()
      closeModal();
    }
  }
  const handleCleanForm = () => {
    setEmail("");
    setPassword("");
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form action="signin" onSubmit={handleSignIn}>
          <Input
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Entrar" variant="primary" type="submit" />
        </form>
      </div>
    </div>
  )
}

export { SignInForm }