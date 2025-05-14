export function Card({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="bg-zinc-800 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-zinc-300 text-sm">{children}</p>
    </div>
  );
}