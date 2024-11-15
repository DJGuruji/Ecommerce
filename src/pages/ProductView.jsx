import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ProductPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  return (
    <div className="">
      <div className="flex justify-center items-center "data-aos="fade-up">
        

        <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-4 shadow-xl">
          {/* Product Cards */}
          {/* This would ideally be a mapped array */}
          <div className="bg-white p-4 shadow rounded">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOHERVHxG7JeHUM0eMytYsSs14znwRJTmhYg&s" alt="Product" className="w-full h-48 object-cover" />
            <h4 className="text-lg font-semibold mt-2">Product Name</h4>
            <p className='text-justify pb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum aliquid placeat hic ratione. Dolorem quos obcaecati veniam ad modi nihil ut enim molestias laudantium, maiores numquam necessitatibus. Distinctio, ut explicabo.</p>
            <span className=" font-bold  ">$20</span>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 ml-3 rounded hover:rounded-lg hover:bg-blue-600">
                Buy Now
              </button>
              <button className="mt-4 w-full bg-yellow-500 text-white py-2 ml-3 rounded hover:rounded-lg hover:bg-yellow-600">
                Add to Cart
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;