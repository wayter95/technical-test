"use client";

import { Input } from "@/components/input";
import styles from "./styles.module.css";
import { Button } from "@/components/button";
import { FormEvent, useState } from "react";
import { useAuth } from "@/hooks/auth-hook";
interface IFormProps {
  closeModal: () => void;
}

const SignUpForm = ({ closeModal }: IFormProps) => {
  const { signUp } = useAuth();

  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      fullName,
      email,
      phone,
      password
    }

    const result = await signUp(data)

    if (result) {
      handleCleanForm()
      closeModal();
    }
  }

  const handleCleanForm = () => {
    setFullName("")
    setEmail("")
    setPhone("")
    setPassword("")
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form action="signup" onSubmit={handleSignUp}>
          <Input
            label="Nome completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <Input
            label="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Telefone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <Input
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Criar minha conta" variant="primary" type="submit" />
        </form>
      </div>
    </div>
  )
}

export { SignUpForm }