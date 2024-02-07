import Faq from "./components/Faq";

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1 className="navForNow">Nav bar here</h1>
        <Faq />
        <div className="faqContainer">
          <p className="titleFaq">FAQs</p>
        </div>
      </div>
    </main>
  );
}
