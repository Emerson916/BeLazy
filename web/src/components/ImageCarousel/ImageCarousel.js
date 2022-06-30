import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: "622b3560b67c72f2fe45c761",
    imageCard:
      "https://i0.wp.com/www.otakupt.com/wp-content/uploads/2021/11/Spider-Man-No-Way-Home-poster-2-1.jpg?resize=696%2C1031&ssl=1",
    imageBanner:
      "https://www.yorkvision.co.uk/wp-content/uploads/2021/12/Spider-Man_No_Way_Home_banner_001.jpg",
    video: {
      title_video: "Spider-Man - No Way Home",
      link: "spidermannowayhome",
      evaluation: 2,
      favorite: true,
      releaseYear: 2022,
      createdAt: 16476078,
      duration: 220,
      type: "FILM",
      category: [" Comedia ", " Ação ", " Comédia "],
      sinopse:
        "O Homem-Aranha precisa lidar com as consequências da sua verdadeira identidade ter sido descoberta.",
    },
  },
  {
    id: "622b3560b67c72f2fe45c762",
    imageCard:
      "https://i.pinimg.com/originals/c4/3a/dd/c43add350b0e44f7cdf36fdc36e0946c.png",
    imageBanner:
      "https://legadodadc.com.br/wp-content/uploads/2021/11/FD1vP6lWQAMNHQl-1.jpg",
    video: {
      title_video: "The Batman",
      link: "thebatman",
      favorite: false,
      evaluation: 3,
      releaseYear: 2022,
      createdAt: 16476078,
      duration: 180,
      type: "FILM",
      category: [" Comedia ", " Ação "],
      sinopse:
        "Da Warner Bros. Pictures chega THE BATMAN com o realizador Matt Reeves no comando e protagonizado por Robert Pattinson no duplo papel de detetive de Gotham City e do seu alter ego, o bilionário solitário Bruce Wayne.",
    },
  },

  {
    id: "622b3560b67c72f2fe45c763",
    imageCard:
      "https://www.centralcomics.com/wp-content/uploads/2021/08/unnamed-10-scaled.jpg",
    imageBanner:
      "https://i0.wp.com/critical-room.com/wp-content/uploads/2021/09/70ebdc124071947.60fc4e4924497.jpg?fit=2800%2C1890&ssl=1",
    video: {
      title_video: "Venom - Tempo de Carnificina",
      link: "venomtempodecarnificina",
      favorite: true,
      evaluation: 2,
      releaseYear: 2019,
      createdAt: 16476078,
      duration: 170,
      type: "FILM",
      category: [" Comedia ", " Ação "],
      sinopse:
        "O relacionamento entre Eddie e Venom está evoluindo. Buscando a melhor forma de lidar com a inevitável simbiose, esse dois lados descobrem como viver juntos e, de alguma forma, se tornarem melhores juntos do que separados.",
    },
  },
  {
    id: "622b3560b67c72f2fe45c761",
    imageCard:
      "https://i0.wp.com/www.otakupt.com/wp-content/uploads/2021/11/Spider-Man-No-Way-Home-poster-2-1.jpg?resize=696%2C1031&ssl=1",
    imageBanner:
      "https://www.yorkvision.co.uk/wp-content/uploads/2021/12/Spider-Man_No_Way_Home_banner_001.jpg",
    video: {
      title_video: "Spider-Man - No Way Home",
      link: "spidermannowayhome",
      evaluation: 2,
      favorite: true,
      releaseYear: 2022,
      createdAt: 16476078,
      duration: 220,
      type: "FILM",
      category: [" Comedia ", " Ação ", " Comédia "],
      sinopse:
        "O Homem-Aranha precisa lidar com as consequências da sua verdadeira identidade ter sido descoberta.",
    },
  },
];

const ImageCarousel = ({ props }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let width = window.innerWidth;
    let currentSlider = 0;
    const qntImagens = data.map((item) => item.imageBanner);

    const sliderRight = () => {
      currentSlider = currentSlider + 1;
      const slider = document.getElementById("imageCarousel");
      slider.scrollLeft = slider.scrollLeft + width;
    };

    const sliderLeft = () => {
      width = 0;
      currentSlider = currentSlider = 0;
      const slider = document.getElementById("imageCarousel");
      slider.scrollLeft = slider.scrollLeft - 15000;
    };
    const timer = setInterval(() => {
      if (currentSlider >= qntImagens.length) {
        sliderLeft();
      } else {
        sliderRight();
      }
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="imageCarousel"
      className="w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth container-snap"
    >
      {data?.map((item, key) => (
        <div
          key={key}
          onClick={() => navigate("/cardDetails", { props })}
          className="w-full inline-block h-[550px] cursor-pointer hover:scale-95 ease-in-out duration-300 hover:opacity-80"
        >
          <img
            src={item.imageBanner}
            alt="Imagem do filme"
            className="h-full w-full scale-95"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
