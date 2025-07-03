import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactInfo = [
    {
      title: "Телефон",
      value: "+7 (800) 555-0123",
      icon: "Phone",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Email",
      value: "info@gruzoexpress.ru",
      icon: "Mail",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Адрес",
      value: "г. Москва, ул. Логистическая, 10",
      icon: "MapPin",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Время работы",
      value: "Круглосуточно, без выходных",
      icon: "Clock",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Свяжитесь с нами
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Мы всегда на связи!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}
                    >
                      <Icon
                        name={item.icon as any}
                        size={24}
                        className="text-white"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-gradient-to-br from-orange-500 to-red-500 text-white shadow-xl">
              <CardContent className="p-8 text-center">
                <Icon name="Headphones" size={48} className="mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Круглосуточная поддержка
                </h3>
                <p className="text-orange-100 mb-4">
                  Наши операторы готовы помочь вам 24/7
                </p>
                <Button
                  size="lg"
                  className="bg-white text-orange-500 hover:bg-orange-50 w-full"
                >
                  Связаться сейчас
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Отправить заявку
                </h3>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Имя *
                      </label>
                      <Input placeholder="Ваше имя" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон *
                      </label>
                      <Input
                        placeholder="+7 (___) ___-__-__"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Откуда
                      </label>
                      <Input
                        placeholder="Город отправления"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Куда
                      </label>
                      <Input
                        placeholder="Город назначения"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Описание груза
                    </label>
                    <Textarea
                      placeholder="Расскажите о вашем грузе: вес, объем, особенности..."
                      className="w-full min-h-[120px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-6 text-lg"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">🚀 Готовы к запуску?</h3>
            <p className="text-xl mb-6 text-blue-100">
              Доверьте нам доставку вашего груза - мы знаем, как это делать
              правильно!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-6"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Скачать прайс-лист
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
