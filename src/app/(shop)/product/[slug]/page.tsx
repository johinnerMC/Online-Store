/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */
"use client";
import {
  ProductMobileSlideshow,
  ProductSlideshow,
  QuantitySelector,
  SizeSelector,
} from "@/components";
import { titleFont } from "@/config/fonts";
import useWindowDimensions from "@/hooks/useWindowDimensions";

import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default function ({ params }: Props) {
  const { width } = useWindowDimensions();

  console.log(width);
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-2">
      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2">
        {width < 768 ? (
          <ProductMobileSlideshow
            title={product.title}
            images={product.images}
          />
        ) : (
          <ProductSlideshow
            title={product.title}
            images={product.images}
          />
        )}
      </div>

      {/* Detalles */}
      <div className="px-5 col-span-1">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">{product.price}</p>

        {/* Selector de Tallas */}
        <SizeSelector
          selectedSize={product.sizes[1]}
          availableSize={product.sizes}
        />

        {/* Selector de cantidad */}
        <QuantitySelector quantity={1} />

        {/* Button */}
        <button className="btn-primary my-5">Agregar al carrito</button>

        {/* Descripcion */}
        <h3 className="font-bold text-sm">Descripcion</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
