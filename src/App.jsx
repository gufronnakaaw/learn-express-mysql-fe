import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await axios.get('http://localhost:3000/products');

    // console.log(response.data);

    setProducts(response.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h1>LIST MAKANAN</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.length == 0 ? (
            <tr>
              <td colSpan={3}>Data kosong bang</td>
            </tr>
          ) : (
            products.data.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
}
