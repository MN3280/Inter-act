const Header = () => {
  return (
    <>
      <div className="w-[1190px] h-14 relative border-b border-gray-300">
        <div className="left-[1019.50px] top-0 absolute justify-start items-center gap-3 inline-flex">
          <div className="py-2 relative">
            <div className="w-10 h-10 rounded-full bg-gray-500 border border-white"></div>
            <span className="top-2 left-7 absolute w-2 h-2 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>

          <div className="text-white text-sm font-medium leading-tight">
            Hello, User!
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
