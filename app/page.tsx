import Faq from "./components/Faq";

export default function Home() {
  return (
    <main>
      <div className="container">
        {/* nav bar here */}
        <h1 className="navForNow">Nav bar here</h1>
        <Faq />
      </div>
    </main>
  );
}
