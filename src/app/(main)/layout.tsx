// import Header from "./_components/header";
// import Navigation from "./_components/navigation";

import Header from "./(routes)/(main)/_components/header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex bg-black duration-300 min-h-screen flex-grow">
      <div className="w-full flex flex-grow flex-col ">
        <Header />
        {children}
      </div>
    </main>
  );
};

export default layout;
