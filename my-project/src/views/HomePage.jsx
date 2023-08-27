import Filter from "../components/Filter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flexDirection: "column" }}>
          <Header />
          <Filter />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
