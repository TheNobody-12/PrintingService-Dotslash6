import React, { useEffect, useState } from 'react'
import { getDatabase, ref, child, get } from "firebase/database";
import OrderItem from './OrderItem';

function Orders({ shopId }) {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        loadOrders();
    }, [])


    const loadOrders = async () => {
        const dbRef = ref(getDatabase());

        get(child(dbRef, `orders/${shopId}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = Object.values(snapshot.val());
                    console.log(data);
                    setOrders(data);
                    setLoading(false);
                } else {
                    console.log("No data available");
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <div className='flex justify-center w-full'>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Contact
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Print type
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Page Choice
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Pages
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                File
                            </th>
                            <th scope="col" class="px-6 py-3">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading == false ?
                                <>
                                    {
                                        orders.map((orderItem) => {
                                            return (
                                                <OrderItem orderItem={orderItem} />
                                            )
                                        })
                                    }
                                </> : <>
                                </>
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Orders
