// import React, { useEffect, useRef } from "react";

const ImageCarousel = () => {
  //   let currentSlider = 0;
  //   const myRef = useRef(null);
  //   const goToNext = () => {
  //     myRef.current.scrollToIndex({
  //       index: ++currentSlider,
  //       animated: true,
  //     });
  //   };

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       // isso vai executar a cada 5 segundos
  //       if (currentSlider <= 5) {
  //         goToNext();
  //       } else {
  //         currentSlider = -1;
  //       }
  //     }, 3500);
  //     return () => clearInterval(timer);
  //   }, []);

  return (
    <div className="w-full h-[28rem] mb-20">
      <img
        className="w-full h-full opacity-50"
        alt="Imagem do filme"
        src={`https://www.yorkvision.co.uk/wp-content/uploads/2021/12/Spider-Man_No_Way_Home_banner_001.jpg`}
      />

    </div>
  );
};

export default ImageCarousel;
