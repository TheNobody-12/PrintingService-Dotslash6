import React from 'react'
import { Link } from 'react-router-dom'

function Card({ shop }) {
  return (
    <div class="w-full px-4 md:w-1/2 xl:w-1/4 custom_card m-3">
      <div class="mb-10 overflow-hidden rounded-lg bg-white flex justify-center flex-col">
        <img
          src={shop.img}
          alt="image"
          class="w-full h-64 object-cover object-center"
        />
        <div class="text-center sm:p-9 xl:p-9">
          <h3>
            <a
              href="javascript:void(0)"
              class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {shop.name}
            </a>
          </h3>
          <p class="text-body-color mb-7 text-base leading-relaxed">
            {shop.address}
          </p>
          <p class="text-body-color mb-7 text-base leading-relaxed">
            {shop.phoneNo}
          </p>
          <Link
            to={`/shop/${shop.Id}`}
            class="text-body-color hover:border-primary hover:bg-blue-600 hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white cursor-pointer"
          >
            Print Your files
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Card
