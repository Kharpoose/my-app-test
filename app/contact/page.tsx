'use client';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();

  const buttonStyle = {
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid black',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Contact</h1>
      <p>Contact us lilbro xd.</p>

      <button onClick={() => router.push('/')} style={buttonStyle}>
        Back to Home
      </button>
    </main>
  );
}
