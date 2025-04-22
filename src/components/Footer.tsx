import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Нежность</h3>
            <p className="text-muted-foreground mb-6">
              Профессиональная депиляция с заботой о вашей коже. Мы используем только качественные материалы и современные технологии.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Телефон</p>
                  <Link to="tel:+79001234567" className="text-muted-foreground hover:text-primary transition-colors">
                    +7 (900) 123-45-67
                  </Link>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <Link to="mailto:info@nezhnost.ru" className="text-muted-foreground hover:text-primary transition-colors">
                    info@nezhnost.ru
                  </Link>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Адрес</p>
                  <address className="not-italic text-muted-foreground">
                    г. Москва, ул. Примерная, д. 123
                  </address>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Часы работы</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Пн-Пт:</span>
                <span>9:00 - 21:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Сб:</span>
                <span>10:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Вс:</span>
                <span>10:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Салон депиляции "Нежность". Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
