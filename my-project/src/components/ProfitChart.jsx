import { LineChart, Line, CartesianGrid } from "recharts";
import { totalProfit } from "../../data/profitChartData";

export default function ProfitChart() {
  const data = totalProfit;
  const CustomDot = (props) => {
    const { cx, cy, stroke, value } = props;

    if (value === data[data.length - 1].value) {
      return (
        <svg x={cx - 15} y={cy - 15} width={40} height={40} fill={stroke}>
          <circle cx={15} cy={15} r={10} />
          <circle cx={15} cy={15} r={5} fill="black" />
        </svg>
      );
    }
    return null;
  };
  return (
    <>
      <div className="w-[162px] h-[220px] relative">
        <div className="w-[162px] h-[220px] left-0 top-0 absolute bg-[#171e37] rounded-[7px]" />
        <LineChart
          layout="horizontal"
          width={200}
          height={190}
          data={data}
          margin={{
            top: 100,
            right: 68,
            left: 25,
          }}
        >
          <CartesianGrid
            horizontalPoints={[0]}
            strokeDasharray="6 6"
            strokeWidth={2}
            stroke="#091826"
            x={25}
            y={120}
          />
          <Line
            dataKey="value"
            stroke="#0fb884"
            strokeWidth={3}
            dot={<CustomDot />}
            isAnimationActive={false}
          />
        </LineChart>
        {/* </div> */}
        <div className="w-[85px] left-[21px] top-[53px] absolute text-emerald-500 text-[28px] font-medium">
          8,24k
        </div>
        <div className="left-[21px] top-[19px] absolute text-white text-base font-medium leading-7">
          Profit
        </div>
      </div>
    </>
  );
}
