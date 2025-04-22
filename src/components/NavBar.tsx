import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              <span className="text-blue-DEFAULT">Кабинет</span>{" "}
              <span className="gold-gradient">Нежность</span>
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-blue-DEFAULT transition-colors">
              Главная
            </Link>
            <Link to="#services" className="text-foreground hover:text-blue-DEFAULT transition-colors">
              Услуги
            </Link>
            <Link to="#promotions" className="text-foreground hover:text-blue-DEFAULT transition-colors">
              Акции
            </Link>
            <Link to="#about" className="text-foreground hover:text-blue-DEFAULT transition-colors">
              О нас
            </Link>
            <Link to="#booking">
              <Button variant="default" className="bg-blue-DEFAULT text-foreground hover:bg-blue-dark">
                Записаться
              </Button>
            </Link>
          </nav>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="block py-2 text-foreground hover:text-blue-DEFAULT transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="#services"
                  className="block py-2 text-foreground hover:text-blue-DEFAULT transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  to="#promotions"
                  className="block py-2 text-foreground hover:text-blue-DEFAULT transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Акции
                </Link>
              </li>
              <li>
                <Link
                  to="#about"
                  className="block py-2 text-foreground hover:text-blue-DEFAULT transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  to="#booking"
                  className="block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button variant="default" className="w-full bg-blue-DEFAULT text-foreground hover:bg-blue-dark">
                    Записаться
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
