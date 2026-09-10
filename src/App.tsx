// import { Suspense } from "react"
// import Banner from "./components/Banner"
// import Footer from "./components/Footer"
// import Nav from "./components/Nav"
// import Techonology from "./components/technologies/Techonology"
// import type { Itechnology } from "./types/type"

// const techFetch = async (): Promise<Itechnology[]> => {
//   const res = await fetch('/data.json')
//   const data = await res.json();
//   return data;
// }

// function App() {
//   const techPromise = techFetch();

//   return (
//     <>
//       <Nav />
//       <Banner />

//       <Suspense fallback={<h2>Loading.......</h2>}>
//         <Techonology techPromise={techPromise} />
//       </Suspense>
//       <Footer />


//     </>
//   )
// }

// export default App

import { useEffect, useState } from "react";

import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Techonology from "./components/technologies/Techonology";

import type { Itechnology } from "./types/type";

function App() {
  const [technologies, setTechnologies] = useState<Itechnology[]>([]);
  const [selectedTech, setSelectedTech] = useState<Itechnology[]>([]);
  const [loading, setLoading] = useState(true);

  // Get technology data from data.json
  useEffect(() => {
    fetch("/data.json").then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
        setLoading(false);
      });
  }, []);

  // Add technology
  const handleAddToStack = (tech: Itechnology) => {
    const alreadyAdded = selectedTech.some(
      (item) => item.id === tech.id
    );

    if (alreadyAdded) {
      alert("This technology is already in your stack!");
      return;
    }

    setSelectedTech((prev) => [...prev, tech]);
  };

  // Remove one technology
  const handleRemove = (id: string) => {
    setSelectedTech((prev) =>
      prev.filter((tech) => tech.id !== id)
    );
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setSelectedTech([]);
  };

  return (
    <>
      <Nav />
      <Banner />
      {loading ? (
        <h2 className="text-center py-10">
          Loading.......
        </h2>
      ) : (
        <Techonology
          technologies={technologies}
          selectedTech={selectedTech}
          onAddToStack={handleAddToStack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      )}
      <Footer />
    </>
  );
}

export default App;