import { useState } from "react";
import ApexCharts from "react-apexcharts";

export default function EarningChart({ percent }) {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Last Week", "2 Weeks Ago", "Last Month"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const chartOptions = {
    series: [85, 70],
    colors: ["#34D399", "#ff814a"],
    chart: {
      height: "900px",
      type: "radialBar",
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        track: {
          background: "#1f2849",
        },
        dataLabels: {
          show: false,
        },
        hollow: {
          margin: 0,
          size: "40%",
        },
      },
    },
    grid: {
      show: false,
      strokeDashArray: 1,
      padding: {
        left: 2,
        right: 2,
        // top: -,
        // bottom: -20,
      },
    },
    yaxis: {
      show: false,
      labels: {
        formatter: function (value) {
          return value + "%";
        },
      },
    },
  };

  const chartSeries = [50, 45];

  return (
    <>
      <div className="w-[284px] h-[219.75px] p-5 bg-[#171e37] rounded-[5px] flex-col justify-center items-start gap-[25px] inline-flex">
        <div className="justify-start items-start gap-[110px] inline-flex">
          <div className="text-white text-[15px] font-bold leading-relaxed">
            Earnings
          </div>
          {/* dropdown */}
          <div className="relative inline-flex items-center gap-[5px]">
            <button
              onClick={toggleDropdown}
              className="text-slate-500 text-[10px] font-normal whitespace-nowrap focus:outline-none"
            >
              This Week
            </button>
            <button
              onClick={toggleDropdown}
              className="w-[15px] h-[15px] justify-center items-center flex focus:outline-none "
            >
              <div className="grow shrink basis-0 self-stretch px-[3.13px] justify-center items-center inline-flex">
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
              <div className="absolute top-8 left-0 w-[120px] bg-[#2e4c85] border rounded shadow">
                {options.map((option, index) => (
                  <button
                    key={index}
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#4f6899] focus:outline-none w-full text-left"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="justify-center items-center gap-[23.13px] inline-flex">
          <div className="py-6" id="radial-chart">
            <ApexCharts
              options={chartOptions}
              series={chartSeries}
              type="radialBar"
              height={200}
            />
          </div>

          <div className="flex-col justify-start items-start gap-[30px] inline-flex">
            <div className="justify-center items-center gap-[15px] inline-flex">
              <div className="w-[8.13px] h-[8.13px] bg-emerald-500 rounded-full" />
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-white text-[10px] font-normal leading-[17.50px]">
                  Total Sales
                </div>
                <div className="text-gray-400 text-[10px] font-medium leading-[17.50px]">
                  251K
                </div>
              </div>
            </div>
            <div className="justify-center items-center gap-[15px] inline-flex">
              <div className="w-[8.13px] h-[8.13px] bg-orange-400 rounded-full" />
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-white text-[10px] font-normal leading-[17.50px]">
                  Total Orders
                </div>
                <div className="text-gray-400 text-[10px] font-medium leading-[17.50px]">
                  176K
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
