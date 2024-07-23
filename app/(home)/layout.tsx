const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto flex flex-col space-y-4 bg-light-blue-50">
      <header className="container sticky top-0 z-40 bg-light-blue-50">
        <div className="h-16 border-b border-b-light-blue-200 py-4">
          <nav className="ml-4 pl-6">
            <a href="#" className="text-light-blue-800 hover:text-light-blue-600 cursor-pointer">
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
      <footer className="m-auto p-4 text-light-blue-700">
        <a>
          Powered by GPT-4o and LangChainAI | Built by Mac Singer, MD
        </a>
      </footer>
    </div>
  );
};

export default HomeLayout;
