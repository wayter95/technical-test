import { Button } from "../button";
import styles from "./styles.module.css";
import { formatToBRL } from "@/utils/format-to-brl";
import { useRouter } from 'next/navigation'

interface IProductCardProps {
  id: string;
  photoUrl: string;
  name: string;
  price: number;
}

const ProductCard = ({ id, name, photoUrl, price }: IProductCardProps) => {
  const router = useRouter()

  return (
    <div className={styles.container} >
      <div className={styles.content}>
        <img alt={name} src={photoUrl} width={300} height={600} onClick={() => router.push(`/product/${id}`, { scroll: false })}/>
        <span>{name}</span>
        <h2>{formatToBRL(price)}</h2>
        <span>6x de {formatToBRL(price / 6)} s/ juros</span>
        <Button type="button" title="Adicionar ao carrinho" variant="secondary" />
      </div>
    </div>
  )
}

export { ProductCard }