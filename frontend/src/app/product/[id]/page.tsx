"use client";

import { api } from "@/services/api";
import { useEffect, useState } from "react";
import styles from './styles.module.css';
import Image from "next/image";
import { formatToBRL } from "@/utils/format-to-brl";
import { Button } from "@/components/button";

export default function Product({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<IProductModel>()
  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    api.get(`/product/${params.id}`).then((response) => {
      setProduct(response.data.data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  const photoList = [
    product?.photoUrl,
    product?.photoUrl,
    product?.photoUrl,
    product?.photoUrl,
  ]

  return (
    <div className={styles.container}>
      {
        product &&
        <div className={styles.content}>
          <div className={styles.imagesContent}>
            <div className={styles.imgList}>
              <ul>
                {
                  photoList.map((photo, index) => (
                    <li key={index} onClick={() => setMainImage(photo!)}>
                      <img src={photo!} width={100} height={100} alt={product.name} />
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className={styles.imgView}>
              <img src={mainImage || product.photoUrl} width={600} height={600} alt={product.name} />
            </div>
          </div>

          <div className={styles.infoContent}>
            <h1>{product.description}</h1>
            <div className={styles.priceInfo}>
              <div className={styles.payment}>
                <Image width={30} height={30} src="/icons/outline-pix.svg" alt="pix" />
                <p>De R$ 8.999,00</p>
                <h2>{formatToBRL(product.value - (product.value / 100 * product.discountPercentage))}</h2>
                <p>no pix <span>{product.discountPercentage}%</span> de desconto</p>
              </div>
              <div className={styles.payment}>
                <Image width={30} height={30} src="/icons/outline-card.svg" alt="pix" />
                <p>Ou então:</p>
                <h2>{formatToBRL(product.value)}</h2>
                <p>em <span>06x</span> sem juros</p>
              </div>
            </div>
            <Button title="Adicionar ao carrinho" variant="primary" />
          </div>
        </div>
      }
    </div>
  )
}

