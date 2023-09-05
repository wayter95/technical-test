"use client";

import Image from "next/image";
import styles from "../styles/home.module.css";
import { ProductCard } from "@/components/product-card";
import { useEffect, useState } from "react";
import { api } from "@/services/api";


export default function Home() {
  const [products, setProducts] = useState<IProductModel[]>([])

  useEffect(() => {
    api.get("/product").then((response) => {
      setProducts(response.data.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image src="/images/banner.svg" width={1920} height={400} layout="responsive" alt="Technical Test" />
      </div>

      <div className={styles.content}>
        {
          products.length ? 
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              photoUrl={product.photoUrl}
              price={product.value}
            />
          ))
          : 
          <span className={styles.alert}>Nenhum produto encontrado</span>
        }
      </div>
    </div>
  )
}
