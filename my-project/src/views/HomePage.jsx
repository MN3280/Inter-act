import ActivityOverview from "../components/ActivityOverview";
import Card from "../components/Card";
import EarningChart from "../components/EarningChart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProfitChart from "../components/ProfitChart";
import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Header />
          <div style={{ flex: 1, padding: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "white",
                fontSize: "30px",
                fontWeight: "bold",
                marginTop: "5px",
              }}
            >
              Marketing Dashboard
            </div>
            <div style={{ marginTop: "10px" }}>
              <span
                style={{
                  color: "#888",
                  fontSize: "14px",
                  fontWeight: "medium",
                  marginRight: "5px",
                }}
              >
                Home /
              </span>
              <span
                style={{
                  color: "#0BB885",
                  fontSize: "14px",
                  fontWeight: "medium",
                }}
              >
                Dashboard
              </span>
            </div>
            <div className="py-6">
              <Card />
            </div>
            <div className="py-2">
              <EarningChart />
              <ActivityOverview />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
