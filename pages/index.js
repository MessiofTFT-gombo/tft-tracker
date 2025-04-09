// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/getTFTData')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <div className="text-center mt-20">불러오는 중...</div>;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">🔥 조강현님의 TFT 전적 🔥</h1>
      <div className="bg-white rounded-2xl shadow-md p-6 w-80 text-center">
        <p className="text-xl font-semibold">
          {data.tier} {data.rank}
        </p>
        <p className="text-lg">LP: {data.lp}점</p>
        <p className="mt-2">승리: {data.wins}승</p>
        <p>패배: {data.losses}패</p>
        <p className="mt-4 text-sm text-gray-500">지금 이 순간의 조강현님</p>
      </div>
    </main>
  );
}
