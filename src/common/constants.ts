const APP_LOCALE = 'ru-RU';
const MAX_STARS_COUNT = 5;
const PRODUCTS_COUNT_PER_PAGE = 9;
const REVIEWS_COUNT_PER_STEP = 3;
const BACKEND_BASE_URL = 'https://guitar-shop.accelerator.pages.academy/guitars?_limit=27';
const RESPONSE_HEADER_X_TOTAL_COUNT = 'x-total-count';
const REQUEST_TIMEOUT = 5000;
const FOCUS_TIMEOUT = 100;
const DEBOUNCE_DELAY = 500;
const TRANSITION_DELAY = 600;
const ResponseStatusCode = {
  BadRequest: 400,
} as const;
const APIRoute = {
  GetProducts: () => '/guitars',
  GetProduct: (id: number) => `/guitars/${id}`,
  GetReviews: (id: number) => `/guitars/${id}/comments`,
  PostReview: () => '/comments',
  PostCoupon: () => '/coupons',
} as const;

const AppRoute = {
  MainScreen: '/',
  CatalogScreen: '/catalog',
  CatalogScreenWithPageId: '/catalog/page_:pageId',
  CatalogScreenPrefix: '/catalog/page',
  ProductScreenWithProductId: '/products/:productId',
  ProductScreenPrefix: '/products/',
  CartScreen: '/cart',
} as const;
const SearchParamKey = {
  Name: 'name',
  Price: 'price',
  Type: 'type',
  StringCount: 'stringCount',
} as const;
const SearchParamPostfix = {
  Sort: '_sort',
  Order: '_order',
  Start: '_start',
  End: '_end',
  Limit: '_limit',
  Gte: '_gte',
  Lte: '_lte',
  Like: '_like',
  Embed: '_embed',
} as const;
const Namespace = {
  Product: 'product',
  Reviews: 'reviews',
  Products: 'products',
  Comments: 'comments',
  Search: 'search',
  Sort: 'sort',
  Filter: 'filter',
  Cart: 'cart',
} as const;
const ToastParam = {
  Theme: 'colored',
  Position: 'top-right',
} as const;
const ErrorMessage = {
  FailedToLoadProduct: 'Не удалось загрузить запрашиваемый товар',
  FailedToLoadReviews: 'Не удалось загрузить отзывы',
  FailedToPostReview: 'Не удалось отправить отзыв',
  FailedToPostInvalidReview: 'Форма заполнена неверно!',
  FailedToLoadProducts: 'Не удалось загрузить запрашиваемые товары',
  FailedToLoadSearchRequest: 'Не удалось загрузить поисковый запрос',
  FailedToLoadPriceRangeRequest: 'Не удалось загрузить диапазон цен для фильтра',
  FailedToPostCouponRequest: 'Не удалось отправить промокод',
} as const;

const KeyAttributeValue = {
  ArrowDown: 'ArrowDown',
  ArrowUp: 'ArrowUp',
  Enter: 'Enter',
  Escape: 'Escape',
} as const;
const LoaderParam = {
  Color: '#000',
  Size: {
    Width: 100,
    Height: 100,
  },
} as const;
const GuitarTypeTranslation = {
  Acoustic: 'Акустическая гитара',
  Electric: 'Электрогитара',
  Ukulele: 'Укулеле',
} as const;
const ProductInCartCountRange = {
  Min: 1,
  Max: 99,
} as const;
export {
  APP_LOCALE,
  MAX_STARS_COUNT,
  PRODUCTS_COUNT_PER_PAGE,
  REVIEWS_COUNT_PER_STEP,
  BACKEND_BASE_URL,
  RESPONSE_HEADER_X_TOTAL_COUNT,
  REQUEST_TIMEOUT,
  FOCUS_TIMEOUT,
  DEBOUNCE_DELAY,
  TRANSITION_DELAY,
  ResponseStatusCode,
  APIRoute,
  AppRoute,
  SearchParamKey,
  SearchParamPostfix,
  Namespace,
  ToastParam,
  ErrorMessage,
  KeyAttributeValue,
  LoaderParam,
  GuitarTypeTranslation,
  ProductInCartCountRange
};
