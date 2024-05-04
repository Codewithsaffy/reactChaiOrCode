// import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const loadData = useLoaderData() as { followers: number; avatar_url: string; name: string; };

  // const [data, setData] = useState<{
  //   followers: number;
  //   avatar_url: string;
  // }>({ followers: 0, avatar_url: "" });
  // useEffect(() => {
  //   fetch("https://api.github.com/users/codewithsaffy")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, [data]);

  return (
    <>
      <div className=" w-1/3 m-auto">
        <div className="text-3xl font-bold text-center text-white mt-10  bg-orange-700 rounded p-2 mb-10  ">
          {loadData.name}
        </div>
        <div className="text-3xl font-bold text-center text-white mt-10  bg-orange-700 rounded p-2 mb-10  ">
          Followers {loadData.followers}
        </div>
        <img className=" m-auto w-1/3 h-1/3 " src={loadData.avatar_url} alt="" />
      </div>
    </>
  );
}
export default Github;

export async function loader<T>(): Promise<T> {
  let data = await fetch("https://api.github.com/users/codewithsaffy");
  let response = await data.json();
  return response;
}
