import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AdBanner = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="lg:max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Попробуйте шугаринг!</h2>
            <p className="mb-6">
              Впервые у нас? Шугаринг – это натуральный способ депиляции с использованием сахарной пасты. 
              Мягкий, эффективный и с долгосрочным результатом. 
              Запишитесь сейчас и получите скидку 20% на первую процедуру!
            </p>
            <Link to="#booking">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Узнать больше
              </Button>
            </Link>
          </div>
          
          <div className="relative w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Шугаринг" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-primary-foreground text-primary px-3 py-1 rounded-full font-medium text-sm">
              -20%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdBanner;
