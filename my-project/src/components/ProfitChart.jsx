import ApexCharts from "react-apexcharts";

export default function ProfitChart() {
  const chartOptions = {
    // Your chart options here
    series: [90, 85, 70],
    colors: ["#1C64F2", "#16BDCA", "#FDBA8C"],
    chart: {
      height: "380px",
      type: "radialBar",
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        track: {
          background: "#E5E7EB",
        },
        dataLabels: {
          show: false,
        },
        hollow: {
          margin: 0,
          size: "32%",
        },
      },
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -23,
        bottom: -20,
      },
    },
    labels: ["Done", "In progress", "To do"],
    legend: {
      show: true,
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
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

  const chartSeries = [90, 85, 70];
  return (
    <>
      <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
        <div className="flex justify-between mb-3">
          <div className="flex items-center">
            <div className="flex justify-center items-center">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white pr-1">
                Your team's progress
              </h5>
              <svg
                data-popover-target="chart-info"
                data-popover-placement="bottom"
                className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ml-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
              </svg>
              <div
                data-popover
                id="chart-info"
                role="tooltip"
                className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
              >
                {/* Popover content */}
                <div class="p-3 space-y-2">
                  <h3 class="font-semibold text-gray-900 dark:text-white">
                    Activity growth - Incremental
                  </h3>
                  <p>
                    Report helps navigate cumulative growth of community
                    activities. Ideally, the chart should have a growing trend,
                    as stagnating chart signifies a significant decrease of
                    community activity.
                  </p>
                  <h3 class="font-semibold text-gray-900 dark:text-white">
                    Calculation
                  </h3>
                  <p>
                    For each date bucket, the all-time volume of activities is
                    calculated. This means that activities in period n contain
                    all activities up to period n, plus the activities generated
                    by your community in period.
                  </p>
                  <a
                    href="#"
                    class="flex items-center font-medium text-blue-600 dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Read more{" "}
                    <svg
                      class="w-2 h-2 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
                <div data-popper-arrow></div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* Rest of the content */}
        <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
          <div class="grid grid-cols-3 gap-3 mb-2">
            <dl class="bg-orange-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
              <dt class="w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-sm font-medium flex items-center justify-center mb-1">
                12
              </dt>
              <dd class="text-orange-600 dark:text-orange-300 text-sm font-medium">
                To do
              </dd>
            </dl>
            <dl class="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
              <dt class="w-8 h-8 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-sm font-medium flex items-center justify-center mb-1">
                23
              </dt>
              <dd class="text-teal-600 dark:text-teal-300 text-sm font-medium">
                In progress
              </dd>
            </dl>
            <dl class="bg-blue-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
              <dt class="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-sm font-medium flex items-center justify-center mb-1">
                64
              </dt>
              <dd class="text-blue-600 dark:text-blue-300 text-sm font-medium">
                Done
              </dd>
            </dl>
          </div>
          <button
            data-collapse-toggle="more-details"
            type="button"
            class="hover:underline text-xs text-gray-500 dark:text-gray-400 font-medium inline-flex items-center"
          >
            Show more details{" "}
            <svg
              class="w-2 h-2 ml-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="more-details"
            class="border-gray-200 border-t dark:border-gray-600 pt-3 mt-3 space-y-2 hidden"
          >
            <dl class="flex items-center justify-between">
              <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal">
                Average task completion rate:
              </dt>
              <dd class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
                <svg
                  class="w-2.5 h-2.5 mr-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13V1m0 0L1 5m4-4 4 4"
                  />
                </svg>{" "}
                57%
              </dd>
            </dl>
            <dl class="flex items-center justify-between">
              <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal">
                Days until sprint ends:
              </dt>
              <dd class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-gray-600 dark:text-gray-300">
                13 days
              </dd>
            </dl>
            <dl class="flex items-center justify-between">
              <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal">
                Next meeting:
              </dt>
              <dd class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-gray-600 dark:text-gray-300">
                Thursday
              </dd>
            </dl>
          </div>
        </div>

        {/* Radial Chart */}
        <div className="py-6" id="radial-chart">
          <ApexCharts
            options={chartOptions}
            series={chartSeries}
            type="radialBar"
            height={380}
          />
        </div>
        <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
          <div className="flex justify-between items-center pt-5">
            {/* Dropdown button */}
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="lastDaysdropdown"
              data-dropdown-placement="bottom"
              className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
              type="button"
            >
              Last 7 days
              <svg
                className="w-2.5 m-2.5 ml-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="lastDaysdropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              {/* Dropdown options */}
            </div>
            <a
              href="#"
              className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
            >
              Progress report
              <svg
                className="w-2.5 h-2.5 ml-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
