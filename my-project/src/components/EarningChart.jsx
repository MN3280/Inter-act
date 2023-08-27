import { useState } from "react";
import { RadialBarChart, RadialBar } from "recharts";
import { earningChart } from "../../data/earningChartData";

export default function EarningChart() {
  const data = earningChart;
  const [isOpen, setIsOpen] = useState(false);
  const [chartType, setChartType] = useState("valueLastWeek");
  const [selectedOption, setSelectedOption] = useState("This Week");

  const options = [
    { value: "valueLastWeek", label: "Last Week" },
    { value: "valueTwoWeek", label: "2 Weeks Ago" },
    { value: "valueLastMonth", label: "Last Month" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleChartTypeChange = (newChartType, e) => {
    e.preventDefault();
    setChartType(newChartType);
    setIsOpen(false);
    const selectedLabel =
      options.find((option) => option.value === newChartType)?.label ||
      "This Week";
    setSelectedOption(selectedLabel);
  };

  const selectedData = chartType === "valueLastWeek" ? [data[0]] : [data[1]];

  return (
    <>
      <div className="w-[290px] h-[222px] p-5 bg-[#171e37] rounded-[5px] flex-col justify-center items-start gap-[22px] inline-flex">
        <div className="justify-start items-start gap-[110px] inline-flex ">
          <div className="text-white text-[15px] font-bold ">Earnings</div>
          {/* dropdown */}
          <div className="relative inline-flex items-center gap-[5px] mt-2">
            <button
              onClick={toggleDropdown}
              className="text-slate-500 text-[10px] font-normal whitespace-nowrap focus:outline-none"
            >
              {selectedOption}
            </button>
            <button
              onClick={toggleDropdown}
              className="w-[15px] h-[15px] justify-center items-center flex focus:outline-none "
            >
              <div className="grow shrink basis-0 self-stretch px-[3px] justify-center items-center inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-2.5 h-2.5 ml-2.5 text-slate-500`}
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="1"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </div>
            </button>
            {isOpen && (
              <div className="absolute top-8 left-0 w-[120px] bg-[#2e4c85] btotalSales rounded shadow z-10">
                {options.map((option, index) => (
                  <button
                    key={index}
                    value={option.value}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#4f6899] focus:outline-none w-full text-left"
                    onClick={(e) => handleChartTypeChange(option.value, e)}
                    disabled={option.value === "valueLastMonth"}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="justify-center items-center gap-[23px] inline-flex">
          {chartType === "valueLastWeek" && (
            <>
              <RadialBarChart
                width={130}
                height={130}
                cx={65}
                cy={65}
                innerRadius={50}
                outerRadius={100}
                barSize={10}
                data={selectedData}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  minAngle={20}
                  dataKey="totalOrder"
                  fill="#ff814a"
                  cornerRadius={10}
                  background={{ fill: "#1f2848" }}
                />
                <RadialBar
                  minAngle={20}
                  dataKey="totalSales"
                  fill="#0fb884"
                  cornerRadius={10}
                  background={{ fill: "#1f2848" }}
                />
              </RadialBarChart>
              <div className="flex-col justify-start items-start gap-[30px] inline-flex">
                <div className="justify-center items-center gap-[15px] inline-flex">
                  <div className="w-[8px] h-[8px] bg-[#0fb884] rounded-full" />
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-white text-[10px] font-normal leading-[17px]">
                      Total Sales
                    </div>
                    <div className="text-gray-400 text-[10px] font-medium leading-[17px]">
                      {selectedData[0].totalSales}K
                    </div>
                  </div>
                </div>
                <div className="justify-center items-center gap-[15px] inline-flex">
                  <div className="w-[8px] h-[8px] bg-[#ff814a] rounded-full" />
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-white text-[10px] font-normal leading-[17px]">
                      TotalOrders
                    </div>
                    <div className="text-gray-400 text-[10px] font-medium leading-[17px]">
                      {selectedData[0].totalOrder}K
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {chartType === "valueTwoWeek" && (
            <>
              <RadialBarChart
                width={130}
                height={130}
                cx={65}
                cy={65}
                innerRadius={50}
                outerRadius={100}
                barSize={10}
                data={selectedData}
                startAngle={90}
                endAngle={-270}
              >
                <RadialBar
                  minAngle={20}
                  dataKey="totalOrder"
                  fill="#ff814a"
                  cornerRadius={15}
                  background={{ fill: "#1f2848" }}
                />
                <RadialBar
                  minAngle={20}
                  dataKey="totalSales"
                  fill="#0fb884"
                  cornerRadius={15}
                  background={{ fill: "#1f2848" }}
                />
              </RadialBarChart>
              <div className="flex-col justify-start items-start gap-[30px] inline-flex">
                <div className="justify-center items-center gap-[15px] inline-flex">
                  <div className="w-[8px] h-[8px] bg-[#0fb884] rounded-full" />
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-white text-[10px] font-normal leading-[17px]">
                      Total Sales
                    </div>
                    <div className="text-gray-400 text-[10px] font-medium leading-[17px]">
                      {selectedData[0].totalSales}K
                    </div>
                  </div>
                </div>
                <div className="justify-center items-center gap-[15px] inline-flex">
                  <div className="w-[8px] h-[8px] bg-[#ff814a] rounded-full" />
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-white text-[10px] font-normal leading-[17px]">
                      TotalOrders
                    </div>
                    <div className="text-gray-400 text-[10px] font-medium leading-[17px]">
                      {selectedData[0].totalOrder}K
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
