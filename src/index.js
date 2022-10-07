/**
Fungsi hooks bersifat reusable. Ketika Anda memiliki logika nonvisual didalam sebuah komponen yang ingin diterapkan di banyak komponen, ekstrak logika tersebut menjadi sebuah fungsi hooks,
inilah yang disebut custom hooks.

Dalam membuat fungsi hooks, React menetapkan aturan bahwa nama dari fungsi hooks harus diawali
dengan kata “use”, contohnya useInput() atau useUser().

// ini fungsi hooks
function useInput() {}
 
// ini fungsi hooks
function useUser() {}
 
// ini bukan fungsi hooks
function createInput() {}
 
// ini bukan fungsi hooks
function getUser() {}

Alasan dari konvensi ini adalah untuk memberitahu React bahwa fungsi tersebut merupakan hooks
karena fungsi hooks perlu diperlakukan sesuai aturan yang ditetapkan oleh React.
*/

import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

// Custom Hooks
function useInput(defaultValue) {
  const [value, setValue] = React.useState(defaultValue);
  const handleValueChange = (event) => setValue(event.target.value);

  return [value, handleValueChange];
}

function RegisterForm() {
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');
  const [confirmPassword, handleConfirmPasswordChange] = useInput('');

  return (
    <form>
      <input value={email} type="email" onChange={handleEmailChange} />
      <input value={password} type="password" onChange={handlePasswordChange} />
      <input value={confirmPassword} type="password" onChange={handleConfirmPasswordChange} />
    </form>
  );
}

function LoginForm() {
  const [email, handleEmailChange] = useInput('');
  const [password, handlePasswordChange] = useInput('');

  return (
    <form>
      <input value={email} onChange={handleEmailChange} />
      <input value={password} type="password" onChange={handlePasswordChange} />
    </form>
  );
}

function App() {
  return (
    <>
      <h1>Custom Hooks Sample</h1>
      <h2>Register Form</h2>
      <RegisterForm />
      <h2>Login Form</h2>
      <LoginForm />
    </>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);

/* 
Catatan: Di dalam fungsi custom hooks, kita dapat memanggil fungsi hooks lain seperti useState(), useEffect(), atau bahkan custom hooks lainnya.
*/