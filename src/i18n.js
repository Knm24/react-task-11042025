import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      settings: 'Настройки',
      selectTheme: 'Выбрать тематику',
      modalTitle: 'Настройки профиля',
      modalText: 'Здесь вы можете изменить настройки профиля.',
      close: 'Закрыть',
      store: 'Магазин',
      account: 'Счета',
      deposits: 'Депозиты',
      events: 'События',
      redKredit: 'Red и Kredit',
      installments: 'Рассрочка',
      reports: 'Сообщения',
      firm: 'ИП Liverpool',
      main: 'Главная',
      orders: 'Заказы',
      myDeliveries: 'Мои доставки',
      products: 'Товары',
      quality: 'Показатели качества',
      orderNumber: 'Заказы',
      orderName: 'Advanti T02-C03 универс.красный, черный',
      searchOrders: 'Поиск по номеру или названию',
      noOrdersFound: 'Заказы не найдены',
      active: 'Активен',
      inactive: 'Неактивен',
      kassa: 'Kassa',
      connected: 'Подключена',
      disconnected: 'Отключена',
      delivery: 'Доставка',
      selectStore: 'Выбрать магазин',
      delivered: 'Доставлен',
      pending: 'В ожидании',
      cancelled: 'Отменён',
      mainPage: 'Главная',
    },
  },
  kk: {
    translation: {
      settings: 'Параметрлер',
      selectTheme: 'Тақырыпты таңдау',
      modalTitle: 'Профиль параметрлері',
      modalText: 'Мұнда сіз профиль параметрлерін өзгерте аласыз.',
      close: 'Жабу',
      store: 'Дүкен',
      account: 'Есептер',
      deposits: 'Депозиттер',
      events: 'Оқиғалар',
      redKredit: 'Red және Kredit',
      installments: 'Бөліп төлеу',
      reports: 'Хабарламалар',
      firm: 'ИП Liverpool',
      main: 'Басты',
      orders: 'Тапсырыстар',
      myDeliveries: 'Менің жеткізулерім',
      products: 'Тауарлар',
      quality: 'Сапа көрсеткіштері',
      orderNumber: 'Тапсырыстар',
      orderName: 'Advanti T02-C03 әмбебап қызыл, қара',
      searchOrders: 'Нөмір немесе атау бойынша іздеу',
      noOrdersFound: 'Тапсырыстар табылмады',
      active: 'Белсенді',
      inactive: 'Белсенді емес',
      kassa: 'Kassa',
      connected: 'Қосылған',
      disconnected: 'Ажыратылған',
      delivery: 'Жеткізу',
      selectStore: 'Дүкенді таңдау',
      delivered: 'Жеткізілді',
      pending: 'Күтуде',
      cancelled: 'Бас тартылды',
      mainPage: 'Басты бет',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;