// src/components/Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Image from '../Image';
import logu from '/src/assets/logu.png';
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaUser, FaCartArrowDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '/src/slices/cartSlice'; 
import { increment, decrement } from '../../slices/addToCartSlice';

const Header = () => {
  let [showCart, setShowCart] = useState(false);
  let data = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const categoryRef = useRef(null);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close category dropdown
      if (show && categoryRef.current && !categoryRef.current.contains(event.target)) {
        setShow(false);
      }
      // Close cart overlay
      if (showCart && cartRef.current && !cartRef.current.contains(event.target) && !event.target.closest('.cart-icon')) {
        setShowCart(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [show, showCart]);

  return (
    <>
      <div className='py-9'>
        <Container>
          <Flex className='flex gap-x-80'>
            <div>
              <Link to={'/'}>
                <Image imgSrc={logu} />
              </Link>
            </div>
            <div>
              <ul className='flex gap-x-5 text-[16px] font-bold text-noyan'>
                <Link to={'/'}><li className='hover:text-black'>Home</li></Link>
                <Link to={'shop'}><li className='hover:text-black'>Shop</li></Link>
                <Link to={'about'}><li className='hover:text-black'>About</li></Link>
                <Link to={'contact'}><li className='hover:text-black'>Contact</li></Link>
                <Link to={'journal'}><li className='hover:text-black'>Journal</li></Link>
              </ul>
            </div>
          </Flex>
        </Container>
      </div>

      <div className='py-5 bg-[#D8D8D8] relative'>
        <Container>
          <Flex className='justify-between'>
            <div className='relative' ref={categoryRef}>
              <div
                className='flex items-center gap-x-2 text-[#262626] cursor-pointer'
                onClick={() => setShow((prev) => !prev)}
              >
                <FaBarsStaggered />
                <h3>Shop by Category</h3>
              </div>
              {show && (
                <ul className='gap-x-5 text-[16px] font-bold text-noyan absolute left-15 top-15 bg-amber-50 rounded-2xl p-3 z-50'>
                  <Link to={'/'}><li className='hover:text-black'>Beauty</li></Link>
                  <Link to={'shop'}><li className='hover:text-black'>Fragrances</li></Link>
                  <Link to={'about'}><li className='hover:text-black'>Furniture</li></Link>
                  <Link to={'contact'}><li className='hover:text-black'>Groceries</li></Link>
                  <Link to={'journal'}><li className='hover:text-black'>Beauty</li></Link>
                </ul>
              )}
            </div>

            <div className='relative'>
              <input
                className='bg-[#FFFFFF] p-[15px] w-[550px] border-none outline-none'
                type="text"
                placeholder='Search Products'
              />
              <CiSearch className='absolute right-3 top-1/2 -translate-y-1/2' />
            </div>

            <div className='flex gap-x-3 relative py-3 items-center'>
              <div className='flex gap-x-1'>
                <FaUser />
                <IoMdArrowDropdown />
              </div>
              <FaCartArrowDown className='cart-icon cursor-pointer' onClick={() => setShowCart(!showCart)} />
            </div>
          </Flex>
        </Container>
      </div>

      {showCart && (
        <div ref={cartRef} className="bg-[#000] py-10 w-[1000px] px-5 fixed top-0 right-0 z-[100] h-full overflow-y-auto">
          <ImCross className='text-white mb-6 cursor-pointer' onClick={() => setShowCart(false)} />
          <div className='flex text-white border-2 border-white p-5 px-3 font-bold items-center text-center'>
            <div className='w-[15%]'>Title</div>
            <div className='w-[15%]'>Price</div>
            <div className='w-[20%]'>Image</div>
            <div className='w-[20%]'>Quantity</div>
            <div className='w-[20%]'>Subtotal</div>
            <div className='w-[10%]'></div>
          </div>
          {data.map((item, index) => {
            const subtotal = parseFloat(item.price) * parseFloat(item.quantity);
            return (
              <div key={index} className='flex text-white border-2 border-white p-3 items-center justify-between text-center px-6'>
                <div className='w-[15%] flex justify-center'>{item.title}</div>
                <div className='w-[15%] flex justify-center'>${item.price}</div>
                <div className='w-[20%] flex justify-center'>
                  <img src={item.img} alt={item.title} className='w-[100px] h-[50px] object-cover' />
                </div>
                <div className='w-[20%] flex justify-center items-center gap-x-2'>
                  <button
                    onClick={() => dispatch(decrement(item.title))}
                    className='bg-white text-black px-2 py-1 rounded'
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increment(item.title))}
                    className='bg-white text-black px-2 py-1 rounded'
                  >
                    +
                  </button>
                </div>
                <div className='w-[20%] flex justify-center'>${subtotal.toFixed(2)}</div>
                <div className='w-[10%] flex justify-center'>
                  <button
                    onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    className='text-white hover:text-red-500'
                  >
                    <ImCross />
                  </button>
                </div>
              </div>
            );
          })}
          <div className='flex justify-end mt-6'>
            <div className='text-white text-xl font-bold border-t-2 border-white pt-4'>
              Total: ${data.reduce((acc, item) => acc + parseFloat(item.price) * parseFloat(item.quantity), 0).toFixed(2)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;