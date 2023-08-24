export default function ActivityOverview() {
  return (
    <>
      <div className="w-[436px] h-[602px] pl-6 pt-6 pb-[60px] bg-slate-800 rounded-lg shadow flex-col justify-start items-start gap-6 inline-flex">
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="text-neutral-300 text-xl font-bold leading-relaxed">
            Activity overview
          </div>
          <div className="justify-center items-center gap-[7px] inline-flex">
            <div className="w-6 h-6 justify-center items-center flex">
              <div className="grow shrink basis-0 self-stretch pl-[5.70px] pr-[6.25px] pt-[4.25px] pb-[4.75px] justify-center items-center inline-flex">
                <div className="origin-top-left w-3 h-[15px] relative mr-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7257 4.25L11.7257 19.25"
                      stroke="#1AA053"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.70131 10.2998L11.7253 4.2498L17.7503 10.2998"
                      stroke="#1AA053"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="text-white text-base font-normal leading-7">
              16% this month
            </div>
          </div>
        </div>
        {/* <div className="pb-[33px] justify-start items-start gap-4 inline-flex">
          <div className="w-[21px] relative">
            <div className="w-[21px] h-[21px] left-0 top-0 absolute rounded-full border border-orange-400" />
            <div className="w-[21px] h-[21px] left-0 top-[95px] absolute rounded-full border border-orange-400" />
            <div className="w-[21px] h-[21px] left-0 top-[188px] absolute rounded-full border border-orange-400" />
            <div className="w-[21px] h-[21px] left-0 top-[281px] absolute rounded-full border border-orange-400" />
            <div className="w-[21px] h-[21px] left-0 top-[374px] absolute rounded-full border border-orange-400" />
            <div className="w-[74px] h-[0px] left-[10px] top-[21px] absolute origin-top-left rotate-90 border border-slate-500"></div>
            <div className="w-[72px] h-[0px] left-[10px] top-[116px] absolute origin-top-left rotate-90 border border-slate-500"></div>
            <div className="w-[72px] h-[0px] left-[10px] top-[209px] absolute origin-top-left rotate-90 border border-slate-500"></div>
            <div className="w-[72px] h-[0px] left-[10px] top-[302px] absolute origin-top-left rotate-90 border border-slate-500"></div>
            <div className="w-[60px] h-[0px] left-[10px] top-[395px] absolute origin-top-left rotate-90 border border-slate-500"></div>
          </div>
          <div className="flex-col justify-start items-start gap-8 inline-flex">
            <div className="w-[289px] h-[61px] flex-col justify-start items-start flex">
              <div className="w-[372px]">
                <span className="text-neutral-300 text-sm font-bold leading-normal">
                  Nick Mark
                </span>
                <span className="text-neutral-300 text-sm font-normal leading-normal">
                  {" "}
                  Mentioned{" "}
                </span>
                <span className="text-neutral-300 text-sm font-bold leading-normal">
                  Sara Smith
                </span>
                <span className="text-neutral-300 text-sm font-normal leading-normal">
                  {" "}
                  In New Post
                </span>
              </div>
              <div className="w-[394px] text-neutral-400 text-xs font-normal leading-[21px]">
                11 JUL 8:10 PM
              </div>
            </div>
            <div className="w-[289px] h-[61px] flex-col justify-start items-start flex">
              <div className="w-[372px]">
                <span className="text-neutral-300 text-sm font-normal leading-normal">
                  The{" "}
                </span>
                <span className="text-neutral-300 text-sm font-bold leading-normal">
                  Post Name{" "}
                </span>
                <span className="text-neutral-300 text-sm font-normal leading-normal">
                  was removed by{" "}
                </span>
                <span className="text-neutral-300 text-sm font-bold leading-normal">
                  Nick Mark
                </span>
              </div>
              <div className="w-[394px] text-neutral-400 text-xs font-normal leading-[21px]">
                11 JUL 9:10 PM
              </div>
            </div>
            <div className="w-[289px] h-[61px] flex-col justify-start items-start flex">
              <div className="w-[372px]">
                <span className="text-neutral-300 text-sm font-bold leading-normal">
                  Patrick Sulivan
                </span>
                <span className="text-neutral-300 text-sm font-normal leading-normal">
                  {" "}
                  Published a New Post
                </span>
              </div>
              <div className="w-[394px] text-neutral-400 text-xs font-normal leading-[21px]">
                12 JUL 10:10 PM
              </div>
            </div>
            <div className="w-[289px] h-[61px] flex-col justify-start items-start flex">
              <div className="w-[372px]">
                <span className="text-neutral-300 text-sm font-bold leading-normal">
                  240+ users
                </span>
                <span className="text-neutral-300 text-sm font-normal leading-normal">
                  {" "}
                  have subscribed to Newsletter #1
                </span>
              </div>
              <div className="w-[394px] text-neutral-400 text-xs font-normal leading-[21px]">
                18 JUL 19:10 PM
              </div>
            </div>
            <div className="w-[289px] h-[61px] flex-col justify-start items-start flex">
              <div className="w-[372px]">
                <span className="text-neutral-300 text-sm font-normal leading-normal">
                  The{" "}
                </span>
                <span className="text-neutral-300 text-sm font-bold leading-normal">
                  Post Name
                </span>
                <span className="text-neutral-300 text-sm font-normal leading-normal">
                  {" "}
                  was suspended by{" "}
                </span>
                <span className="text-neutral-300 text-sm font-bold leading-normal">
                  Nick Mark
                </span>
              </div>
              <div className="w-[394px] text-neutral-400 text-xs font-normal leading-[21px]">
                11 JUL 9:10 PM
              </div>
            </div>
          </div>
        </div> */}
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="w-[21px] h-[21px] mt-1 -left-3 absolute rounded-full border-2 border-orange-400 " />
            <span className="text-neutral-300 text-sm font-bold">
              Nick Mark
            </span>
            <span className="text-neutral-300 text-sm font-normal leading-normal">
              {" "}
              Mentioned{" "}
            </span>
            <span className="text-neutral-300 text-sm font-bold leading-normal">
              Sara Smith
            </span>
            <span className="text-neutral-300 text-sm font-normal leading-normal">
              {" "}
              In New Post
            </span>
            <div className="w-[394px] text-neutral-400 text-xs font-normal leading-[21px]">
              11 JUL 8:10 PM
            </div>
          </li>

          <li className="mb-10 ml-4">
            <div className="w-[21px] h-[21px] mt-1 -left-3 absolute rounded-full border-2 border-orange-400 " />
            <span className="text-neutral-300 text-sm font-normal leading-normal">
              The{" "}
            </span>
            <span className="text-neutral-300 text-sm font-bold leading-normal">
              Post Name{" "}
            </span>
            <span className="text-neutral-300 text-sm font-normal leading-normal">
              was removed by{" "}
            </span>
            <span className="text-neutral-300 text-sm font-bold leading-normal">
              Nick Mark
            </span>
            <div className="w-[394px] text-neutral-400 text-xs font-normal leading-[21px]">
              11 JUL 9:10 PM
            </div>
          </li>

          <li className="mb-10 ml-4">
            <div className="w-[21px] h-[21px] mt-1 -left-3 absolute rounded-full border-2 border-orange-400 " />
            <span className="text-neutral-300 text-sm font-bold leading-normal">
              Patrick Sulivan
            </span>
            <span className="text-neutral-300 text-sm font-normal leading-normal">
              {" "}
              Published a New Post
            </span>
            <div className="w-[394px] text-neutral-400 text-xs font-normal leading-[21px]">
              12 JUL 10:10 PM
            </div>
          </li>

          <li className="mb-10 ml-4">
            <div className="w-[21px] h-[21px] mt-1 -left-3 absolute rounded-full border-2 border-orange-400 " />
            <span className="text-neutral-300 text-sm font-bold leading-normal">
              240+ users
            </span>
            <span className="text-neutral-300 text-sm font-normal leading-normal">
              {" "}
              have subscribed to Newsletter #1
            </span>
            <div className="w-[394px] text-neutral-400 text-xs font-normal leading-[21px]">
              18 JUL 19:10 PM
            </div>
          </li>

          <li className="mb-10 ml-4">
            <div className="w-[21px] h-[21px] mt-1 -left-3 absolute rounded-full border-2 border-orange-400 " />
            <span className="text-neutral-300 text-sm font-normal leading-normal">
              The{" "}
            </span>
            <span className="text-neutral-300 text-sm font-bold leading-normal">
              Post Name
            </span>
            <span className="text-neutral-300 text-sm font-normal leading-normal">
              {" "}
              was suspended by{" "}
            </span>
            <span className="text-neutral-300 text-sm font-bold leading-normal">
              Nick Mark
            </span>
            <div className="w-[394px] text-neutral-400 text-xs font-normal leading-[21px]">
              11 JUL 9:10 PM
            </div>
          </li>
        </ol>
      </div>
    </>
  );
}
