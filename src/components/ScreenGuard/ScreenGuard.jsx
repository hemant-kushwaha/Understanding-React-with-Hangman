export default function ScreenGuard({ children }) {
  return (
    <>
      <div className="lg:hidden flex items-center justify-center min-h-screen bg-[#e5e7eb] text-center px-4 sm:px-6">
        <div className="max-w-md w-full">
          
          <h1 className="text-xl sm:text-2xl md:text-2xl md:whitespace-nowrap bg-[#3b82f6] px-2 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-3xl font-bold text-white mb-4">
            Desktop Experience Recommended
          </h1>

          <p className="text-black font-semibold text-sm sm:text-base md:text-lg">
            Currently optimized for desktop screens. <br />
            Please open this app on a laptop or desktop.
          </p>

        </div>
      </div>

      <div className="hidden lg:block">{children}</div>
    </>
  );
}