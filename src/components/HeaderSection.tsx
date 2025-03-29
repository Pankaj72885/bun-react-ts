import reactLogo from "../assets/react.svg";
import Button from "./HeaderComponents/Button";
export default function HeaderSection() {
  return (
    <header className="shadow-xl">
      <div className="flex justify-between items-center px-5 py-5">
        <img src={reactLogo} alt="React Logo" className="w-12" />
        <nav className="flex gap-5">
          <Button name={"Pricing"}></Button>
          <Button name={"About"}></Button>
          <Button name={"Contact"}></Button>
        </nav>
      </div>
    </header>
  );
}
