const Sidebar = () => {
  return (
    <>
      <div className="w-[250px] h-[1050px] p-5  bg-[#171e37] flex-col justify-start items-start gap-8 inline-flex">
        <div className="w-[132px] h-[35px] pl-[3px] pr-[30px] pt-[2px] pb-[3px] justify-start items-center gap-[9px] inline-flex">
          {/* logo */}
          <svg
            width="28"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.16 10.11C30.1601 8.11967 29.5591 6.17573 28.4357 4.53279C27.3123 2.88985 25.7188 1.6245 23.8641 0.9025C22.0094 0.18049 19.9798 0.0354902 18.0413 0.48648C16.1027 0.93747 14.3456 1.96343 13 3.42997H0.52002V29.77H26.87V17.46C27.9042 16.535 28.7318 15.4023 29.2987 14.1358C29.8656 12.8693 30.1591 11.4976 30.16 10.11ZM25.09 10.11C25.092 11.0637 24.811 11.9966 24.2826 12.7906C23.7541 13.5845 23.0021 14.2039 22.1215 14.5702C21.2409 14.9366 20.2715 15.0335 19.3358 14.8486C18.4002 14.6638 17.5404 14.2055 16.8653 13.5318C16.1902 12.8581 15.7302 11.9993 15.5434 11.064C15.3566 10.1288 15.4515 9.15907 15.816 8.27777C16.1805 7.39643 16.7983 6.64306 17.5911 6.11299C18.384 5.58292 19.3163 5.29998 20.27 5.29997C21.5466 5.29997 22.7711 5.80642 23.6747 6.70818C24.5784 7.60994 25.0874 8.83337 25.09 10.11ZM21.8 24.7H5.59002V8.49997H10.53C10.4346 9.03147 10.3844 9.57007 10.38 10.11C10.3827 12.7322 11.4255 15.2462 13.2797 17.1004C15.1338 18.9545 17.6478 19.9974 20.27 20C20.7827 19.9973 21.2943 19.9538 21.8 19.87V24.7Z"
              fill="#FF814A"
            />
          </svg>
          <div className="text-white text-sm font-bold">Inter-act</div>
        </div>
        <div className="pt-[30px] flex-col justify-start items-start gap-2 flex">
          <div className="w-[210px] flex-col justify-start items-start gap-2 flex">
            {/* home */}
            <div className="w-[210px] h-12 px-3 py-5 bg-[#1f2849] rounded-lg justify-start items-center gap-3 inline-flex">
              <div className="w-5 h-5 px-1 py-1 justify-center items-center flex">
                <div className="w-4 h-4 relative flex-col justify-start items-start flex">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 7.45345C0 6.77185 0.289293 6.12228 0.795921 5.66632L6.40604 0.617208C7.32042 -0.205735 8.7085 -0.205736 9.62288 0.617207L15.233 5.66632C15.7396 6.12228 16.0289 6.77185 16.0289 7.45345V13.5957C16.0289 14.9235 14.9525 16 13.6246 16H11.2202L11.2158 16H4.81315L4.80868 16H2.40434C1.07646 16 0 14.9235 0 13.5957V7.45345Z"
                      fill=" #0BB885"
                    />
                    <path
                      d="M5.61005 11.5884C5.61005 10.4838 6.50548 9.58838 7.61005 9.58838H8.41872C9.52329 9.58838 10.4187 10.4838 10.4187 11.5884V15.9999H5.61005V11.5884Z"
                      fill="url(#paint0_linear_121_1275)"
                    />
                    <path
                      d="M5.61005 11.5884C5.61005 10.4838 6.50548 9.58838 7.61005 9.58838H8.41872C9.52329 9.58838 10.4187 10.4838 10.4187 11.5884V15.9999H5.61005V11.5884Z"
                      fill="#98FFE0"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-gray-500 text-base font-medium leading-normal">
                Home
              </div>
            </div>
            {/* reports */}
            <div className="w-[210px] h-12 px-3 py-5 rounded-lg justify-start items-center gap-3 inline-flex">
              <div className="w-5 h-5 p-px justify-center items-center flex">
                <div className="w-[18px] h-[18px] relative flex-col justify-start items-start flex">
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] left-0 top-[3.60px] absolute"
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
              </div>
              <div className="text-gray-500 text-base font-medium leading-normal">
                Reports
              </div>
            </div>

            {/* notification */}
            <div className="w-[210px] h-12 px-3 py-5 rounded-lg justify-start items-center gap-3 inline-flex">
              <svg
                width="16"
                height="18"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.99999" cy="12.8" r="3.2" fill="#98FFE0" />
                <path
                  d="M14.8686 12.8H1.12326C0.502902 12.8 0 12.2971 0 11.6767C0 11.3721 0.123765 11.0805 0.342909 10.8688L1.04345 10.1922C1.43514 9.81386 1.65563 9.29217 1.654 8.74761L1.64694 6.39568C1.63635 2.86656 4.49431 0 8.02345 0C11.5451 0 14.4 2.85487 14.4 6.37653L14.4 8.77157C14.4 9.30201 14.6107 9.81071 14.9858 10.1858L15.6686 10.8686C15.8808 11.0808 16 11.3686 16 11.6686C16 12.2935 15.4935 12.8 14.8686 12.8Z"
                  fill="#0BB885"
                />
              </svg>
              <div className="w-[124px] text-gray-500 text-base font-medium leading-normal">
                Notifications
              </div>
              <div className="w-[18px] h-[18px] p-3 bg-[#98FFE0] rounded flex-col justify-center items-center gap-3 inline-flex">
                <div className="text-slate-900 text-xs font-medium leading-tight">
                  1
                </div>
              </div>
            </div>
            {/* settings */}
            <div className="w-[210px] h-12 px-3 py-5 rounded-lg justify-start items-center gap-3 inline-flex">
              <div className="w-5 h-5 p-px justify-center items-center flex">
                <div className="w-[18px] h-[18px] relative flex-col justify-start items-start flex">
                  <div className="w-[18px] h-[18px] relative">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.4663 3.16265C5.96327 2.88492 6.38555 2.46542 6.57233 1.92762L6.77508 1.34384C7.05449 0.539325 7.81272 0 8.66438 0H9.33567C10.1873 0 10.9456 0.539325 11.225 1.34384L11.4277 1.92763C11.6145 2.46542 12.0368 2.88492 12.5337 3.16265C13.0136 3.43081 13.5618 3.56491 14.1012 3.45897L14.8655 3.30886C15.6916 3.14662 16.5308 3.51904 16.9648 4.24043L17.2265 4.67546C17.6848 5.43743 17.5851 6.41051 16.9816 7.06362L16.556 7.52433C16.1896 7.92091 16.0324 8.46004 16.0324 8.99998C16.0324 9.53992 16.1896 10.079 16.556 10.4756L16.9816 10.9363C17.5851 11.5894 17.6848 12.5625 17.2264 13.3245L16.9648 13.7595C16.5308 14.4809 15.6916 14.8533 14.8655 14.6911L14.1013 14.541C13.5619 14.4351 13.0136 14.5692 12.5338 14.8373C12.0368 15.1151 11.6145 15.5346 11.4277 16.0724L11.225 16.6562C10.9456 17.4607 10.1873 18 9.33567 18H8.66438C7.81272 18 7.05449 17.4607 6.77508 16.6562L6.57234 16.0724C6.38555 15.5346 5.96326 15.1151 5.46628 14.8373C4.98639 14.5692 4.43814 14.435 3.89871 14.541L3.1345 14.6911C2.30843 14.8533 1.46919 14.4809 1.03524 13.7595L0.773549 13.3245C0.31519 12.5625 0.414946 11.5894 1.01837 10.9363L1.44409 10.4755C1.81048 10.079 1.96768 9.53989 1.96768 8.99998C1.96768 8.46007 1.81048 7.92096 1.44409 7.5244L1.01837 7.06362C0.414945 6.41051 0.31519 5.43742 0.773548 4.67546L1.03524 4.24043C1.46919 3.51903 2.30843 3.14662 3.1345 3.30886L3.89881 3.45897C4.43822 3.56491 4.98644 3.43082 5.4663 3.16265Z"
                        fill="#0BB885"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.9998 11.4545C10.4122 11.4545 11.5572 10.3556 11.5572 8.99996C11.5572 7.64435 10.4122 6.54541 8.9998 6.54541C7.58738 6.54541 6.44238 7.64435 6.44238 8.99996C6.44238 10.3556 7.58738 11.4545 8.9998 11.4545Z"
                        fill="#98FFE0"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="text-gray-500 text-base font-medium leading-normal">
                Settings
              </div>
            </div>

            <div className="w-[210px] h-12 px-3 py-5 rounded-lg justify-start items-center gap-3 inline-flex">
              <div className="w-5 h-5 px-1 pt-1px pb-[1px] justify-center items-center flex">
                <div className="w-4 h-[18px] relative flex-col justify-start items-start flex">
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.96205 0C9.42783 0 10.6161 1.18824 10.6161 2.65402V15.0394C10.6161 16.5052 9.42783 17.6935 7.96205 17.6935H2.65402C1.18824 17.6935 0 16.5052 0 15.0394V2.65402C0 1.18824 1.18824 0 2.65402 0H7.96205Z"
                      fill="#0BB885"
                    />
                    <path
                      d="M13.011 5.12484C12.6655 4.77935 12.1054 4.77935 11.7599 5.12484C11.4144 5.47032 11.4144 6.03047 11.7599 6.37595L13.346 7.96208H5.30804C4.81945 7.96208 4.42337 8.35816 4.42337 8.84675C4.42337 9.33534 4.81945 9.73142 5.30804 9.73142H13.346L11.7599 11.3175C11.4144 11.663 11.4144 12.2232 11.7599 12.5687C12.1054 12.9141 12.6655 12.9141 13.011 12.5687L15.4818 10.0979C16.1728 9.40689 16.1728 8.28661 15.4818 7.59563L13.011 5.12484Z"
                      fill="#98FFE0"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-gray-500 text-base font-medium leading-normal">
                Log out
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
