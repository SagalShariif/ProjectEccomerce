const Card = ({ title, children, className = "" }) => (
  <div className={`shadow-md p-4 rounded bg-white ${className}`}>
    {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
    {children}
  </div>
);

export default Card;
