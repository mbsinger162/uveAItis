export const maxDuration = 120;

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className="container sticky top-0 z-40 bg-white">
        <div className="h-16 border-b border-b-slate-200 py-4">
          <nav className="ml-4 pl-6">
            <a href="#" className="hover:text-slate-600 cursor-pointer">
              Home
            </a>
          </nav>
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <footer className="m-auto p-4">
        <a>
          Powered by GPT-4 and LangChainAI | Built by Mac Singer, MD
          {/* <br></br>
            Built by <a href="https://www.linkedin.com/in/mac-singer-a11908111/"> Mac Singer, MD </a> */}
        </a>
      </footer>
    </div>
  );
};

export default HomeLayout;
