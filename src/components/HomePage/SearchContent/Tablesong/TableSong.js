import React, { useState } from "react";

const TableSong = () => {
  const [num, setN] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return (
    <>
      <table className="w-full ">
        {num.map((i) => {
          return (
            <tr className="hover:bg-gray-500 rou">
              <td className="flex items-center py-2 px-4 ">
                <p className="mr-4">{i}</p>
                <img
                  src="https://images.unsplash.com/photo-1607688387751-c1e95ae09a42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80"
                  alt=""
                  className="w-14 h-14"
                />
                <p className="ml-4">Sila</p>
              </td>
              <td>2000</td>
              <td>2:98</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default TableSong;
