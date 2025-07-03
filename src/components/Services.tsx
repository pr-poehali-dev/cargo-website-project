import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      title: "Международные перевозки",
      description: "Доставка грузов по всему миру с полным пакетом документов",
      icon: "Globe",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Таможенное оформление",
        "Страхование груза",
        "Отслеживание 24/7",
      ],
    },
    {
      title: "Межгородские перевозки",
      description: "Быстрая доставка по России и странам СНГ",
      icon: "MapPin",
      color: "from-orange-500 to-red-500",
      features: ["Экспресс-доставка", "Забор от двери", "Гарантия сроков"],
    },
    {
      title: "Крупногабаритные грузы",
      description: "Перевозка негабаритных и тяжелых грузов",
      icon: "Package",
      color: "from-purple-500 to-pink-500",
      features: ["Спецтехника", "Сопровождение", "Разрешения"],
    },
    {
      title: "Логистические решения",
      description: "Комплексные решения для вашего бизнеса",
      icon: "Settings",
      color: "from-green-500 to-emerald-500",
      features: ["Складские услуги", "Консультации", "Индивидуальный подход"],
    },
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Наши услуги
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр логистических услуг для вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <CardContent className="p-8 relative z-10">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white group-hover:border-transparent transition-all duration-300"
                >
                  Подробнее
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Нужна консультация?</h3>
            <p className="mb-6 text-orange-100">
              Наши специалисты помогут выбрать оптимальное решение для вашего
              груза
            </p>
            <Button
              size="lg"
              className="bg-white text-orange-500 hover:bg-orange-50 px-8 py-6"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
