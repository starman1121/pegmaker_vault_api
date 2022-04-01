const { hecoWeb3: web3 } = require('../../../utils/web3');
import { getEDecimals } from '../../../utils/getEDecimals';

import { getBifiMaxiApys } from '../common/getBifiMaxiApys';
import { addressBook } from '../../../../packages/address-book/address-book';
const {
  heco: {
    platforms: {
      beefyfinance: { rewardPool },
    },
    tokens: { BIFI, WHT }
  },
} = addressBook;

export const getHecoBifiMaxiApy = () => {
  return getBifiMaxiApys({
    bifi: BIFI.address,
    rewardPool: rewardPool,
    rewardId: WHT.symbol,
    rewardDecimals: getEDecimals(WHT.decimals),
    chain: 'heco',
    web3: web3,
  });
};