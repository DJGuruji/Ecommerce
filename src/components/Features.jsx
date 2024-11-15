import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Features = () => {



  useEffect(() => {
    AOS.init({
      duration: 2000, 
      easing: 'ease-in-out', 
      once: true, 
    });
  }, []);

  const features = [
    { title: 'Free Shipping', description: 'On all orders over $50' },
    { title: '24/7 Support', description: 'Dedicated support' },
    { title: 'Secure Payment', description: '100% secure payment' },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {features.map((feature, index) => (
          <div key={index} className="p-6 text-center bg-white shadow-xl rounded-lg" data-aos="fade-up">
            <h4 className="text-xl font-bold">{feature.title}</h4>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;