'use client'

import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
    quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
    
    const [count, setCount] = useState( quantity );

    const onQuantityChanged = (value: number) => {

        if ( count + value < 1 ) return
        setCount( count + value);
    }
  return (
    <div className="flex"> 
        <button onClick={() => onQuantityChanged( -1 )} title="decrease" type="button">
            <IoRemoveCircleOutline/>
        </button>
        <span className="w-20 mx-3 px-5 bg-gray-100 text-center rounded">{count}</span>
        <button onClick={() => onQuantityChanged( 1 )} title="increase" type="button">
            <IoAddCircleOutline/>
        </button>
    </div>
  )
}
