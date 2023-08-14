const Badge = ({ refrens, title }) => {
  return (
    <div
      className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gray-50 border border-violet-200 p-2 text-violet-700"
      onClick={() =>
        window.scrollTo({
          top: refrens.current.offsetTop - 180,
        })
      }
    >
      {title}
    </div>
  );
};

export default Badge;
