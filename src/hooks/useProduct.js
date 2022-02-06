import { useEffect, useState } from 'react';


const useProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState('');

    useEffect(() => {
        fetch('https://safe-waters-12222.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(e => setErr(e.message))
            .finally(() => setLoading(false))
    }, [])

    return {
        loading,
        err,
        products
    }
};

export default useProduct;