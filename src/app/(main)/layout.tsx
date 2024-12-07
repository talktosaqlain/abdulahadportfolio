import Footer from "./_components/footer";
import Header from "./_components/header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" bg-black duration-300 min-h-screen flex-grow ">
      <div className="w-full flex flex-grow flex-col ">
        <Header />
        <div className="px-10">{children}</div>
      </div>
      <Footer />
    </main>
  );
};

export default layout;
