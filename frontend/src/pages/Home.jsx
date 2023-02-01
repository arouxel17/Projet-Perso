import Counter from "../components/Counter";
import logo from "../assets/logo.svg";

export default function Home() {
  return (
    <header className="flex flex-col items-center">
      <img src={logo} className="App-logo w-12" alt="logo" />
      <p className="">Je me prépare</p>
      <Counter />
    </header>
  );
}
