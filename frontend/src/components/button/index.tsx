import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  title: string;
  loading?: boolean;
}

const Button = ({ title, variant, loading, ...rest }: IButtonProps) => {
  return (
    <button className={`${styles.container} ${styles[variant]}`} {...rest}>
      {loading ? "Carregando" : title}
    </button>
  )
}

export { Button }
