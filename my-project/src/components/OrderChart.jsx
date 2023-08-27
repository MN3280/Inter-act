import { orderData } from "../../data/orderChartData";
import { BarChart, Bar, YAxis, XAxis, Cell } from "recharts";

export default function OrderChart() {
  const data = orderData;
  const maxOrderValue = Math.max(...data.map((item) => item.order));
  const BarChartWithCustomHeight = () => {
    const barData = data.map((item) => ({
      name: item.name,
      totalOrder: item.totalOrder,
      order: maxOrderValue, // Set the order value to the maxOrderValue
    }));
  };
  return (
    <>
      <div className="w-[183px] h-[220px] relative mx-4">
        <div className="w-[183px] h-[220px] absolute bg-[#171e37] rounded-[7px]">
          <div className="flex justify-center items-center mt-20">
            <BarChart
              width={150}
              height={150}
              data={data}
              margin={{
                top: 18,
                right: 30,
                left: 20,
                bottom: 28,
              }}
            >
              <Bar
                dataKey="totalOrder"
                stackId="a"
                fill="#ff814a"
                // isAnimationActive={false}
                radius={[0, 0, 10, 10]}
              />
              <Bar
                dataKey="order"
                stackId="a"
                fill="#2e4c85"
                radius={[10, 10, 0, 0]}
                // isAnimationActive={false}
              />
            </BarChart>
          </div>

          <div className="left-[23px] top-[55px] absolute text-[#ff814a] text-[28px] font-medium">
            189k
          </div>
          <div className="left-[22px] top-[18px] absolute text-white text-base font-medium leading-7">
            Orders
          </div>
        </div>
      </div>
    </>
  );
}
