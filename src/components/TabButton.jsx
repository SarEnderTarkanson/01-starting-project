export default function TabButton({ children, onSelect, isSelected }) {
  console.log("TabButton component rendering");
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
