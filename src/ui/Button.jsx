import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 text-sm uppercase text-stone-800 font-semibold inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300  fou ring-offset-2 active:bg-yellow-600 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " md:px-6 md:py-4 py-3 px-4",
    secondary:
      "md:px-6 md:py-3.5 py-2.5 px-4 text-sm uppercase border-2 border-stone-300 text-stone-400 font-semibold inline-block tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-800  transition-colors duration-300 focus:outline-none focus:text-stone-800  focus:ring focus:ring-stone-200 focus:bg-stone-300 fou ring-offset-2 active:bg-stone-600 disabled:cursor-not-allowed ",
    small: base + " py-2 px-4  md:px-5 md:py-2.5 text-xs",
    round: base + " py-1 px-2.5  md:px-3.5 md:py-2 text-sm",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
