import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Edit() {
  const [edit, setEdit] = useState([]);
  const params = useParams();

  async function getEdit(id) {
    const result = await axios.get(`http://localhost:3000/products/edit/${id}`);

    setEdit(result.data);
  }

  useEffect(() => {
    getEdit(params.id);
  }, [params.id]);

  return (
    <>
      <div>ini adalah halaman edit {params.id}</div>
      {edit.length == 0 ? (
        <p>data kosong</p>
      ) : (
        <>
          <p>nama: {edit.data[0].name}</p>
          <p>price: {edit.data[0].price}</p>
        </>
      )}
    </>
  );
}
