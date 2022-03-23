import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ScrollView } from "react-native";
import { Container } from "./styles";
import ListVideos from "../../components/ListVideos";
import ImageCarousel from "../../components/ImageCarousel";

const FAKE_DATA = {
  id: "7d20e569-b776-46d8-8178-65425ec8ecea",
  items: [
    {
      id: "622b3560b67c72f2fe45c761",
      imageCard:
        "https://i0.wp.com/www.otakupt.com/wp-content/uploads/2021/11/Spider-Man-No-Way-Home-poster-2-1.jpg?resize=696%2C1031&ssl=1",
      imageBanner:
        "https://www.yorkvision.co.uk/wp-content/uploads/2021/12/Spider-Man_No_Way_Home_banner_001.jpg",
      video: {
        title_video: "Spider-Man - No Way Home",
        evaluation: 5,
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
        evaluation: 5,
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
        evaluation: 5,
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
      id: "622b3560b67c72f2fe45c764",
      imageCard:
        "https://pm1.narvii.com/7417/7e036e6ded8d672cbaa9ad6e70770d1ccf8b2616r1-1280-1897v2_hq.jpg",
      imageBanner:
        "https://pm1.narvii.com/7417/d62b6a9a1cab48b52502b0ea9022b8a520a46346r1-1080-1350v2_hq.jpg",
      video: {
        title_video: "Thor - Amor e Trovão",
        evaluation: 5,
        releaseYear: 2023,
        createdAt: 16476078,
        duration: 200,
        type: "FILM",
        category: [" Comedia ", " Ação "],
        sinopse:
          "Em 'Thor: Amor e Trovão', é revelado que Jane e a nova Thor são a mesma pessoa: ao se transformar na super-heroína, ela temporariamente se livra do câncer, ainda que a doença continue a destruir seu corpo humano.",
      },
    },
    {
      id: "622b3560b67c72f2fe45c765",
      imageCard:
        "https://img.elo7.com.br/product/zoom/266036C/big-poster-filme-vingadores-ultimato-lo47-tamanho-90x60-cm-vingadores.jpg",
      imageBanner:
        "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/07/endgame-1.jpg",
      video: {
        title_video: "Vingadores Ultimato",
        evaluation: 5,
        releaseYear: 2019,
        createdAt: 16476078,
        duration: 200,
        type: "FILM",
        category: [" Comedia ", " Ação "],
        sinopse:
          "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.",
      },
    },
    {
      id: "622b3560b67c72f2fe45c766",
      imageCard:
        "https://legadodamarvel.com.br/wp-content/uploads/2021/04/shang-chi-poster-legadodamarvel.jpg",
      imageBanner:
        "https://static.wixstatic.com/media/e77f03_e72f56062db04b1e93bf4249fb3f700c~mv2.png/v1/fill/w_1000,h_562,al_c,usm_0.66_1.00_0.01/e77f03_e72f56062db04b1e93bf4249fb3f700c~mv2.png",
      video: {
        title_video: "Shang-chi - E a lenda dos dez aneis",
        evaluation: 5,
        releaseYear: 2022,
        createdAt: 16476078,
        duration: 200,
        type: "FILM",
        category: [" Comedia ", " Ação "],
        sinopse:
          "Shang-Chi é o filho do líder de uma organização criminosa poderosa. O rapaz foi criado desde criança para ser um guerreiro, mas decidiu abandonar esse caminho e fugiu para viver uma vida pacífica. Porém, tudo isso muda quando ele é atacado por um grupo de assassinos e se vê forçado a enfrentar seu passado.",
      },
    },
    {
      id: "622b3560b67c72f2fe45c767",
      imageCard:
        "https://technewsbrasil.com.br/wp-content/uploads/2021/10/eternos-dolby-cinema.jpeg",
      imageBanner:
        "https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/YPF3KRY4ARCKPLRHLO5ZP3FPRE.png",
      video: {
        title_video: "Eternos",
        evaluation: 5,
        releaseYear: 2022,
        createdAt: 16476078,
        duration: 200,
        type: "FILM",
        category: [" Comedia ", " Ação "],
        sinopse:
          "Os Eternos são uma raça de seres imortais que viveram durante a antiguidade da Terra, moldando sua história e suas civilizações enquanto batalhavam os malignos Deviantes.",
      },
    },
  ],
};

const HomeScreen = () => {
  return (
    <Container>
      <LinearGradient
        style={styles.linearGradient}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1.3 }}
        colors={["#343746", "#303C76"]}
      >
        <ScrollView>
          <ImageCarousel data={FAKE_DATA.items} />
          <ListVideos data={FAKE_DATA.items} />
          <ListVideos data={FAKE_DATA.items} />
        </ScrollView>
      </LinearGradient>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
