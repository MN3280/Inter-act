import EarningChart from "./EarningChart";
import OrderChart from "./OrderChart";
import ProfitChart from "./ProfitChart";
import Card from "../components/Card";
import TotalProfit from "./TotalProfit";
import ActivityOverview from "./ActivityOverview";

export default function Layout() {
  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex py-2 ">
            <EarningChart />
            <OrderChart />
            <ProfitChart />
          </div>
          <div className="my-4">
            <TotalProfit />
          </div>
        </div>
        <div className="flex flex-col px-6 mb-4">
          <div className="flex-grow" />
          <div>
            <ActivityOverview />
          </div>
        </div>
      </div>
    </>
  );
}
