import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    const result = await axios.post('http://localhost:3000/auth/login', {
      email,
      password,
    });

    if (result.data.success) {
      // set cookie
      Cookies.set('nama', result.data.user.nama, {
        expires: new Date(Date.now() + 1000 * 60 * 60), // 1 hour
        path: '/',
      });

      Cookies.set('email', result.data.user.email, {
        expires: new Date(Date.now() + 1000 * 60 * 60), // 1 hour
        path: '/',
      });

      window.location.href = '/homepage';
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="nama or email"
        onKeyUp={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onKeyUp={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>login</button>
    </div>
  );
}
