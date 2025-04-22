import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Салон депиляции <span className="text-primary">Нежность</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Профессиональный уход за вашей кожей с использованием
            только лучших материалов. Комфорт и безупречный результат гарантирован.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="#booking">
              <Button size="lg" className="w-full sm:w-auto">
                Записаться онлайн
              </Button>
            </Link>
            <Link to="#services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Посмотреть услуги
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
