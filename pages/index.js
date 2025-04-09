<main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
  <h1 className="text-3xl font-bold mb-6">🔥 조강현님의 TFT 전적 🔥</h1>
  <div className="bg-white rounded-2xl shadow-md p-6 w-80 text-center">
    <p className="text-xl font-semibold">{data.tier} {data.rank}</p>
    <p className="text-lg">LP: {data.lp}점</p>

    <div className="mt-4">
      <p>✅ 승리: <span className="font-bold text-green-600">{data.wins}</span> 승</p>
      <p>❌ 패배: <span className="font-bold text-red-500">{data.losses}</span> 패</p>
    </div>

    <hr className="my-4 border-gray-300" />

    <p className="text-sm text-gray-500 italic">지금 이 순간의 조강현님, 랭크 정복 중 🔥</p>
  </div>
</main>
