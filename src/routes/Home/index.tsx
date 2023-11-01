import Card from "../../components/Card";
import CardComent from "../../components/CardComent";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SubTitle from "../../components/SubTitle";
import "./styles.css";
const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="ds-container">
          <SubTitle />
          <div className="ds-container-cards">
            <Card />
            <Card />
          </div>
        </section>
        <section className="ds-section-coment">
          <h2>O que estão dizendo</h2>

          <div className="ds-section-container">
            <CardComent />
            <CardComent />
            <CardComent />
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
