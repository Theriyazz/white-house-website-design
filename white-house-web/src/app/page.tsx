import { ImageManifestProvider } from "@/components/ui/SlotImage";
import Header from "@/components/nav/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ShopByOccasion from "@/components/ShopByOccasion";
import TheGroomsEdit from "@/components/TheGroomsEdit";
import WeddingParty from "@/components/WeddingParty";
import FeaturedCollection from "@/components/FeaturedCollection";
import HeritageStory from "@/components/HeritageStory";
import WeddingStories from "@/components/WeddingStories";
import ShopByCategory from "@/components/ShopByCategory";
import CraftDetail from "@/components/CraftDetail";
import Testimonials from "@/components/Testimonials";
import ForYou from "@/components/ForYou";
import VisitStore from "@/components/VisitStore";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { imageManifest } from "@/data/image-manifest";

export default function Home() {
  return (
    <ImageManifestProvider manifest={imageManifest}>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ShopByOccasion />
        <TheGroomsEdit />
        <WeddingParty />
        <FeaturedCollection />
        <HeritageStory />
        <WeddingStories />
        <ShopByCategory />
        <CraftDetail />
        <Testimonials />
        <ForYou />
        <VisitStore />
      </main>
      <Footer />
      <FloatingActions />
    </ImageManifestProvider>
  );
}
