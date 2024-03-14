/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */

import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface Props {
  params: {
    id: Category;
  }
}
export default function({ params }: Props) {

  const { id } = params;
  const products = seedProducts.filter( product => product.gender === id);

  const labels: Record<Category, string> = {
    'men' : "para hombres",
    'women': "para mujeres",
    'kid': "para niños",
    'unisex': "para todos"
  }

  // if( id === 'kid'){
  //   notFound();
  // } 

  return (
    <>
      <Title
        title={`Articulos ${labels[id]}`}
        subtitle="Productos"
        className="mb-2"
      />

      <ProductGrid
        products={products}
      />
    </>
  );
}   