"use client";

import { ProductCartCard } from '@/components/product-cart-card';
import styles from './styles.module.css';
import { Button } from '@/components/button';
import { useEffect, useState } from 'react';
import { IProductCartModel, getCart, removeFromCart } from '@/helpers/cart';
import { FiAlertTriangle } from "react-icons/fi";
import { formatToBRL } from '@/utils/format-to-brl';
import Link from 'next/link';

export default function Cart() {
  const [products, setProducts] = useState<IProductCartModel[]>([]);
  const [subTotal, setSubTotal] = useState(0);
  const [freight, setFreight] = useState(0);
  const [totalWithDiscount, setTotalWithDiscount] = useState(0);

  const calculateDiscountedPrice = (price: number, discountPercent: number) => {
    return price - (price / 100 * discountPercent);
  }

  useEffect(() => {
    setProducts(getCart());
  }, []);

  useEffect(() => {
    const result = products.reduce((accumulator, product) => accumulator + product.value * product.amount!, 0);
    const totalFreight = products.reduce((accumulator, product) => accumulator + product.freightValue * product.amount!, 0);
    const totalDiscounted = products.reduce((accumulator, product) => {
      const discountedPrice = calculateDiscountedPrice(product.value, product.discountPercentage);
      return accumulator + discountedPrice * product.amount!;
    }, 0);

    setSubTotal(result);
    setFreight(totalFreight);
    setTotalWithDiscount(totalDiscounted);
  }, [products])

  const handleRemoveProduct = (id: string) => {
    removeFromCart(id);

    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  }

  const handleAmountChange = (id: string, newAmount: number) => {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        return { ...product, amount: newAmount };
      }
      return product;
    });
    setProducts(updatedProducts);
  }

  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>
        <h2>MEU CARRINHO</h2>
      </div>
      <div className={styles.content}>
        {products.length ?
          <div className={styles.productList}>
            {
              products.map((product) => (
                <ProductCartCard
                  key={product.id}
                  id={product.id}
                  description={product.description}
                  photoUrl={product.photoUrl}
                  price={product.value}
                  initialAmount={product.amount ?? 0}
                  discountPercent={product.discountPercentage}
                  handleRemoveProduct={handleRemoveProduct}
                  onAmountChange={handleAmountChange}
                />
              ))
            }
          </div> :
          <div className={styles.alertContent}>
            <FiAlertTriangle />
            <span>Nenhum produto selecionado</span>
          </div>
        }
        <div className={styles.valueContent}>
          <ul>
            <li>
              <span>Sub total:</span>
              <strong>{formatToBRL(subTotal)}</strong>
            </li>
            <li>
              <span>Frete:</span>
              <p>{freight ? formatToBRL(freight) : "Grátis"}</p>
            </li>
            <li>
              <span>A vista:</span>
              <h3>{formatToBRL(totalWithDiscount - freight)}</h3>
            </li>
            <li>
              <h4 className={styles.divider}>ou <strong>6x de {formatToBRL(subTotal / 6)}</strong> sem juros</h4>
            </li>
          </ul>
          <Button title='Finalizar pedido' variant='primary' onClick={() => { }} />
          <Link className={styles.buyer} href="/">Continuar comprando</Link>
        </div>
      </div>
    </div>
  )
}