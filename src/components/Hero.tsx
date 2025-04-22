import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
            Кабинет депиляции <span className="text-accent gold-gradient">Нежность</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-DEFAULT italic mb-6">
            Прикосновение к совершенству
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Профессиональный уход за вашей кожей с использованием
            только лучших материалов. Комфорт и безупречный результат гарантирован.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="#booking">
              <Button size="lg" className="w-full sm:w-auto bg-blue-DEFAULT text-foreground hover:bg-blue-dark">
                Записаться онлайн
              </Button>
            </Link>
            <Link to="#services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-gold-DEFAULT text-gold-dark hover:bg-gold-light/20">
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
