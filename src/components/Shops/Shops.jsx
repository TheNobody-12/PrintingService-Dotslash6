import React, { useState, useEffect } from "react";
import Card from "../Card";

import { getDatabase, ref, child, get } from "firebase/database";
import Loader from "../Loader";

export default function Shops() {
    const [loading, setLoading] = useState(true);
    // const shops = [
    //     {
    //         id: '1234',
    //         name: 'PDPU Xerox Shop',
    //         address: "Ye mera address hai",
    //         img: ""
    //     },
    //     {
    //         id: '6458',
    //         name: 'PDPU Xerox Shop',
    //         address: "Ye mera address hai",
    //         img: ""
    //     },
    //     {
    //         id: '1234',
    //         name: 'PDPU Xerox Shop',
    //         address: "Ye mera address hai",
    //         img: ""
    //     },
    //     {
    //         id: '1234',
    //         name: 'PDPU Xerox Shop',
    //         address: "Ye mera address hai",
    //         img: ""
    //     }
    // ]

    const [shops, setShops] = useState([]);

    useEffect(() => {
        loadShops();
    }, []);

    const loadShops = async () => {
        const dbRef = ref(getDatabase());
        
        get(child(dbRef, `shops/`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = Object.values(snapshot.val());
                    console.log(data);
                    setShops(data);
                    setLoading(false);
                    console.log(shops);
                } else {
                    console.log("No data available");
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            {loading == false ? (
                <div id="shops" className="flex flex-wrap m-6">
                    {shops.map((shop) => (
                        <Card shop={shop} />
                    ))}
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
}
