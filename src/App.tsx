import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import MainSection from "./components/MainSection";

export default function App() {
    return (
      <>
        <div className="bg-gray-900 text-gray-100 h-screen flex justify-center items-center">
          <div className=" border bg-gray-800 border-gray-500">
            <HeaderSection />
            <MainSection />
            <FooterSection />
          </div>
        </div>
      </>
    );
  }