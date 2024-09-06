const Nav = () => {
  return (
    <>
      <nav className="w-full h-16 bg-violet-400 flex flex-row items-center p-2 font-semibold">
        <h1>Flutter Demo Home Page</h1>
        <span className="bg-red-500 absolute top-3 -right-5 rotate-45 px-5 rounded-md text-white">
          Debug
        </span>
      </nav>
    </>
  );
};

export default Nav;
