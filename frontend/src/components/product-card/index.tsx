import { addToCart } from "@/helpers/cart";
import { Button } from "../button";
import styles from "./styles.module.css";
import { formatToBRL } from "@/utils/format-to-brl";
import { useRouter } from 'next/navigation'

interface IProductCardProps {
  product: IProductModel
}

const ProductCard = ({product }: IProductCardProps) => {
  const router = useRouter()

  return (
    <div className={styles.container} >
      <div className={styles.content}>
        <img alt={product.name} src={product.photoUrl} width={300} height={600} onClick={() => router.push(`/product/${product.id}`, { scroll: false })}/>
        <span>{product.name}</span>
        <h2>{formatToBRL(product.value)}</h2>
        <span>6x de {formatToBRL(product.value / 6)} s/ juros</span>
        <Button onClick={() => addToCart(product)} type="button" title="Adicionar ao carrinho" variant="secondary" />
      </div>
    </div>
  )
}

export { ProductCard }