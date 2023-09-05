import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  title: string;
  loading?: boolean;
}

const Button = ({ title, variant, loading }: IButtonProps) => {
  return (
    <button disabled={loading} className={`${styles.container} ${styles[variant]}`}>
      {loading ? "Carregando" : title}
    </button>
  )
}

export { Button }
