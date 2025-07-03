import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Грузоперевозки
              </span>
              <br />
              <span className="text-gray-800">по всему миру</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Быстрые и надежные международные и межгородские перевозки.
              Доставим ваш груз в любую точку мира с гарантией качества.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-6 text-lg"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть видео
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500">50+</div>
                <div className="text-gray-600">Стран доставки</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500">24/7</div>
                <div className="text-gray-600">Поддержка</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-2xl">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-bold text-center text-gray-800">
                  Быстрый расчет стоимости
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Откуда
                    </label>
                    <Input placeholder="Город отправления" className="w-full" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Куда
                    </label>
                    <Input placeholder="Город назначения" className="w-full" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Вес (кг)
                      </label>
                      <Input placeholder="1000" type="number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Объем (м³)
                      </label>
                      <Input placeholder="10" type="number" />
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-6 text-lg">
                    <Icon name="ArrowRight" size={20} className="mr-2" />
                    Рассчитать стоимость
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <Icon name="Zap" size={32} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
