const contentConfig = {
  pageName: 'goods',
  header: {
    title: '类别列表',
    btnTitle: '新建数据'
  },
  propsList: [
    { type: 'selection', label: '选择', width: '80px' },
    { type: 'index', label: '序号', width: '80px' },
    { type: 'normal', label: '商品名称', prop: 'name', width: '150px' },
    {
      type: 'custom',
      label: '原价格',
      prop: 'oldPrice',
      width: '80px',
      slotName: 'oldPrice'
    },
    {
      type: 'custom',
      label: '新价格',
      prop: 'newPrice',
      width: '80px',
      slotName: 'newPrice'
    },
    { type: 'normal', label: '商品描述', prop: 'desc', width: '150px' },
    { type: 'normal', label: '状态', prop: 'status', width: '80px' },
    {
      type: 'custom',
      label: '商品图片',
      prop: 'imgUrl',
      width: '150px',
      slotName: 'image'
    },
    { type: 'normal', label: '库存', prop: 'inventoryCount', width: '80px' },
    { type: 'normal', label: '销量', prop: 'saleCount', width: '80px' },
    { type: 'normal', label: '收藏', prop: 'favorCount', width: '80px' },
    { type: 'normal', label: '地址', prop: 'address', width: '80px' },
    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },
    { type: 'handler', label: '操作', width: '150px' }
  ]
}

export default contentConfig
