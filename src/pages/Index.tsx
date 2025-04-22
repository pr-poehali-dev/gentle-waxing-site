import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import PriceSlider from '@/components/PriceSlider';
import Promotions from '@/components/Promotions';
import AdBanner from '@/components/AdBanner';
import BookingCalendar from '@/components/BookingCalendar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <PriceSlider />
        <AdBanner />
        <Promotions />
        <BookingCalendar />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
