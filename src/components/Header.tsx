import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Truck" className="text-orange-500" size={32} />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ГрузоЭкспресс
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            Услуги
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            О нас
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-orange-500 transition-colors"
          >
            Контакты
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (800) 555-0123
          </Button>
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
            Заказать звонок
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
