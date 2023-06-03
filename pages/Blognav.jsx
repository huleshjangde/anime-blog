import React, { useState } from "react";
import Tcard from "./Tcard";
import { data } from "../data";

const Blognav = () => {
  const [category, setCategory] = useState("comedy"); // Default category 

  const categories = [
    { id: 1, name: "comedy" },
    { id: 2, name: "fantasy" },
    { id: 3, name: "drama" },
    { id: 4, name: "action" },
    { id: 6, name: "military" },
  ];

  // Filter the data based on the selected category
  const filteredData = data.filter((item) => item.categorie === category);

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
  };

  return (
    <>
      <section className="md:px-20 md:py-10 w-screen h-full ">
        <p className="heading  font-medium px-2 md:px-10 mb-2 text-center w-full text-xl">
         ALL BLOGS
        </p>
        <div className=" md:flex justify-center flex-wrap gap-2  md:gap-5 px-10 mt-10 text-lg font-medium flex overflow-hidden bg-gray-900 text-slate-200 uppercase text-center items-center py-2 rounded-md mx-4 md:mx-0">
          {categories.slice(0,5).map((category) => (
            <div key={category.id}>
              <button className="uppercase hover:text-gray-900 hover:bg-slate-200 px-1" onClick={() => handleCategoryClick(category.name)}>
                {category.name}
              </button>
            </div>
          ))}
        </div>

        <div className="blogs flex gap-5 mt-8 justify-center items-center px-2 md:px-10 ">
          {filteredData.map((item) => (
            <Tcard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Blognav;
