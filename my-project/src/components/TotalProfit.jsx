import React from "react";
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, Cell } from "recharts";
import { totalProfitData } from "../../data/totalProfitData";
import { balanceData } from "../../data/balanceData";

export default function TotalProfit() {
  const data = totalProfitData;
  const balance = balanceData;
  const yTicks = [-200, -100, 0, 100, 200, 300];
  return (
    <>
      <div className="w-[663px] h-[362px] relative">
        <div className="w-[664px] h-[363px] left-0 top-0 absolute">
          <div className="w-[663px] h-[362px] left-0 top-0 absolute bg-[#171e37] rounded-md" />
          <BarChart
            width={460}
            height={390}
            data={data}
            margin={{
              top: -20,
              right: 30,
              left: 30,
              bottom: 58,
            }}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#b9b9c3" }}
              padding={{ left: 30, right: 30 }}
            />
            <YAxis
              ticks={yTicks}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#b9b9c3" }}
              padding={{ top: 20, bottom: 20 }}
            />
            <Bar
              dataKey="earnings"
              fill="#02b984"
              radius={[10, 10, 0, 0]}
              isAnimationActive={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-upper-${index}`}
                  fill="#02b984"
                  strokeWidth={0}
                  x={
                    index * (280 / data.length) +
                    125 +
                    (280 / data.length - 20) / 2
                  }
                />
              ))}
            </Bar>

            {/* Bottom Bar */}
            <Bar
              dataKey="expense"
              fill="#ff9f43"
              isAnimationActive={false}
              radius={[10, 10, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill="#ff9f43"
                  strokeWidth={0}
                  x={
                    index * (280 / data.length) +
                    125 +
                    (280 / data.length - 20) / 2
                  }
                />
              ))}
            </Bar>
          </BarChart>
          <div className="left-[368px] top-[28px] absolute text-[#828282] text-xs font-normal leading-[18px]">
            Expense
          </div>
          <div className="w-[10px] h-[10px] left-[350px] top-[32px] absolute bg-[#ff9f43] rounded-full" />
          <div className="left-[283px] top-[28px] absolute text-[#828282] text-xs font-normal leading-[18px]">
            Earning
          </div>
          <div className="w-[11px] h-[11px] left-[265px] top-[32px] absolute bg-[#02b984] rounded-full" />
          <div className="left-[19px] top-[28px] absolute text-white text-[15px] font-bold">
            Total Profit
          </div>
        </div>
        <div className="w-[1px] h-[100%] left-[450px] top-0 absolute bg-[#242f5e]"></div>
        <button
          type="button"
          className="px-[12px] py-[5px] left-[516px] top-[24px] absolute rounded border border-[#02b984]  inline-flex text-[#02b984] items-center "
          disabled
        >
          2023
          <div className="w-[12px] h-[12px] relative pr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-2.5 h-2.5 ml-2.5 text-[#02b984]`}
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeWidth="1" d="m1 1 4 4 4-4" />
            </svg>
          </div>
        </button>
        <button
          type="button"
          className="px-[19px] py-[8px] left-[493px] top-[303px] absolute bg-emerald-500 rounded justify-start items-center gap-[7px] inline-flex text-center text-white text-xs font-bold"
          disabled
        >
          View Report
        </button>

        <div className="left-[482px] top-[111px] absolute text-center text-white text-[32px] font-bold">
          $842.98
        </div>
        <div className="flex justify-end">
          <LineChart
            width={220}
            height={320}
            data={balance}
            margin={{
              top: 180,
              right: 44,
              left: 38,
            }}
          >
            <Line
              type="monotone"
              dataKey="totalProfit"
              stroke="#02b984"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </div>
        <div className="left-[477px] top-[162px] absolute text-center text-zinc-500 text-[10px] font-semibold leading-[14px]">
          Latest Month Balance $426.20k
        </div>
      </div>
    </>
  );
}
