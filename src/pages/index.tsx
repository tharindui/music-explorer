import BaseLayout from "@/components/Layouts/BaseLayout";
import SearchResults from "@/components/organisms/SearchResults";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <>
      <SearchResults></SearchResults>
    </>
  );
}

//set layout for pages
Home.layout = BaseLayout;

export default Home;
