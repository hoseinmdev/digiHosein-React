const Backdrop = ({ show, setShow }) => {
  return (
    <div
      className="fixed left-0 top-0 z-[100] h-screen w-screen bg-gray-600 opacity-50"
      onClick={() => setShow(!show)}
    ></div>
  );
};

export default Backdrop;
