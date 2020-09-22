import React, { useEffect, useState } from 'react'
import CardProduct from '../components/CardProduct';

import Pagination from '../components/Pagination'

import './css/UserPage.css'

export default function UserPage({ user }) {
    const [page, setPage] = useState(1);
    const [dataPerPage] = useState(10);
    let [startPagination, setStartPagination] = useState(1);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${dataPerPage}`);
            const data = await res.json();
    
            setProducts(data);
        }
        fetchData()
    }, [page]);

    const handleStart = (startNum, index) => {
        const totalData = 500;
        const midIndex = 2;
        const midLast = totalData - 2;
        const minus = index - midIndex;

        if(index > midIndex)
        {
            if(startNum > midLast)
            {
                setStartPagination(midLast - 2)
            }
            else
            {
                setStartPagination(startPagination => startPagination + minus)
            }
        }
        else if(index < midIndex)
        {
            if(startNum < (midIndex + 1))
            {
                setStartPagination(1)    
            }
            else
            {
                setStartPagination(startPagination => startPagination + minus)
            }
        }

        setPage(startNum)
    }

    let paginations = [];

    for(let i = 0; i < 5; i++)
    {
        const num = startPagination++
        paginations.push(<div className={`order ${num === page ? 'active' : ''}`} onClick={() => handleStart(num, i)} key={num}>{num}</div>)
    }

    return (
        <>
            <h2>Selamat Datang { user.name }</h2>
            <h1 style={{ marginBottom: 50, textAlign: 'center' }}>Produk</h1>
            <div className="products">
                {products.map(product => (
                    <CardProduct image={product.thumbnailUrl} key={product.id} title={product.title} />
                ))}
            </div>
            
            <Pagination products={products}>
                {paginations}
            </Pagination>
        </>
    )
}
