export default function Card({ children, className }) {
  return (
    <div className={`rounded-sm shadow p-4  ml-[-150px] ${className}`}>
      {children}
    </div>
  );
}
