export default function Card({ children }) {
  return (
    <div className="shadow-md flex flex-col gap-1 p-2 rounded-xl">
      {children}
    </div>
  );
}
