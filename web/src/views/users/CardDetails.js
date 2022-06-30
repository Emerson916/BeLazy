import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

const CardDetails = () => {
  return (
    <>
      <Header />
      <div className="h-screen bg-gradient-to-b from-current to-purple-800">
        <img
          src={
            "https://legadodadc.com.br/wp-content/uploads/2021/11/FD1vP6lWQAMNHQl-1.jpg"
          }
          alt="Imagem do filme"
          className="h-[500px] w-full"
        />

        <h1>Titulo do filme</h1>
      </div>
      <Footer />
    </>
  );
};

export default CardDetails;
