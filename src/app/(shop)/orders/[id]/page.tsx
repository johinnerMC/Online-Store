/* eslint-disable react/display-name */
/* eslint-disable import/no-anonymous-default-export */

import Link from "next/link";

import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}

export default function ({ params }: Props) {
  const { id } = params;

  // Todo: verificar
  // redirect(/)

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-700": true,
                }
              )}
            >
              <IoCardOutline size={30} />
              {/* <span className="mx-2">Pendiente de pago</span> */}
              <span className="mx-2">Pagada</span>
            </div>

            {/* Items */}
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  alt={product.title}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{product.title}</p>
                  <p>${product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout - Resumen de orden */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Dirección de entrega</h2>
            <div className="grid grid-cols-2 mb-10">
              <span className="mt-2">Dirección</span>
              <span className="mt-2 text-right font-bold">
                Carrera 7 # 8 - 04
              </span>

              <span className="mt-2">Ciudad</span>
              <span className="mt-2 text-right font-bold">Tamalameque</span>

              <span className="mt-2">País</span>
              <span className="mt-2 text-right">Colombia</span>

              <span className="mt-2">Código postal</span>
              <span className="mt-2 text-right">204020</span>

              <span className="mt-2">Quien Resibe</span>
              <span className="mt-2 text-right">Johinner Mc</span>

              <span className="mt-2">Teléfono</span>
              <span className="mt-2 text-right">+57 302 2681257</span>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2">Resumen de orden</h2>

            <div className="grid grid-cols-2">
              <span className="mt-2">No. Productos</span>
              <span className="mt-2 text-right">3 articulos</span>

              <span className="mt-2">Subtotal</span>
              <span className="mt-2 text-right">$ 100</span>

              <span className="mt-2">Iva (16%)</span>
              <span className="mt-2 text-right">$ 24</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="text-right text-2xl mt-5">$ 100</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <div
                className={clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  {
                    "bg-red-500": false,
                    "bg-green-700": true,
                  }
                )}
              >
                <IoCardOutline size={30} />
                {/* <span className="mx-2">Pendiente de pago</span> */}
                <span className="mx-2">Pagada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
