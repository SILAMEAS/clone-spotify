import React from "react";

const DropBox = () => {
  return (
    <>
      <div className="p-4 absolute top-[65%] right-0 bg-slate-700 w-40 h-40 z-10 rounded-lg ">
        <p className="py-2 px-4 hover:bg-slate-500 cursor-pointer rounded-lg ">
          {" "}
          Profile
        </p>
        <p className="py-2 px-4 hover:bg-slate-500 cursor-pointer rounded-lg ">
          Log out
        </p>
        <p className="py-2 px-4 hover:bg-slate-500 cursor-pointer rounded-lg ">
          Setting
        </p>
      </div>
    </>
  );
};

export default DropBox;
