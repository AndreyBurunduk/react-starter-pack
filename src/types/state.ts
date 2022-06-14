
import {Product} from './product';
import {Review} from './review';
import {OrderType, SortType, StatusType} from '../common/enums';
import {Namespace} from '../common/constants';

type ProductState = {
  product: Product | null,
  status: StatusType,
};
type ReviewsState = {
  reviews: Review[],
  totalCount: number,
  status: StatusType,
  postStatus: StatusType,
};
type ProductsState = {
  products: Product[],
  totalCount: number,
  status: StatusType,
};
type SearchState = {
  foundProducts: Product[],
  status: StatusType,
};
type SortState = {
  sortType: SortType | null,
  orderType: OrderType | null,
};
type PriceRangeState = {
  min: number,
  max: number,
};
type FilterState = {
  priceRange: PriceRangeState,
  status: StatusType,
};
type State = {
  [Namespace.Product]: ProductState,
  [Namespace.Reviews]: ReviewsState,
  [Namespace.Products]: ProductsState,
  [Namespace.Search]: SearchState,
  [Namespace.Sort]: SortState,
  [Namespace.Filter]: FilterState,
};
export type {ProductState, ReviewsState, ProductsState, SearchState, SortState, PriceRangeState, FilterState, State};
