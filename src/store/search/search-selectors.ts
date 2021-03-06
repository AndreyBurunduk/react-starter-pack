import {createSelector} from 'reselect';
import {State} from '../../types/state';
import {Product} from '../../types/product';
import {StatusType} from '../../common/enums';

const getFoundProducts = (state: State): Product[] => state.search.foundProducts;
const getFoundProductsStatus = (state: State): StatusType => state.search.status;

const isFoundProductsLoading = createSelector(
  getFoundProductsStatus,
  (status: StatusType): boolean => status === StatusType.Loading,
);

const isFoundProductsSuccess = createSelector(
  getFoundProductsStatus,
  (status: StatusType): boolean => status === StatusType.Success,
);

export {getFoundProducts, isFoundProductsLoading, isFoundProductsSuccess};
