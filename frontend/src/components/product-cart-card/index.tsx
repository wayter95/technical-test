"use client";
import { formatToBRL } from '@/utils/format-to-brl';
import styles from './styles.module.css';
import Image from 'next/image';
import { useState } from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import {GrFormSubtract} from "react-icons/gr";
import { removeFromCart, updateProductAmount } from '@/helpers/cart';

interface IProductCartCard {
  id: string;
  photoUrl: string;
  price: number;
  initialAmount: number;
  discountPercent: number;
  description: string;
  handleRemoveProduct: (id: string) => void;
  onAmountChange: (id: string, newAmount: number) => void;
}

const ProductCartCard = ({
  initialAmount,
  id,
  description,
  discountPercent,
  photoUrl,
  price,
  handleRemoveProduct,
  onAmountChange,
}: IProductCartCard) => {
  const [amount, setAmount] = useState(initialAmount);

  const handleIncrementAmount = () => {
    const newAmount = amount + 1;
    setAmount(newAmount);
    onAmountChange(id, newAmount);
    updateProductAmount(id, newAmount);
  }

  const handleDecrementAmount = () => {
    const newAmount = amount > 0 ? amount - 1 : 0;
    setAmount(newAmount);
    onAmountChange(id, newAmount);
    updateProductAmount(id, newAmount);
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
              <button className={styles.btnRemove} onClick={(e) => handleRemoveProduct(id)}>
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