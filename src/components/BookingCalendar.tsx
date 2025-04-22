import { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format, addDays } from 'date-fns';
import { ru } from 'date-fns/locale';

// Симуляция занятых дней для примера
const busyDates = [
  addDays(new Date(), 1),
  addDays(new Date(), 3),
  addDays(new Date(), 5),
  addDays(new Date(), 8),
];

const availableTimeSlots = [
  '09:00', '10:00', '11:00', '12:00', 
  '14:00', '15:00', '16:00', '17:00', '18:00'
];

// Симуляция занятых временных слотов для примера
const busyTimeSlots = {
  [format(addDays(new Date(), 2), 'yyyy-MM-dd')]: ['10:00', '11:00', '15:00'],
  [format(addDays(new Date(), 4), 'yyyy-MM-dd')]: ['09:00', '12:00', '17:00'],
  [format(addDays(new Date(), 6), 'yyyy-MM-dd')]: ['14:00', '16:00', '18:00'],
};

const BookingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    showSuccess: false
  });

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const isTimeSlotBusy = (time: string) => {
    if (!selectedDate) return false;
    const dateKey = format(selectedDate, 'yyyy-MM-dd');
    return busyTimeSlots[dateKey]?.includes(time) || false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData(prev => ({ ...prev, showSuccess: true }));
    // Здесь был бы код для отправки данных на сервер
  };

  const resetForm = () => {
    setSelectedDate(undefined);
    setSelectedTime(null);
    setFormData({
      name: '',
      phone: '',
      service: '',
      showSuccess: false
    });
  };

  return (
    <section id="booking" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Онлайн-запись</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Выберите удобную дату и время для вашего визита
        </p>
        
        {formData.showSuccess ? (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center text-primary">Запись успешно создана!</CardTitle>
              <CardDescription className="text-center">
                Мы свяжемся с вами для подтверждения записи
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              {selectedDate && selectedTime && (
                <p className="mb-4">
                  Ваша запись на {format(selectedDate, 'd MMMM', { locale: ru })} в {selectedTime}
                </p>
              )}
              <Button onClick={resetForm}>Создать новую запись</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-medium mb-4">Выберите дату и время</h3>
              <div className="space-y-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? (
                        format(selectedDate, 'd MMMM yyyy', { locale: ru })
                      ) : (
                        <span>Выберите дату</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={handleDateSelect}
                      disabled={(date) => 
                        date < new Date() || 
                        busyDates.some(busyDate => 
                          format(busyDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                        )
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                
                {selectedDate && (
                  <div>
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Доступное время
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {availableTimeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          className={`${isTimeSlotBusy(time) ? 'opacity-50 cursor-not-allowed' : ''}`}
                          disabled={isTimeSlotBusy(time)}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Ваши данные</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Имя
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full p-2 border rounded-md"
                    placeholder="Введите ваше имя"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">
                    Телефон
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full p-2 border rounded-md"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-1">
                    Услуга
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                    className="w-full p-2 border rounded-md"
                  >
                    <option value="">Выберите услугу</option>
                    <option value="legs">Депиляция голеней</option>
                    <option value="arms">Депиляция рук</option>
                    <option value="armpits">Депиляция подмышечных впадин</option>
                    <option value="bikini">Глубокое бикини</option>
                    <option value="combo1">Комплекс: ноги + руки</option>
                    <option value="combo2">Полный комплекс</option>
                  </select>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={!selectedDate || !selectedTime}
                >
                  Записаться
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookingCalendar;
