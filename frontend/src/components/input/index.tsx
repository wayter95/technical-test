"use client";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "./styles.module.css";
import { InputHTMLAttributes, useEffect, useState } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  type?: string
}

const Input = ({ label, type, ...rest }: IInputProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isType, setIstype] = useState('')

  function handlePasswordVisible() {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    if (isVisible) {
      setIstype('text')
    } else {
      setIstype('password')
    }
  }, [isVisible])

  return (
    <div className={styles.container}>
      <input
        type={type === 'password' ? isType : type}
        placeholder={label}
        {...rest}
      />
      {type === 'password' &&
        <button type="button" onClick={() => handlePasswordVisible()}>
          {isVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </button>
      }
    </div>
  )
}

export { Input }