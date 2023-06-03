import React from "react";
const Tcard = (post) => {
  return (
    <section className="flex flex-col w-96 h-auto hover:cursor-pointer hover:scale-105  mx-auto shadow-md border-b">
      <div
        className="left w-full  h-52 bg-cover bg-center"
        style={{ backgroundImage: `url("${post.image}")` }}
      ></div>

      <div className="right w-auto flex items-center  md:px-5 relative mt-2 py-3">
        <div className="h-auto w-full flex flex-col gap-2 px-4 md:px-0">
          <div className="flex gap-4 text-xs">
            <p className="font-medium">{post.categorie}</p>
            <p>{post.postDate}</p>
          </div>

      <div className=" w-full h-16 overflow-hidden line-clamp-2  flex justify-items-center items-center">
          <p className="title text-lg font-bold w-full h-fit">{post.title}</p>
          </div>

          <div className="desc text-gray-500 line-clamp-3 text-sm">
            {post.post}
          </div>

          <div className="flex gap-4 items-center justify-between">
            <p className="font-normal text-gray-600 text-sm">
              {post.readTime}
            </p>
            <button className="text-black font-bold text-base ">
              <span className="text-2xl"> &#8594; </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tcard;
