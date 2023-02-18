import React, { useState } from 'react'
import { set, ref } from "firebase/database";
import { storage, db } from "../../utils/firebase";

export default function AddShop() {
    const [shop, setShop] = useState({
        name: '',
        address: '',
        Id: '',
        img: '',
        phoneNo: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        var shop_id = "id" + Math.random().toString(16).slice(2);
        shop.Id = shop_id;
        set(ref(db, `shops/${shop_id}`), shop).then(() =>
            alert("Your shop has been added successfully")
        ).catch((err) => {
            console.log(err)
        });
    }

    return (
        <div>
            <section className="m-4">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div
                                className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10  sm:px-12 md:px-[60px]"
                            >
                                <form method='post' onSubmit={(e) => handleSubmit(e)}>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            placeholder="Shop Name"
                                            required
                                            className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                            onChange={(e) => setShop({
                                                ...shop, name: e.target.value
                                            })}
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="email"
                                            placeholder="Your Email (You will get credentials on this email)"
                                            required
                                            className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                            onChange={(e) => setShop({
                                                ...shop, email: e.target.value
                                            })}
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            placeholder="Shop Address"
                                            required
                                            className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                            onChange={(e) => setShop({
                                                ...shop, address: e.target.value
                                            })}
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            required
                                            className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                            onChange={(e) => setShop({
                                                ...shop, phoneNo: e.target.value
                                            })}
                                        />
                                    </div>

                                    <div className="mb-10">
                                        <button type='submit' className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            Add
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}
