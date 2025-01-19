import { formatPrice, generateAmountOptions } from '../utils';
import { removeItem, editItem } from "../features/cart/CartSlice";
import { useDispatch } from 'react-redux';
const CartItem = ({ cartItem }) => {
  const { cartID, title, price, image, productColor, company, amount } =
    cartItem
  return (
    <article key={cartID} className="mb-12 flex flex-col gap-y-4
    sm:flex-row flex-wrap border-b pb-6 border-base-300 last:border-bottom-0">
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover' />
      {/* INFO */}
      <div className='sm:ml-16 sm:w-48'>
        {/* TITLE */}
        <h3 className='capitalize font-medium'>{title}</h3>
        {/* COPMANY */}
        <h4 className='mt-2 capitalize text-sm text-neutral-content'>{company}</h4>
      {/* COLOR */}
        <p className='mt-4 text-sm capitalize flex items-center gap-x-2'>
          color:<span className='badge badge-sm' style={{backgroundColor:productColor}}></span></p>
      </div>
      <div className='sm:ml-12'>
        {/* AMOUNT */}
        <div className="form-control max-w-xs">
          <label htmlFor='amount'>Amount</label>
          <select
            name='amount'
            id='amount'
            className='mt-2 select select-base select-bordered select-xs'>
            {generateAmountOptions(amount + 5)}
            </select>
        </div>
        {/* REMOVE */}
        <button className='mt-2 link link-primary link-hover text-sm'>remove</button>
      </div>
      
      {/* PRICE */}
      <p className='font-medium sm:ml-auto'>{formatPrice(price)}</p>
    </article>
  )
}

export default CartItem