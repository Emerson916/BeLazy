import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ScrollView } from "react-native";
import { Container } from "./styles";
import ListVideos from "../../components/ListVideos";
import ImageCarousel from "../../components/ImageCarousel";
import { api } from "../../services/api";

const FAKE_DATA = [
  {
    id: "7d20e569-b776-46d8-8178-65425ec8ecea",
    type: "FILMS",
    title: "ÚLTIMOS LANÇAMENTOS",
    items: [
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
        id: "622b3560b67c72f2fe45c764",
        imageCard:
          "https://pm1.narvii.com/7417/7e036e6ded8d672cbaa9ad6e70770d1ccf8b2616r1-1280-1897v2_hq.jpg",
        imageBanner:
          "https://pm1.narvii.com/7417/d62b6a9a1cab48b52502b0ea9022b8a520a46346r1-1080-1350v2_hq.jpg",
        video: {
          title_video: "Thor - Amor e Trovão",
          link: "thoramoretrovao",
          favorite: false,
          evaluation: 4,
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
          link: "vingadoresultimato",
          favorite: false,
          evaluation: 4,
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
          link: "shangchiealendadosdezaneis",
          favorite: false,
          evaluation: 2,
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
          link: "eternos",
          favorite: false,
          evaluation: 4,
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
  },

  {
    id: "7d20e569-b776-46d8-8178-65425ec8eceb",
    type: "SERIES",
    title: "AS MELHORES SÉRIES",
    items: [
      {
        id: "622b3560b67c72f2fe45c761",
        imageCard:
          "https://m.media-amazon.com/images/I/71PoWJZWJRL._AC_SL1000_.jpg",
        imageBanner:
          "https://radiogeekbr.com.br/wp-content/uploads/2018/09/rick-and-morty-season-3.jpg",
        video: {
          title_video: "Rick and Morty",
          link: "rickandmorty",
          favorite: false,
          evaluation: 3,
          releaseYear: 2022,
          createdAt: 16476078,
          duration: 220,
          type: "SERIE",
          category: [" Comedia ", " Ação ", " Comédia "],
          sinopse:
            "O show gira em torno das aventuras dos membros da família Smith, que consiste nos pais Jerry e Beth, seus filhos Summer e Morty, e o pai de Beth, chamado Rick Sanchez, que mora com eles como hóspede. De acordo com Justin Roiland, a família mora fora da cidade de Seattle, no estado norte-americano de Washington.",
        },
      },
      {
        id: "622b3560b67c72f2fe45c762",
        imageCard:
          "https://i.pinimg.com/originals/60/56/6c/60566c12f83a50d9b74bee807ca54065.jpg",
        imageBanner: "https://pbs.twimg.com/media/DcSHI3NW4AAJFZJ.jpg",
        video: {
          title_video: "13 Reasons Why",
          link: "13reasonswhy",
          favorite: false,
          evaluation: 4,
          releaseYear: 2022,
          createdAt: 16476078,
          duration: 180,
          type: "SERIE",
          category: [" Comedia ", " Ação "],
          sinopse:
            "Clay Jensen, um estudante, volta para casa da escola um dia, e encontra uma caixa misteriosa deixada na sua varanda. Dentro da caixa, ele encontra sete fitas cassete de dois lados gravadas por Hannah Baker, sua colega de escola e amor não-correspondido, que tragicamente cometeu suicídio duas semanas antes.",
        },
      },
      {
        id: "622b3560b67c72f2fe45c763",
        imageCard: "https://pbs.twimg.com/media/EIsfpsQXUAIsYcj?format=jpg",
        imageBanner:
          "https://img.elo7.com.br/product/original/2960598/stranger-things-painel-festa-1-50x1m-banner.jpg",
        video: {
          title_video: "Stranger Things",
          link: "strangerthings",
          favorite: false,
          evaluation: 4,
          releaseYear: 2019,
          createdAt: 16476078,
          duration: 170,
          type: "SERIE",
          category: [" Comedia ", " Ação "],
          sinopse:
            "Em 6 de Novembro, 1983 na pequena cidade de Hawkins, Indiana, o garoto de 12 anos, Will Byers desaparece misteriosamente. A mãe de Will, Joyce, torna-se frenética e tenta encontrar Will enquanto o chefe de polícia Jim Hopper começa a investigar, e assim fazem também os amigos de Will: Dustin, Mike e Lucas.",
        },
      },
      {
        id: "622b3560b67c72f2fe45c764",
        imageCard:
          "https://img.elo7.com.br/product/original/26B5E5A/big-poster-serie-the-walking-dead-lo03-tamanho-90x60-cm-nerd.jpg",
        imageBanner:
          "https://observatoriodeseries.uol.com.br/wp-content/uploads/2019/02/2378636.jpg",
        video: {
          title_video: "The Walking Dead",
          link: "thewalkingdead",
          favorite: false,
          evaluation: 3,
          releaseYear: 2023,
          createdAt: 16476078,
          duration: 200,
          type: "SERIE",
          category: [" Comedia ", " Ação "],
          sinopse:
            "The Walking Dead é uma série norte-americana transmitida originalmente pelo canal AMC. A história acompanha a vida na Terra após um apocalipse zumbi e um grupo de sobreviventes liderados pelo ex-policial, Rick Grimes, viajam em busca de um lar seguro.",
        },
      },
      {
        id: "622b3560b67c72f2fe45c765",
        imageCard:
          "https://animesrubro.net/wp-content/uploads/2021/11/assistir-arcane-todos-os-episodios-legendado-hd-animesrubro-online.jpeg",
        imageBanner:
          "https://theclick.gg/wp-content/uploads/2021/09/arcane-league-of-legends-series-banner-1024x576.jpg",
        video: {
          title_video: "Arcane",
          link: "arcane",
          favorite: false,
          evaluation: 4,
          releaseYear: 2019,
          createdAt: 16476078,
          duration: 200,
          type: "SERIE",
          category: [" Comedia ", " Ação "],
          sinopse:
            "A trama gira em torno de uma tecnologia mágica conhecida com hextec que dá a qualquer pessoa a habilidade de controlar energia mística e essa ferramenta acaba causando um desequilíbrio entre os reinos.",
        },
      },
      {
        id: "622b3560b67c72f2fe45c766",
        imageCard:
          "https://cdn.fstatic.com/media/movies/covers/2020/02/The_Simpsons_1989_AcQ7bRq.jpeg",
        imageBanner:
          "https://spinoff.com.br/wp-content/uploads/os-simpsons-750x380-1200x720.jpg",
        video: {
          title_video: "The Simpsons",
          link: "thesimpsons",
          favorite: false,
          evaluation: 3,
          releaseYear: 2022,
          createdAt: 16476078,
          duration: 200,
          type: "SERIE",
          category: [" Comedia ", " Ação "],
          sinopse:
            "The Simpsons é uma série animada norte americana transmitida pelo canal FOX. A comédia acompanha a família Simpsons, uma família da classe trabalhadora na cidade desajustada de Springfield. Homer, o pai, trabalha como inspetor de segurança na usina nuclear local; Marge, a mãe, tenta manter a paz na família.",
        },
      },
      {
        id: "622b3560b67c72f2fe45c767",
        imageCard:
          "https://superflixfilmes.net/wp-content/uploads/2021/11/z2mv5AayPBGZSlP3QfLe5hCJPoS.jpg",
        imageBanner:
          "https://2.bp.blogspot.com/--2bS5EI0LBM/XJBl2A_F5iI/AAAAAAAABNs/OTGDARFv9Y8Z5s6VYA5I1fPpcybNj2axQCLcBGAs/w1200-h630-p-k-no-nu/EU-A-PATROA-CRIAN%25C3%2587AS-GEEK-RESENHAS.png",
        video: {
          title_video: "Eu, a Patroa e as Crianças",
          link: "euapatroaeascriancas",
          favorite: false,
          evaluation: 52,
          releaseYear: 2022,
          createdAt: 16476078,
          duration: 200,
          type: "SERIE",
          category: [" Comedia ", " Ação "],
          sinopse:
            "O amoroso pai de família Michael Kyle engravidou Janet quando ela ainda era uma adolescente. Os dois se casaram e tiveram três filhos, mas o fantasma de sua própria história faz com que Michael alimente um verdadeiro pavor de que o mesmo aconteça com seus filhos.",
        },
      },
    ],
  },

  {
    id: "7d20e569-b776-46d8-8178-65425ec8ecec",
    type: "ANIMES",
    title: "TALVEZ VOCÊ GOSTE",
    items: [
      {
        id: "622b3560b67c72f2fe45c761",
        imageCard:
          "https://www.ubuy.hu/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFJRjZjdm1nOEwuX0FDX1NMMTUwMF8uanBn.jpg",
        imageBanner:
          "https://wallpapers.com/images/high/jojo-bizarre-adventure-hero-banners-97au0jin9lw0i6lz.jpg",
        video: {
          title_video: "Jojo's Bizarre Adventure",
          link: "jojosbizarreadventure",
          favorite: false,
          evaluation: 4,
          releaseYear: 2022,
          createdAt: 16476078,
          duration: 220,
          type: "ANIME",
          category: [" Comedia ", " Ação ", " Comédia "],
          sinopse:
            "JoJo's conta a história da família Joestar, uma família cujos vários membros descobrem que estão destinados a derrubar inimigos sobrenaturais, tais como Dio Brando um vampiro semi-imortal, Yoshikage Kira um serial killer e Diavolo um líder de gangue usando poderes únicos que possuem.",
        },
      },
      {
        id: "622b3560b67c72f2fe45c762",
        imageCard:
          "https://www.themoviedb.org/t/p/original/nvAPotUDNcKStSOv2ojGZBNOX8A.jpg",
        imageBanner:
          "https://img.elo7.com.br/product/original/1BD7B1D/painel-festa-1x0-70cm-one-piece-banner.jpg",
        video: {
          title_video: "One Piece",
          link: "onepiece",
          favorite: false,
          evaluation: 5,
          releaseYear: 2022,
          createdAt: 16476078,
          duration: 180,
          type: "ANIME",
          category: [" Comedia ", " Ação "],
          sinopse:
            "One Piece segue a história de um grupo de piratas liderado por Monkey D. Luffy. O garoto, que possui um corpo elástico, pretende se tornar o Rei dos Piratas e para isso deve encontrar o One Piece, tesouro misterioso capaz de torná-lo imbatível, segundo as lendas.",
        },
      },
      {
        id: "622b3560b67c72f2fe45c763",
        imageCard:
          "https://img.elo7.com.br/product/zoom/1EE24AD/big-poster-do-anime-one-punch-man-tamanho-90x-0-cm-lo029-decoracao-geek.jpg",
        imageBanner:
          "https://wp.radiojhero.com/wp-content/uploads/2020/12/one_punch_man.jpg",
        video: {
          title_video: "One Punch Man",
          link: "onepunchman",
          favorite: false,
          evaluation: 4,
          releaseYear: 2019,
          createdAt: 16476078,
          duration: 170,
          type: "ANIME",
          category: [" Comedia ", " Ação "],
          sinopse:
            "One Punch-Man conta a história de Saitama, um super-herói extremamente poderoso, que se entediou com a ausência dos desafios nas suas lutas contra o mal e procura encontrar um oponente digno.",
        },
      },
      {
        id: "622b3560b67c72f2fe45c764",
        imageCard: "https://wallpapercave.com/wp/wp8326482.jpg",
        imageBanner:
          "https://geeksaw.com.br/wp-content/uploads/2015/07/attack-on-titan-anime-banner-eren-600x360.png",
        video: {
          title_video: "Attack on Titan",
          link: "attackontitan",
          favorite: false,
          evaluation: 5,
          releaseYear: 2023,
          createdAt: 16476078,
          duration: 200,
          type: "FILM",
          category: [" Comedia ", " Ação "],
          sinopse:
            "Para escapar dos titãs, gigantes devoradores de homens, a humanidade se refugiou em cidades cercadas por enormes muralhas. Quando eles voltam a atacar, Eren Yeager se junta à luta para combater as criaturas.",
        },
      },
      {
        id: "622b3560b67c72f2fe45c765",
        imageCard:
          "https://cf.shopee.com.br/file/4561d710322a6666e522fd6b2fb14404",
        imageBanner:
          "https://img.elo7.com.br/product/original/32579FF/painel-de-festa-boku-no-hero-decoracao-de-festa-death-note.jpg",
        video: {
          title_video: "Boku no Hero",
          link: "bokunohero",
          favorite: false,
          evaluation: 3,
          releaseYear: 2019,
          createdAt: 16476078,
          duration: 200,
          type: "ANIME",
          category: [" Comedia ", " Ação "],
          sinopse:
            "Grande fã do sorridente All Might, o herói máximo desse mundo, Deku, como é chamado pelos colegas, sofre com a frustração de saber que jamais terá uma individualidade especial para que possa se tornar, assim como seu grande ídolo, em um defensor dos fracos e oprimidos.",
        },
      },
      {
        id: "622b3560b67c72f2fe45c766",
        imageCard:
          "https://img.elo7.com.br/product/original/2C165D0/big-poster-anime-death-note-lo26-tamanho-90x60-cm-quadro.jpg",
        imageBanner:
          "https://fonesepaginasamarelas.files.wordpress.com/2016/05/death-note-banner.jpg",
        video: {
          title_video: "Death Note",
          link: "deathnote",
          favorite: false,
          evaluation: 4,
          releaseYear: 2022,
          createdAt: 16476078,
          duration: 200,
          type: "ANIME",
          category: [" Comedia ", " Ação "],
          sinopse:
            "Um estudante de repente encontra um caderno que caiu do céu. Trata-se do Death Note, que permite ao seu portador matar qualquer pessoa a partir da mera anotação do nome do alvo em uma de suas páginas.",
        },
      },
      {
        id: "622b3560b67c72f2fe45c767",
        imageCard:
          "https://img.elo7.com.br/product/zoom/2C1D44B/big-poster-anime-dragon-ball-super-lo018-tamanho-90x60-cm-decoracao-geek.jpg",
        imageBanner:
          "https://img.elo7.com.br/product/zoom/1CB555E/dragon-ball-painel-festa-1-50x1m-painel-de-aniversario.jpg",
        video: {
          title_video: "Dragon Ball",
          link: "dragonball",
          favorite: false,
          evaluation: 8,
          releaseYear: 2022,
          createdAt: 16476078,
          duration: 200,
          type: "ANIME",
          category: [" Comedia ", " Ação "],
          sinopse:
            "A série segue as aventuras do protagonista, Son Goku, desde sua infância até a idade adulta enquanto ele treina artes marciais e explora o mundo em busca de sete esferas conhecidas como as Esferas do Dragão, que convocam um dragão que concede um desejo quando reunidas.",
        },
      },
    ],
  },
];

const HomeScreen = () => {
  const [filmsData, setFilmsData] = useState();

  useEffect(() => {
    api
      .get("/v1/films")
      .then((response) => setFilmsData(response.data))
      .catch((err) => {
        console.log("OLHA O CONSOLE AQUI", err);
      });
  }, []);

  return (
    <Container>
      <LinearGradient
        style={styles.linearGradient}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1.0 }}
        colors={["#343746", "#303C76"]}
      >
        <ScrollView>
          <ImageCarousel data={FAKE_DATA[2].items} />
          <ListVideos data={FAKE_DATA[0]} />
          <ListVideos data={FAKE_DATA[1]} />
          <ListVideos data={FAKE_DATA[2]} />
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
