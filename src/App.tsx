import { Suspense } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Techonology from "./components/technologies/Techonology"
import type { Itechnology } from "./types/type"

const techFetch = async (): Promise<Itechnology[]> => {
  const res = await fetch('/data.json')
  const data = await res.json();
  return data;
}

function App() {
  const techPromise = techFetch();

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading.......</h2>}>
        <Techonology techPromise={techPromise} />
      </Suspense>
      <Footer />


    </>
  )
}

export default App
