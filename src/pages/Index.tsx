import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const instructions = [
    {
      id: 1,
      title: 'Замена масла в двигателе',
      difficulty: 'Простая',
      time: '30-45 минут',
      category: 'Техническое обслуживание',
      steps: ['Прогреть двигатель', 'Слить старое масло', 'Заменить масляный фильтр', 'Залить новое масло']
    },
    {
      id: 2,
      title: 'Замена тормозных колодок',
      difficulty: 'Средняя',
      time: '1-2 часа',
      category: 'Тормозная система',
      steps: ['Поднять автомобиль', 'Снять колесо', 'Отжать суппорт', 'Заменить колодки']
    },
    {
      id: 3,
      title: 'Замена воздушного фильтра',
      difficulty: 'Простая',
      time: '10-15 минут',
      category: 'Техническое обслуживание',
      steps: ['Открыть капот', 'Найти корпус фильтра', 'Снять старый фильтр', 'Установить новый']
    }
  ];

  const parts = [
    { id: 1, name: 'Масляный фильтр', code: 'OF-2024', category: 'Двигатель', price: '450 ₽' },
    { id: 2, name: 'Тормозные колодки передние', code: 'BP-F-100', category: 'Тормоза', price: '2800 ₽' },
    { id: 3, name: 'Воздушный фильтр', code: 'AF-STD', category: 'Двигатель', price: '650 ₽' },
    { id: 4, name: 'Свечи зажигания (комплект)', code: 'SP-4PC', category: 'Двигатель', price: '1200 ₽' },
    { id: 5, name: 'Аккумулятор 60Ah', code: 'BAT-60A', category: 'Электрика', price: '4500 ₽' },
    { id: 6, name: 'Антифриз 5L', code: 'ANT-5L', category: 'Охлаждение', price: '890 ₽' }
  ];

  const schemas = [
    { id: 1, name: 'Схема двигателя', type: 'Общая конструкция', format: 'PDF' },
    { id: 2, name: 'Электрическая схема', type: 'Проводка', format: 'PDF' },
    { id: 3, name: 'Тормозная система', type: 'Гидравлика', format: 'PDF' },
    { id: 4, name: 'Подвеска', type: 'Конструкция', format: 'PDF' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Wrench" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold tracking-tight">АвтоРемонт PRO</h1>
            </div>
            <nav className="flex gap-2">
              <Button 
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('home')}
              >
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button 
                variant={activeSection === 'instructions' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('instructions')}
              >
                <Icon name="BookOpen" size={18} className="mr-2" />
                Инструкции
              </Button>
              <Button 
                variant={activeSection === 'parts' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('parts')}
              >
                <Icon name="Package" size={18} className="mr-2" />
                Запчасти
              </Button>
              <Button 
                variant={activeSection === 'schemas' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('schemas')}
              >
                <Icon name="FileText" size={18} className="mr-2" />
                Схемы
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="space-y-8 animate-fade-in">
            <section className="text-center py-12">
              <h2 className="text-4xl font-bold mb-4">Техническая база знаний</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Полное руководство по диагностике, ремонту и обслуживанию автомобилей
              </p>
            </section>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover-scale cursor-pointer" onClick={() => setActiveSection('instructions')}>
                <CardHeader>
                  <Icon name="BookOpen" size={48} className="text-primary mb-4" />
                  <CardTitle>Инструкции</CardTitle>
                  <CardDescription>
                    Пошаговые руководства по ремонту и обслуживанию
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{instructions.length}</p>
                  <p className="text-sm text-muted-foreground">доступных инструкций</p>
                </CardContent>
              </Card>

              <Card className="hover-scale cursor-pointer" onClick={() => setActiveSection('parts')}>
                <CardHeader>
                  <Icon name="Package" size={48} className="text-primary mb-4" />
                  <CardTitle>Каталог запчастей</CardTitle>
                  <CardDescription>
                    База данных запчастей с артикулами и ценами
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{parts.length}</p>
                  <p className="text-sm text-muted-foreground">позиций в каталоге</p>
                </CardContent>
              </Card>

              <Card className="hover-scale cursor-pointer" onClick={() => setActiveSection('schemas')}>
                <CardHeader>
                  <Icon name="FileText" size={48} className="text-primary mb-4" />
                  <CardTitle>Технические схемы</CardTitle>
                  <CardDescription>
                    Диаграммы и чертежи систем автомобиля
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{schemas.length}</p>
                  <p className="text-sm text-muted-foreground">схем и чертежей</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-secondary/20 border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Info" size={24} />
                  Быстрый доступ
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Zap" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Базовое ТО</h4>
                      <p className="text-sm text-muted-foreground">Регулярное техническое обслуживание каждые 10-15 тыс. км</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="AlertCircle" size={20} className="text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Диагностика</h4>
                      <p className="text-sm text-muted-foreground">Поиск и устранение неисправностей</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'instructions' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Инструкции по ремонту</h2>
              <Badge variant="secondary">{instructions.length} инструкций</Badge>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {instructions.map((instruction) => (
                <AccordionItem 
                  key={instruction.id} 
                  value={`item-${instruction.id}`}
                  className="border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <Icon name="FileText" size={24} className="text-primary" />
                      <div>
                        <h3 className="font-bold text-lg">{instruction.title}</h3>
                        <div className="flex gap-3 mt-2">
                          <Badge variant="outline">{instruction.difficulty}</Badge>
                          <span className="text-sm text-muted-foreground flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {instruction.time}
                          </span>
                          <span className="text-sm text-muted-foreground">{instruction.category}</span>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 space-y-3">
                      <h4 className="font-semibold">Этапы выполнения:</h4>
                      <ol className="list-decimal list-inside space-y-2">
                        {instruction.steps.map((step, index) => (
                          <li key={index} className="text-muted-foreground">{step}</li>
                        ))}
                      </ol>
                      <Button className="mt-4">
                        <Icon name="Download" size={16} className="mr-2" />
                        Скачать полную инструкцию
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {activeSection === 'parts' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Каталог запчастей</h2>
              <Badge variant="secondary">{parts.length} позиций</Badge>
            </div>

            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="engine">Двигатель</TabsTrigger>
                <TabsTrigger value="brakes">Тормоза</TabsTrigger>
                <TabsTrigger value="electric">Электрика</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-3">
                {parts.map((part) => (
                  <Card key={part.id} className="hover-scale">
                    <CardContent className="flex items-center justify-between p-6">
                      <div className="flex items-center gap-4">
                        <Icon name="Package" size={32} className="text-primary" />
                        <div>
                          <h3 className="font-bold">{part.name}</h3>
                          <div className="flex gap-3 mt-1">
                            <code className="text-sm text-muted-foreground">{part.code}</code>
                            <Badge variant="outline">{part.category}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">{part.price}</p>
                        <Button size="sm" className="mt-2">
                          <Icon name="ShoppingCart" size={14} className="mr-1" />
                          Добавить
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'schemas' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Технические схемы</h2>
              <Badge variant="secondary">{schemas.length} схем</Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {schemas.map((schema) => (
                <Card key={schema.id} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Icon name="FileText" size={48} className="text-primary" />
                      <Badge>{schema.format}</Badge>
                    </div>
                    <CardTitle className="mt-4">{schema.name}</CardTitle>
                    <CardDescription>{schema.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Просмотреть схему
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t mt-16 py-8 bg-card">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 АвтоРемонт PRO. Техническая база знаний по ремонту автомобилей</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
