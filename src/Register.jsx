import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [telpon, setTelpon] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  async function handleRegister() {
    if (passwordConfirm != password) {
      return alert('password konfirmasi anda tidak sama');
    }

    const result = await axios.post('http://localhost:3000/auth/register', {
      nama,
      email,
      telpon,
      password,
    });

    alert(result.data.message);
    window.location.href = '/';
  }

  return (
    <div>
      <h1>Register page</h1>
      <input
        type="text"
        placeholder="nama"
        onKeyUp={(e) => setNama(e.target.value)}
      />

      <input
        type="text"
        placeholder="email"
        onKeyUp={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="telpon"
        onKeyUp={(e) => setTelpon(e.target.value)}
      />

      <input
        type="password"
        placeholder="password"
        onKeyUp={(e) => setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="konfirmasi password"
        onKeyUp={(e) => setPasswordConfirm(e.target.value)}
      />

      <button onClick={handleRegister}>register</button>
    </div>
  );
}
