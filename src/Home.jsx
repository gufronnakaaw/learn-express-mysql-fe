import Login from './Login';
import Cookies from 'js-cookie';

export default function Home() {
  // ambil cookie
  const nama = Cookies.get('nama');
  const email = Cookies.get('email');

  function handleLogout() {
    // hapus cookie
    Cookies.remove('nama');
    Cookies.remove('email');
  }

  return (
    <>
      <div>
        <h1>Home</h1>
        <p>Profil</p>
        <p>nama: {nama ? nama : 'tidak ada'}</p>
        <p>email: {email ? email : 'tidak ada'}</p>
      </div>
      <Login />

      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
