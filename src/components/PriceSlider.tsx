import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  price: number;
  description: string;
  duration: string;
}

const services: Service[] = [
  {
    id: 1,
    name: 'Депиляция голеней',
    price: 1200,
    description: 'Удаление нежелательных волос с голеней с использованием высококачественного воска.',
    duration: '30 мин'
  },
  {
    id: 2,
    name: 'Депиляция рук',
    price: 900,
    description: 'Профессиональная депиляция рук до локтя, безболезненно и эффективно.',
    duration: '20 мин'
  },
  {
    id: 3,
    name: 'Депиляция подмышечных впадин',
    price: 700,
    description: 'Гладкая кожа подмышек надолго, профессиональный подход и забота.',
    duration: '15 мин'
  },
  {
    id: 4,
    name: 'Глубокое бикини',
    price: 1800,
    description: 'Полное удаление волос в зоне бикини с максимальным комфортом.',
    duration: '40 мин'
  },
  {
    id: 5,
    name: 'Комплекс: ноги + руки',
    price: 1900,
    description: 'Выгодное сочетание двух процедур за одно посещение.',
    duration: '50 мин'
  },
  {
    id: 6,
    name: 'Полный комплекс',
    price: 3500,
    description: 'Депиляция ног, рук, подмышек и бикини за одно посещение.',
    duration: '90 мин'
  }
];

const PriceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };
  
  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };
  
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: currentIndex * sliderRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);
  
  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="services" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
        
        <div className="relative">
          <button 
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full shadow-md hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Предыдущая услуга"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          
          <div 
            ref={sliderRef} 
            className="flex overflow-x-hidden price-slider"
          >
            {services.map((service) => (
              <div key={service.id} className="price-slide px-12">
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                      <h3 className="text-xl font-semibold">{service.name}</h3>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-muted-foreground">{service.duration}</span>
                        <span className="text-2xl font-bold text-primary">{service.price} ₽</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full shadow-md hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Следующая услуга"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-6 gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-muted'
              }`}
              aria-label={`Перейти к услуге ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceSlider;
