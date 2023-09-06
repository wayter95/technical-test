"use client";
import { formatToBRL } from '@/utils/format-to-brl';
import styles from './styles.module.css';
import Image from 'next/image';
import { useState } from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import {GrFormSubtract} from "react-icons/gr";

interface IProductCartCard {
  photoUrl: string;
  price: number;
  discountPercent: number;
  description: string;
  handleRemove: () => void;
  handleIncrement: () => void;
}

const ProductCartCard = ({
  description,
  discountPercent,
  photoUrl,
  price,
  handleIncrement,
  handleRemove,
}: IProductCartCard) => {
  const [amount, setAmount] = useState(0);

  const handleIncrementAmount = () => {
    setAmount(amount + 1)
  }

  const handleDecrementAmount = () => {
    if(amount > 0) setAmount(amount - 1)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={photoUrl} alt={description} />

        <div className={styles.infoContent}>
          <h3>{description}</h3>

          <div className={styles.valueAndAmountContent}>
            <div className={styles.valueContent}>
              <h2>{formatToBRL(price - (price / 100 * discountPercent))}</h2>
              <p>ou <span>{formatToBRL(price)}</span> á prazo</p>
            </div>

            <div className={styles.amountContent}>
              <button className={styles.btnRemove} onClick={handleRemove}>
                <Image width={30} height={30} src="/icons/outline-trash.svg" alt='remove-icon' />
              </button>

              <div className={styles.amountButtons}>
                <button onClick={handleDecrementAmount}>
                  <GrFormSubtract/>
                </button>
                <span>{amount}</span>
                <button onClick={handleIncrementAmount}>
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProductCartCard }