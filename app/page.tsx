export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-3">
          <span className="text-4xl font-bold tracking-tight text-white">
            BEI
          </span>
          <span className="text-4xl font-bold tracking-tight" style={{ color: "#00e5ff" }}>
            RUX
          </span>
        </div>
        <p className="max-w-md text-lg text-zinc-400">
          Digital product studio built for the AI era.
        </p>
        <div
          className="mt-4 h-px w-16"
          style={{ backgroundColor: "rgba(0, 229, 255, 0.4)" }}
        />
        <p className="text-sm text-zinc-600">Coming soon.</p>
      </div>
    </main>
  );
}
