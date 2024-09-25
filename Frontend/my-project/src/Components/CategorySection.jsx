import React from "react";
const categoriesdata = [
  {
    image:
      "https://media.istockphoto.com/id/1093999178/photo/young-handsome-man-isolated-on-gray-textured-wall-smiling-while-pointing-with-index-finger-to.webp?a=1&b=1&s=612x612&w=0&k=20&c=S1CPKyaNRg11CH0XtFX_mGGGO-WHuQCw5yG6n-sswJE=",
    title: "men",
  },

  {
    image:
      "https://media.istockphoto.com/id/1477871401/photo/portrait-of-happy-young-businesswoman-arms-crossed-with-looking-at-camera-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yv0Xx4Sl54NsId-FNpm8Bd2YlM56gCK3VBmmx-CR_uw=",
    title: "women",
  },
  {
    image:
      "https://media.istockphoto.com/id/1268132702/photo/cute-baby-girl-with-barefoot-jumping-on-pink-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=C7csPpaG3GXjfUg4G6Z_e8bqmIHk75okJXC6lzyUtFQ=",
    title: "kids",
  },
];
const CategorySection = () => {
  return (
    <div className="container mx-auto px-2  md:px-16 lg:px-24 py-4 gap-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {categoriesdata.map((category, idx) => (
          <div
            key={idx}
            className="relative md:h-64 p-4  transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={category.image}
              alt=""
              srcSet=""
              className="w-full h-full md:object-cover rounded-lg object-fill"
            />
            <div className="absolute top-12 left-4 md:left-8">
              <p className="font-bold capitalize text-lg">{category.title}</p>
              <h1 className="capitalize">view all</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
