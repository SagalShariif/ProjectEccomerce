const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-1/2">
        <button onClick={onClose} className="float-right text-gray-500">X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
