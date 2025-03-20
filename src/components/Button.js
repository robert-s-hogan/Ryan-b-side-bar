// Considered an Atom

export default function Button({ theme = "primary", onClick, children }) {
  const baseClass =
    "w-full py-2 px-4 font-bold rounded-md transition duration-300";

  const themeClass = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button className={`${baseClass} ${themeClass[theme]}`} onClick={onClick}>
      {children}
    </button>
  );
}
