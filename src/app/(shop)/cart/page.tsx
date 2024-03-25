import Link from "next/link";
import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";

//TODO: QUKIS
const productsInCart = [
  initialData.products[0],
  initialData.products[2],
  initialData.products[0],
  initialData.products[2]
]


export default function cartPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Shopping List */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar mas items</span>
            <Link href='/' className="underline mb-5">
                Seguir comprando
            </Link>

            {
              productsInCart.map( product => (
                <div key={ product.slug } className="flex mb-4">
                  <Image 
                    src={`/products/${ product.images[0] }`}
                    height={100}
                    width={100}
                    alt={ product.title }  
                    className="mr-5 rounded"
                  />

                  <div>
                    <p>{ product.title }</p>
                    <p className="mt-1">${ product.price }</p>
                    <div className="flex items-center mt-2">
                      <QuantitySelector quantity={3}/> 
                      <button className="underline ml-5 content-center">Quitar</button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          {/* Total Shopping */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Resumen del pedido</h2>

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

            <div className="mt-3 w-full mb-2">
              <Link 
                className="flex btn-primary justify-center" 
                href="/checkout/address">
                  Caja
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
