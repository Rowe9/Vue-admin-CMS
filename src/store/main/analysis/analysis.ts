import {
  getAmountListData,
  getGoodsAddressSale,
  getGoodsCategoryCount,
  getGoodsCategoryFavor,
  getGoodsCategorySale
} from '@/service/main/analysis/analysis'
import { defineStore } from 'pinia'

interface IAnalysisState {
  amountList: any[]
  goodsCategoryCount: any[]
  goodsCategorySale: any[]
  goodsCategoryFavor: any[]
  goodsAddressSale: any[]
}

const useAnalysisStore = defineStore('analysis', {
  state: (): IAnalysisState => ({
    amountList: [],
    goodsCategoryCount: [
      {
        id: 2,
        name: '上衣',
        goodsCount: 14
      },
      {
        id: 3,
        name: '裤子',
        goodsCount: 19
      },
      {
        id: 4,
        name: '鞋子',
        goodsCount: 19
      },
      {
        id: 5,
        name: '厨具',
        goodsCount: 18
      },
      {
        id: 6,
        name: '家具',
        goodsCount: 18
      },
      {
        id: 7,
        name: '床上用品',
        goodsCount: 19
      },
      {
        id: 8,
        name: '女装',
        goodsCount: 35
      }
    ],
    goodsCategorySale: [
      {
        id: 2,
        name: '上衣',
        goodsSale: '49749'
      },
      {
        id: 3,
        name: '裤子',
        goodsSale: '84754'
      },
      {
        id: 4,
        name: '鞋子',
        goodsSale: '58283'
      },
      {
        id: 5,
        name: '厨具',
        goodsSale: '57354'
      },
      {
        id: 6,
        name: '家具',
        goodsSale: '49002'
      },
      {
        id: 7,
        name: '床上用品',
        goodsSale: '98579'
      },
      {
        id: 8,
        name: '女装',
        goodsSale: '112228'
      },
      {
        id: 22,
        name: '床上用品',
        goodsSale: '176674'
      },
      {
        id: 23,
        name: '食品',
        goodsSale: '165434'
      },
      {
        id: 24,
        name: '海鲜',
        goodsSale: '242414'
      }
    ],
    goodsCategoryFavor: [
      {
        id: 2,
        name: '上衣',
        goodsFavor: '6091'
      },
      {
        id: 3,
        name: '裤子',
        goodsFavor: '4939'
      },
      {
        id: 4,
        name: '鞋子',
        goodsFavor: '19647'
      },
      {
        id: 5,
        name: '厨具',
        goodsFavor: '13906'
      },
      {
        id: 6,
        name: '家具',
        goodsFavor: '15425'
      },
      {
        id: 7,
        name: '床上用品',
        goodsFavor: '7307'
      },
      {
        id: 8,
        name: '女装',
        goodsFavor: '19911'
      }
    ],
    goodsAddressSale: [
      {
        address: '宁波',
        count: '66584'
      },
      {
        address: '西安',
        count: '64976'
      },
      {
        address: '上海',
        count: '62239'
      },
      {
        address: '重庆',
        count: '60777'
      },
      {
        address: '南京',
        count: '55683'
      },
      {
        address: '郑州',
        count: '53716'
      },
      {
        address: '武汉',
        count: '28212'
      },
      {
        address: '成都',
        count: '23378'
      },
      {
        address: '沈阳',
        count: '20900'
      },
      {
        address: '杭州',
        count: '19654'
      },
      {
        address: '深圳',
        count: '12480'
      },
      {
        address: '昆明',
        count: '9524'
      },
      {
        address: '青岛',
        count: '9021'
      },
      {
        address: '广州',
        count: '6364'
      },
      {
        address: '北京',
        count: '6107'
      },
      {
        address: '天津',
        count: '5096'
      },
      {
        address: '长沙',
        count: '4142'
      },
      {
        address: '苏州',
        count: '1136'
      }
    ]
  }),
  actions: {
    fetchAnalysisDataAction() {
      getAmountListData().then((res) => {
        this.amountList = res.data
      })
      // getGoodsCategoryCount().then((res) => {
      //   this.goodsCategoryCount = res.data
      // })
      // getGoodsCategorySale().then((res) => {
      //   this.goodsCategorySale = res.data
      // })
      // getGoodsCategoryFavor().then((res) => {
      //   this.goodsCategoryFavor = res.data
      // })
      // getGoodsAddressSale().then((res) => {
      //   this.goodsAddressSale = res.data
      // })
    }
  }
})

export default useAnalysisStore
