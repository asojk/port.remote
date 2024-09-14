import { TiltShineCard } from "./components/TiltShineCard";
import AnimatedGridButtons from "./components/AnimatedGridButtons";

function App() {
  return (
    <>
      {/*<div className="absolute right-0 top-0 -z-10 m-auto h-[75vh] w-[35vw] rounded-full bg-violet-400 opacity-100 blur-[200px]"></div>*/}
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
        className="relative min-h-screen bg-background"
      >
        <TiltShineCard />
        <div className="mb-4 text-center">
          <h1 className="title-font mb-4 lg:mb-12 text-center text-2xl font-semibold text-success-content sm:text-3xl animate-fade-in ">
            Hi all, I'm Alex.
          </h1>
          </div>
        <AnimatedGridButtons />
      </div>
    </>
  );
}

export default App;
