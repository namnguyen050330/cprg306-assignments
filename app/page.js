import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li>
        <Link href="/week-2">Week 2 Page</Link>
        </li>
        <li>
        <Link href="/week-3">Week 3 Page</Link>
        </li>
      </ul>
    </main>
  );
}
