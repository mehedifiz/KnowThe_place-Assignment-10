import { Helmet } from "react-helmet";
import AnyQuestion from "../components/AnyQuestion";
import HeroSlider from "../components/HeroSlider";
// import HowItsWork from "../components/HowItsWork";
import { Link, useLoaderData } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard";
import AboutUs from "./About";

const Home = () => {
  const allTouristsSpots = useLoaderData();
  console.log(allTouristsSpots);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | ExploreEasy</title>
        <link rel="canonical" href="http://exploreeasy.web.app" />
      </Helmet>
      <HeroSlider />

      <div className="animate__animated animate__fadeIn">
        <div className="mt-[60px] lg:mt-[80px]">
          <div className="container">
            <div className="max-w-[600px] mx-auto text-center mb-10">
              <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Latest Tourist Spots
              </h2>
              <p className="lg:text-xl max-w-[500px] mx-auto mt-6 text-lg leading-8">
                Discover incredible places to visit and explore your next
                adventure with us!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
              {allTouristsSpots?.map((itemSpot) => (
                <TouristSpotCard
                  key={itemSpot._id}
                  itemSpot={itemSpot}
                ></TouristSpotCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
