'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const buttonStyle = {
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid black',
    padding: '0.5rem 1rem',
    marginRight: '1rem',
    cursor: 'pointer',
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Main Page!!!</h1>
      <p>You can switch pages with using buttons :D</p>

      <button onClick={() => router.push('/about')} style={buttonStyle}>
        About
      </button>
      <button onClick={() => router.push('/contact')} style={buttonStyle}>
        Contact
      </button>
    </main>
  );
}
