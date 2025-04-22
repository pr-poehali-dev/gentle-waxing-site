import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const promotions = [
  {
    id: 1,
    title: 'Скидка новым клиентам',
    description: 'Получите скидку 15% на первое посещение нашего салона. Познакомьтесь с качеством наших услуг!',
    expires: '31 декабря 2024',
    code: 'NEWCLIENT15'
  },
  {
    id: 2,
    title: 'Комплекс со скидкой',
    description: 'При заказе любых трех процедур в один день получите скидку 20% на общую стоимость.',
    expires: 'Постоянная акция',
    code: 'COMBO20'
  },
  {
    id: 3,
    title: 'Приведи подругу',
    description: 'Приведите подругу и получите скидку 10% на следующую процедуру для вас обеих!',
    expires: 'Постоянная акция',
    code: 'FRIEND10'
  }
];

const Promotions = () => {
  return (
    <section id="promotions" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Специальные предложения</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Воспользуйтесь нашими специальными предложениями и акциями для экономии на процедурах.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotions.map((promo) => (
            <Card key={promo.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{promo.title}</CardTitle>
                <CardDescription>Действует до: {promo.expires}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{promo.description}</p>
                <div className="mt-4 p-2 bg-muted rounded flex items-center justify-between">
                  <code className="font-mono text-sm font-medium">{promo.code}</code>
                  <span className="text-xs text-muted-foreground">Промокод</span>
                </div>
              </CardContent>
              <CardFooter>
                <Link to="#booking" className="w-full">
                  <Button variant="outline" className="w-full">Использовать</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
