import { CometCard } from "@/components/ui/comet-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <main className="relative grid min-h-screen grid-rows-[1fr_auto] place-items-center p-6 sm:p-10">
        <CometCard>
          <button
            type="button"
            className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 md:p-4"
            aria-label="View invite F7RA"
            style={{
              transformStyle: "preserve-3d",
              transform: "none",
              opacity: 1,
            }}
          >
            <div className="mx-2 flex-1">
              <div className="relative mt-2 aspect-[3/4] w-full">
                <img
                  loading="lazy"
                  src="/logoWhite.png"
                  alt="Galliboyz logo"
                  className="h-full w-full object-cover contrast-75"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px" }}
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight drop-shadow">
                Galliboyz
              </h1>
              <p className="mt-2 text-sm sm:text-lg text-zinc-200 drop-shadow">
                <span className="font-semibold">Coming Soon</span> &mdash;
                Born on the Streets.
              </p>
            </div>

            <div className="mt-6 flex flex-col items-center gap-2">
              <a
                href="https://instagram.com/galliboyz7"
                rel="noopener noreferrer"
                target="_blank"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white transition hover:underline focus:outline-none"
                aria-label="Instagram galliboyz7"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm9 3.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 8.25A3.75 3.75 0 1 0 12 15.75 3.75 3.75 0 0 0 12 8.25z"
                  />
                </svg>
                <span className="transition group-hover:underline">
                  @galliboyz7
                </span>
              </a>
              {/* <a
                href="mailto:support@galliboyz.com"
                className="group inline-flex items-center gap-2 text-sm font-medium text-white transition hover:underline focus:outline-none"
                aria-label="Email support@galliboyz.com"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.659 1.591l-7.091 7.091a2.25 2.25 0 0 1-3.182 0L3.409 8.584A2.25 2.25 0 0 1 2.75 6.993V6.75"
                  />
                </svg>
                <span className="underline decoration-transparent transition group-hover:decoration-white/60">
                  support@galliboyz.com
                </span>
              </a> */}
            </div>
          </button>
        </CometCard>

        <footer className="pb-6 text-center text-xs text-zinc-500">
          Built with love. Fashion in orbit soon.
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Galliboyz
          </p>
        </footer>
      </main>
    </div>
  );
}
