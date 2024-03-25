import Link from "next/link";
import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";

//TODO: QUKIS
const productsInCart = [initialData.products[0], initialData.products[2]];

export default function checkoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Shopping List */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar items</span>
            <Link href="/cart" className="underline mb-5">
              Editar carrito
            </Link>

            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-4">
                <Image
                  src={`/products/${product.images[0]}`}
                  height={100}
                  width={100}
                  alt={product.title}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{product.title}</p>
                  <p className="mt-1">${product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Total Shopping */}

          <div className="bg-white rounded-xl shadow-xl p-7">
            
              <h2 className="text-2xl mb-2">Direccion de entrega</h2>
              <div className="grid grid-cols-2 mb-10">
                <span className="mt-2">Dirección</span>
                <span className="mt-2 text-right font-bold">Carrera 7 # 8 - 04</span>

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
              
              <div className="w-full h-0.5 rounded bg-gray-200 mb-10"/>

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

            <div className="mt-3 w-full ">

              <span className="text-xs">
                Al hacer clic en Colocar orden, aceptas nuestros <a href="#" className="underline">Terminos y condiciones</a> y <a href="#" className="underline">politicas de privacidad</a>
              </span>
              <Link
                className="flex btn-primary justify-center"
                href="/orders/123"
              >
                Colocar orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
