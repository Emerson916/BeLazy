import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Button from "../../components/Button";
import imageNotFound from "../../assets/img/pageNotFound.svg";

const CardDetails = () => {
  return (
    <>
      <Header />
      <div className="h-full bg-gradient-to-b from-current to-purple-800">
        <img
          src={imageNotFound}
          alt="Imagem do filme"
          className="h-[500px] w-full"
        />

        <div className="flex flex-row justify-between m-5 pt-10">
          <div>
            <h1 className="text-white text-2xl font-bold flex mx-9">
              Titulo indisponível
            </h1>
          </div>

          <div>
            <Button width={"400px"} title={"Assitir"} />
          </div>
        </div>

        <div>
          <h2 className="text-white text-2xl font-bold flex mx-14">Sinopse</h2>
          <p className="text-white text-1xl font-bold flex mx-14 my-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CardDetails;
