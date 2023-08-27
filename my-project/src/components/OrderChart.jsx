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
          <div className="flex justify-center items-center mt-20 ml-10 ">
            <BarChart
              width={150}
              height={150}
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: 90,
                bottom: 28,
              }}
            >
              <Bar
                dataKey="totalOrder"
                fill="#ff9f43"
                isAnimationActive={false}
                radius={[0, 0, 10, 10]}
                stackId="a"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill="#ff9f43"
                    strokeWidth={1}
                    x={index * (100 / data.length)}
                  />
                ))}
              </Bar>
              <Bar
                dataKey="order"
                fill="#2e4c85"
                radius={[10, 10, 0, 0]}
                isAnimationActive={false}
                stackId="a"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-upper-${index}`}
                    fill="#2e4c85"
                    strokeWidth={1}
                    x={index * (100 / data.length)}
                  />
                ))}
              </Bar>
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
