import { ref, update } from 'firebase/database';
import React from 'react'
import { db } from '../../utils/firebase';

function OrderItem({ orderItem }) {
    const markAsPrinted = () => {
        orderItem.is_printed = true;
        orderItem.is_paid = true;
        update(ref(db, `orders/${orderItem.shop_Id}/${orderItem.id}`), orderItem).then(() =>
            alert("Successfully marked as printed")
        ).catch((err) => {
            console.log(err)
        });
    }

    console.log(orderItem)
    return (
        <tr class={`bg-white border ${!orderItem.is_paid ? 'text-red-600' : ''}`}>
            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                {orderItem.name + " " + orderItem.contactNo}
            </th>
            <td class="px-6 py-4">
                {orderItem.type}
            </td>
            <td class="px-6 py-4">
                {orderItem.choice}
            </td>
            <td class="px-6 py-4">
                {orderItem.print_page_range} pages
            </td>
            <td class="px-6 py-4">
                {orderItem.price} Rs.
            </td>

            <td class="px-6 py-4">
                <a href={orderItem.file} target="_blank" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">File</a>
            </td>

            <td class="px-2 py-4">
                <button class={` px-2 py-1 font-medium text-white  rounded bg-green-500 hover:bg-red-500 focus:outline-none focus:ring ${orderItem.is_printed ? 'cursor-not-allowed bg-red-600' : ''}`}
                    disabled={orderItem.is_printed}
                    onClick={(e) => {
                        const sure = window.confirm("Are you sure you want to mark this order as printed?")
                        if (sure) {
                            markAsPrinted();
                            window.location.reload();
                        }

                    }}>{
                        orderItem.is_printed ? "Printed" : "Mark as printed"
                    }</button>
            </td>
        </tr>
    )
}

export default OrderItem
