export default function Card() {
  const radius = 26;
  const circleStyle = {
    stroke: "#ffffff",
    strokeWidth: 3,
    strokeDasharray: 60,
    strokeDashoffset: 60,
    fill: "transparent",
    strokeLinecap: "round",
  };
  return (
    <>
      <div className="w-[1126px] h-[100px] justify-center items-start gap-[25px] inline-flex ">
        {/* total cost */}
        <div className="grow shrink basis-0 self-stretch px-[27px] py-8 bg-[#0BB885] rounded-lg justify-center items-center gap-5 inline-flex">
          <div className="w-[7px] h-[40px] mr-10 relative">
            <svg className={`w-${2 * radius} h-${2 * radius}`}>
              <defs>
                <radialGradient
                  id="innerCircleGradient"
                  cx="50%"
                  cy="50%"
                  r="50%"
                >
                  <stop
                    offset="100%"
                    style={{ stopColor: "#dddd", stopOpacity: 0.8 }}
                  />
                </radialGradient>
              </defs>
              <circle
                className="w-11 h-11 left-[6px] top-[6px] absolute opacity-25  "
                cx={radius}
                cy={radius}
                r={20}
                strokeWidth="8"
                fill="url(#innerCircleGradient)"
              />
              <circle
                style={circleStyle}
                cx={radius}
                cy={radius}
                r={24}
                className="w-14 h-14 left-0 top-0 absolute rounded-sm"
                strokeWidth="6"
              />
            </svg>
          </div>
          <div className="flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="text-[#ffffff] text-base font-bold leading-normal">
              Total Cost
            </div>
            <div className="text-[#ffffff] text-sm font-medium leading-tight">
              $31.868
            </div>
          </div>
        </div>

        <div className="grow shrink basis-0 self-stretch px-[27px] py-8 bg-[#171e37] rounded-lg justify-center items-center gap-5 inline-flex">
          <div className="w-8 h-8 px-0.5 pt-[3px] pb-1 justify-center items-center flex">
            <div className="w-7 h-[25px] relative">
              <svg
                width="28"
                height="25"
                viewBox="0 0 28 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.2727 22.5H19.0909C19.7938 22.5 20.3636 23.0597 20.3636 23.75C20.3636 24.4404 19.7938 25 19.0909 25H8.90908C8.20617 25 7.63635 24.4404 7.63635 23.75C7.63635 23.0597 8.20617 22.5 8.90908 22.5H12.7273V16.25H15.2727V22.5Z"
                  fill="#98FFE0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.09091 5H2.54545V7.5C2.54545 8.88071 3.68509 10 5.09091 10V5ZM2.54545 2.5C1.13964 2.5 0 3.61929 0 5V7.5C0 10.2614 2.27928 12.5 5.09091 12.5H7.63636V2.5H2.54545Z"
                  fill="#98FFE0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.9091 5H25.4545V7.5C25.4545 8.88071 24.3149 10 22.9091 10V5ZM25.4545 2.5C26.8604 2.5 28 3.61929 28 5V7.5C28 10.2614 25.7207 12.5 22.9091 12.5H20.3636V2.5H25.4545Z"
                  fill="#98FFE0"
                />
                <path
                  d="M5.09088 2C5.09088 0.895431 5.98631 0 7.09088 0H20.9091C22.0136 0 22.9091 0.895431 22.9091 2V10.75C22.9091 15.1683 19.3273 18.75 14.9091 18.75H13.0909C8.67261 18.75 5.09088 15.1683 5.09088 10.75V2Z"
                  fill="#0BB885"
                />
              </svg>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="text-white text-base font-bold leading-normal">
              Total Sales
            </div>
            <div className="text-gray-500 text-sm font-medium leading-tight">
              $66,053
            </div>
          </div>
        </div>

        <div className="grow shrink basis-0 self-stretch px-[27px] py-8 bg-[#171e37] rounded-lg justify-center items-center gap-5 inline-flex">
          <div className="w-8 h-8 p-1 justify-center items-center flex">
            <div className="w-7 h-7 relative">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="2.80005"
                  width="28"
                  height="25.2"
                  rx="3"
                  fill="#0BB885"
                />
                <path
                  d="M0 5.80005C0 4.1432 1.34315 2.80005 3 2.80005H25C26.6569 2.80005 28 4.14319 28 5.80005V11.2H0V5.80005Z"
                  fill="#98FFE0"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.00004 0C7.77324 0 8.40004 0.626801 8.40004 1.4V4.2C8.40004 4.9732 7.77324 5.6 7.00004 5.6C6.22684 5.6 5.60004 4.9732 5.60004 4.2V1.4C5.60004 0.626801 6.22684 0 7.00004 0Z"
                  fill="#0BB885"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 0C21.7732 0 22.4 0.626801 22.4 1.4V4.2C22.4 4.9732 21.7732 5.6 21 5.6C20.2268 5.6 19.6 4.9732 19.6 4.2V1.4C19.6 0.626801 20.2268 0 21 0Z"
                  fill="#0BB885"
                />
              </svg>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="text-white text-base font-bold leading-normal">
              This Week
            </div>
            <div className="text-gray-500 text-sm font-medium leading-tight">
              $35,000,00
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-[27px] py-8 bg-[#171e37] rounded-lg justify-center items-center gap-5 inline-flex">
          <div className="w-8 h-8 relative">
            <svg
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.8 5.40002C8.66397 5.40002 6.5759 6.03343 4.79985 7.22015C3.0238 8.40687 1.63953 10.0936 0.822106 12.067C0.00467944 14.0405 -0.209197 16.212 0.207524 18.307C0.624244 20.402 1.65284 22.3264 3.16325 23.8368C4.67366 25.3472 6.59803 26.3758 8.69303 26.7925C10.788 27.2092 12.9595 26.9953 14.933 26.1779C16.9064 25.3605 18.5932 23.9762 19.7799 22.2002C20.9666 20.4241 21.6 18.3361 21.6 16.2C21.6 15.4544 20.9956 14.85 20.25 14.85H13.5C12.7544 14.85 12.15 14.2456 12.15 13.5V6.75002C12.15 6.00444 11.5456 5.40002 10.8 5.40002Z"
                fill="#0BB885"
              />
              <path
                d="M16.2002 0C15.8422 0 15.4988 0.142232 15.2456 0.395406C14.9925 0.64858 14.8502 0.991958 14.8502 1.35V10.8C14.8502 11.158 14.9925 11.5014 15.2456 11.7546C15.4988 12.0078 15.8422 12.15 16.2002 12.15L25.6502 12.15C26.0083 12.15 26.3516 12.0078 26.6048 11.7546C26.858 11.5014 27.0002 11.158 27.0002 10.8C27.0002 7.93566 25.8624 5.18864 23.837 3.16325C21.8116 1.13785 19.0646 0 16.2002 0Z"
                fill="#98FFE0"
              />
            </svg>
          </div>
          <div className="flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="text-white text-base font-bold leading-normal">
              Revenue
            </div>
            <div className="text-gray-500 text-sm font-medium leading-tight">
              $63,00K
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 self-stretch px-[27px] py-8 bg-[#171e37] rounded-lg justify-center items-center gap-5 inline-flex">
          <div className="w-8 h-8 p-0.5 justify-center items-center flex">
            <div className="w-7 h-7 relative">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 25.0001V8.60005C28 6.94319 26.6569 5.60005 25 5.60005H4.2V2.80005H0V25C0 26.6569 1.34315 28 3 28H25C26.6569 28 28 26.6569 28 25.0001Z"
                  fill="#0BB885"
                />
                <path
                  d="M19.6 16.8C19.6 15.2536 20.8536 14 22.4 14H28V19.6H22.4C20.8536 19.6 19.6 18.3464 19.6 16.8Z"
                  fill="#98FFE0"
                />
                <path
                  d="M2.8 0C1.2536 0 0 1.2536 0 2.8C0 4.3464 1.2536 5.6 2.8 5.6H23.8C24.2909 5.6 24.7621 5.68422 25.2 5.83899V1.4C25.2 0.626801 24.5732 0 23.8 0H2.8Z"
                  fill="#98FFE0"
                />
              </svg>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-1 inline-flex">
            <div className="text-white text-base font-bold leading-normal">
              $1250
            </div>
            <div className="text-gray-500 text-sm font-medium leading-tight">
              Last payment
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
