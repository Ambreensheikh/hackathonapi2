import { client } from "@/sanity/lib/client"
import { allProducts } from "@/sanity/lib/queries"
import type { Product } from "../../types/product"

export async function getProducts(): Promise<Product[]> {
  return await client.fetch(allProducts)
}
