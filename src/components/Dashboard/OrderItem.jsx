import React from 'react'

function OrderItem({ orderItem }) {
    return (
        <tr class={`bg-white border ${!orderItem.isPaid ? 'text-red-600' : ''}`}>
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
                <button class="px-2 py-1 font-medium text-white bg-red-600 rounded hover:bg-red-500">Printed</button>
            </td>
        </tr>
    )
}

export default OrderItem
