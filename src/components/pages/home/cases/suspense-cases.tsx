import { CasesInfo } from './data';

export function SuspenseCases() {
  return (
    <section
      className="sr-only flex min-h-screen flex-col bg-black"
      aria-busy="true"
      aria-live="polite"
    >
      <h2>Loading expertise cases</h2>

      <div className="flex flex-1 flex-col border-y *:flex-1 lg:flex-row lg:divide-x">
        {/* First Block - Headers */}
        <div className="flex flex-col divide-y max-lg:border-b">
          <div className="header flex h-[90px] flex-col justify-center gap-[30px] px-[20px] md:h-[120px] 2xl:h-[160px] 2xl:gap-[40px] 2xl:px-[40px]">
            <div className="flex h-[10px] flex-row gap-[10px]">
              {Array(CasesInfo.length)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex-1 bg-white/10" />
                ))}
            </div>

            <p className="flex flex-row items-center justify-between text-[20px] leading-none 2xl:text-[24px]">
              <span className="uppercase">_expertise</span>
              <span>Loading...</span>
            </p>
          </div>

          <div className="relative min-h-[360px] flex-1 overflow-hidden">
            {CasesInfo.map((entry, index) => (
              <div
                key={`${entry.name}_${index}_loading`}
                className="absolute left-10 top-1/2 -translate-y-1/2 opacity-30"
              >
                <p className="text-[45px] font-medium uppercase md:text-[60px] 2xl:text-[80px]">
                  0{index + 1}/<br /> {entry.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Block - Details */}
        <div className="flex flex-1 flex-col *:flex-1 lg:flex-row">
          {CasesInfo.map((entry, index) => (
            <div
              key={`${entry.name}_${index}_details_loading`}
              className="flex min-h-[720px] flex-col divide-y *:flex-1"
            >
              {entry.blockChainGroups && (
                <div className="flex flex-col justify-center gap-[20px] p-[20px] max-sm:min-h-[320px] 2xl:gap-[40px] 2xl:px-[40px]">
                  <p className="text-[20px] uppercase opacity-50 2xl:text-[24px]">
                    blockchain group
                  </p>
                  <div className="flex flex-row flex-wrap gap-[10px] opacity-30 2xl:gap-[20px]">
                    {entry.blockChainGroups.map((chain) => (
                      <div
                        key={chain.name}
                        className="border px-[24px] py-[12px] text-[16px] 2xl:text-[20px]"
                      >
                        {chain.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col justify-center gap-[20px] p-[20px] max-sm:min-h-[320px] 2xl:gap-[40px] 2xl:px-[40px]">
                <p className="text-[20px] uppercase opacity-50 2xl:text-[24px]">
                  About
                </p>
                <p className="text-[16px] opacity-30 2xl:text-[20px]">
                  {entry.about}
                </p>
              </div>

              {entry.notableProjects && (
                <div className="flex flex-col justify-center gap-[20px] p-[20px] max-sm:min-h-[320px] 2xl:gap-[40px] 2xl:px-[40px]">
                  <p className="text-[20px] uppercase opacity-50 2xl:text-[24px]">
                    Notable Projects
                  </p>
                  <div className="flex flex-row flex-wrap gap-5 opacity-30">
                    {entry.notableProjects.map((project) => (
                      <div
                        key={project.name}
                        className="border px-[24px] py-[12px] text-[16px] 2xl:text-[20px]"
                      >
                        {project.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="sr-only" role="status">
        Loading expertise content...
      </div>
    </section>
  );
}
