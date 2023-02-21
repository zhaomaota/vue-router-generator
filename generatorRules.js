// 定义路由结构
export let info = [
  // 会员
  {
    title: "会员",
    path: "memberAbility",
    children: [
      {
        title: "会员信息查询",
        path: "profile",
        children: [
          {
            title: "会员信息查询",
            path: "query",
          },
          {
            title: "基本信息",
            path: "detail/basicInfo",
          },
          {
            title: "等级信息",
            path: "detail/levelInfo",
          },
          {
            title: "权益信息",
            path: "detail/equityInfo",
          },
          {
            title: "诚信信息",
            path: "detail/sincerityInfo",
          },
          {
            title: "档案信息",
            path: "detail/archiveInfo",
          },
        ],
      },
    ],
  },
  // 店铺
  {
    title: "店铺",
    path: "shopAbility",
    children: [
      {
        title: "店铺管理",
        path: "manage",
        children: [
          {
            title: "创建店铺",
            path: "createStore",
          },
          {
            title: "店铺SEO设置",
            path: "shopSeo",
          },
          {
            title: "新建SEO",
            path: "shopSeo/add",
          },
          {
            title: "修改",
            path: "shopSeo/edit",
          },
          {
            title: "查看",
            path: "shopSeo/detail",
          },
          {
            title: "店铺装修",
            path: "template",
          },
          {
            title: "详情",
            path: "template/detail",
          },
          {
            title: "预览",
            path: "template/preview",
          },
          {
            title: "装修",
            path: "template/edit",
          },
          {
            title: "移动端装修",
            path: "mobile/edit",
          },
          {
            title: "移动端预览",
            path: "mobile/preview",
          },
        ],
      },
    ],
  },
  // 渠道
  {
    title: "渠道",
    path: "channelAbility",
    children: [
      {
        title: "渠道管理",
        path: "manage",
        children: [
          {
            title: "创建渠道商城",
            path: "infoManage",
          },
          {
            title: "渠道商城装修模板",
            path: "template",
          },
          {
            title: "查看详情",
            path: "detail",
          },
          {
            title: "预览",
            path: "preview",
          },
          {
            title: "装修",
            path: "mobile/edit",
          },
          {
            title: "移动端装修",
            path: "mobile/preview",
          },
          {
            title: "渠道商城SEO设置",
            path: "channelSeo",
          },
          {
            title: "新增SEO",
            path: "channelSeo/add",
          },
          {
            title: "修改",
            path: "channelSeo/edit",
          },
          {
            title: "查看",
            path: "channelSeo/detail",
          },
          {
            title: "业务员管理",
            path: "memberList",
          },
          {
            title: "新增业务员",
            path: "memberList/add",
          },
          {
            title: "查看业务员",
            path: "memberList/detail",
          },
          {
            title: "修改业务员",
            path: "memberList/edit",
          },
        ],
      },
    ],
  },
  // 采购管理
  {
    title: "采购管理",
    path: "procurementAbility",
    children: [
      {
        title: "采购信息管理",
        path: "demandPlan",
        children: [
          {
            title: "采购需求新增",
            path: "demandPlanAdded",
          },
          {
            title: "新增",
            path: "demandPlanAdded/add",
          },
          {
            title: "修改",
            path: "demandPlanAdded/edit",
          },
        ],
      },
    ],
  },
  // 供应管理
  {
    title: "供应管理",
    path: "supplyAbility",
    children: [
      {
        title: "供应需求新增",
        path: "supplyPlan",
        children: [
          {
            title: "供应需求新增",
            path: "demandPlanAdded",
          },
          {
            title: "新增",
            path: "demandPlanAdded/add",
          },
          {
            title: "修改",
            path: "demandPlanAdded/edit",
          },
        ],
      },
    ],
  },
  // 合同
  {
    title: "合同",
    path: "contract",
    children: [
      {
        title: "电子签章管理",
        path: "electronicContracts",
        children: [
          {
            title: "电子签章申请",
            path: "apply",
          },
          {
            title: "企业信息核验",
            path: "apply/enterpriseCertified",
          },
          {
            title: "合同模板参数查询",
            path: "classSearch",
          },
          {
            title: "合同模板",
            path: "template",
          },
          {
            title: "新增",
            path: "template/add",
          },
          {
            title: "编辑",
            path: "template/edit",
          },
          {
            title: "查看",
            path: "template/detail",
          },
        ],
      },
      {
        title: "合同管理",
        path: "manage",
        children: [
          {
            title: "合同管理",
            path: "list",
          },
          {
            title: "新增",
            path: "list/add",
          },
          {
            title: "详情",
            path: "list/detail",
          },
          {
            title: "修改",
            path: "list/edit",
          },
        ],
      },
      {
        title: "合同协同",
        path: "coordination",
        children: [
          {
            title: "合同查询",
            path: "coordinationList",
          },
          {
            title: "详情",
            path: "coordinationList/details",
          },
          {
            title: "待签订合同",
            path: "sign",
          },
          {
            title: "详情",
            path: "sign/detail",
          },
        ],
      },
    ],
  },
  // 交易
  {
    title: "交易",
    path: "transactionAbility",
    children: [
      {
        title: "销售订单",
        path: "saleOrder",
        children: [
          {
            title: "待确认发货订单",
            path: "readyConfirmDeliveredOrder",
          },
          {
            title: "待确认支付结果",
            path: "readyPayResult",
          },
          {
            title: "查看",
            path: "readyPayResult/preview",
          },
          {
            title: "提交审核",
            path: "readyPayResult/detail",
          },
          {
            title: "提单查询",
            path: "billOfLadingInquiry",
          },
          {
            title: "查看",
            path: "readyConfirmDeliveredOrder/preview",
          },
          {
            title: "确认发货",
            path: "readyConfirmDeliveredOrder/detail",
          },
          {
            title: "订单查询",
            path: "orderList",
          },
          {
            title: "查看",
            path: "orderList/preview",
          },
          {
            title: "交易明细",
            path: "transactionDetails",
          },
        ],
      },
      {
        title: "供应会员评价管理",
        path: "supplierEvaluation",
        children: [
          {
            title: "待评价订单",
            path: "unevaluated",
          },
          {
            title: "评价统计",
            path: "analysis",
          },
        ],
      },
    ],
  },
  // 支付
  {
    title: "支付",
    path: "payAndSettle",
    children: [
      {
        title: "支付方式管理",
        path: "paySetting",
        children: [
          {
            title: "会员支付方式配置",
            path: "configuration",
          },
        ],
      },
      {
        title: "资方账户",
        path: "capitalAccounts",
        children: [
          {
            title: "账户管理",
            path: "accountLists",
          },
          {
            title: "详情",
            path: "accountLists/detail",
          },
          {
            title: "申请提现",
            path: "accountLists/applyWithdraw",
          },
        ],
      },
      {
        title: "资金账户管理",
        path: "amountAccountManage",
        children: [
          {
            title: "会员账户管理",
            path: "memberAccountManage",
          },
          {
            title: "详情",
            path: "memberAccountManage/detail",
          },
          {
            title: "待审核提现",
            path: "checkWithdraw",
          },
          {
            title: "详情",
            path: "checkWithdraw/detail",
          },
          {
            title: "待支付提现",
            path: "paymentWithdraw",
          },
          {
            title: "详情",
            path: "paymentWithdraw/detail",
          },
        ],
      },
    ],
  },
  // 系统
  {
    title: "系统",
    path: "systemSetting",
    children: [
      {
        title: "权限管理",
        path: "authConfig",
        children: [
          {
            title: "组织机构",
            path: "organ",
          },
          {
            title: "角色管理",
            path: "memberSystem",
          },
          {
            title: "新建",
            path: "memberSystem/add",
          },
          {
            title: "编辑",
            path: "memberSystem/edit",
          },
          {
            title: "详情",
            path: "memberSystem/detail",
          },
          {
            title: "用户管理",
            path: "userSystem",
          },
          {
            title: "新增",
            path: "userSystem/add",
          },
          {
            title: "编辑",
            path: "userSystem/edit",
          },
          {
            title: "详情",
            path: "userSystem/detail",
          },
        ],
      },
      {
        title: "收藏管理",
        path: "collection",
        children: [
          {
            title: "商品收藏",
            path: "commodity",
          },
          {
            title: "店铺收藏",
            path: "shops",
          },
        ],
      },
      {
        title: "账户安全设置",
        path: "accountSetting",
        children: [
          {
            title: "账户安全设置",
            path: "accountSetting",
          },
        ],
      },
      {
        title: "消息中心",
        path: "message",
        children: [
          {
            title: "消息中心",
            path: "list",
          },
        ],
      },
    ],
  },
  // 售后
  {
    title: "售后",
    path: "afterService",
    children: [
      {
        title: "退货申请单查询",
        path: "returnManage",
        children: [
          {
            title: "退货申请单查询",
            path: "returnQuery",
          },
          {
            title: "详情",
            path: "returnQuery/detail",
          },
          {
            title: "订单详情",
            path: "returnQuery/orderDetail",
          },
        ],
      },
      {
        title: "待提交审核退货申请单",
        path: "returnManage",
        children: [
          {
            title: "待提交审核退货申请单",
            path: "returnPrSubmit",
          },
          {
            title: "详情",
            path: "returnPrSubmit/detail",
          },
          {
            title: "审核",
            path: "returnPrSubmit/verify",
          },
          {
            title: "订单详情",
            path: "returnPrSubmit/orderDetail",
          },
        ],
      },
      {
        title: "待退货收货",
        path: "returnManage",
        children: [
          {
            title: "待退货收获",
            path: "returnPrReceived",
          },
          {
            title: "详情",
            path: "returnPrReceived/detail",
          },
          {
            title: "审核",
            path: "returnPrReceived/verify",
          },
          {
            title: "订单详情",
            path: "returnPrReceived/orderDetail",
          },
        ],
      },
      {
        title: "待退款",
        path: "returnManage",
        children: [
          {
            title: "待退款",
            path: "returnPrReturn",
          },
          {
            title: "详情",
            path: "returnPrReturn/detail",
          },
          {
            title: "审核",
            path: "returnPrReturn/verify",
          },
          {
            title: "订单详情",
            path: "returnPrReturn/orderDetail",
          },
        ],
      },
    ],
  },
  // 物流
  {
    title: "物流",
    path: "logisticsAbility",
    children: [
      {
        title: "物流管理",
        path: "logisticsAdminister",
        children: [
          {
            title: "物流公司管理",
            path: "logisticsCompanyManage",
          },
          {
            title: "新建",
            path: "logisticsCompanyManage/add",
          },
          {
            title: "编辑",
            path: "logisticsCompanyManage/edit",
          },
          {
            title: "详情",
            path: "logisticsCompanyManage/detail",
          },
          {
            title: "发货地址",
            path: "shipmentsAddress",
          },
          {
            title: "新建",
            path: "shipmentsAddress/add",
          },
          {
            title: "编辑",
            path: "shipmentsAddress/edit",
          },
          {
            title: "收货地址",
            path: "receivingAddress",
          },
          {
            title: "新建",
            path: "receivingAddress/add",
          },
          {
            title: "编辑",
            path: "receivingAddress/edit",
          },
          {
            title: "运费模板",
            path: "freightTemplate",
          },
          {
            title: "新建",
            path: "freightTemplate/add",
          },
          {
            title: "编辑",
            path: "freightTemplate/edit",
          },
          {
            title: "详情",
            path: "freightTemplate/detail",
          },
        ],
      },
    ],
  },
  // 加工
  {
    title: "加工",
    path: "handling",
    children: [
      {
        title: "指派生产通知单",
        path: "assign",
        children: [
          {
            title: "指派生产通知单查询",
            path: "query",
          },
          {
            title: "详情",
            path: "query",
          },
          {
            title: "待新增生产通知单",
            path: "query",
          },
          {
            title: "新增生产通知单",
            path: "query",
          },
          {
            title: "详情",
            path: "query",
          },
          {
            title: "修改",
            path: "query",
          },
          {
            title: "待提交生产通知单",
            path: "query",
          },
          {
            title: "详情",
            path: "query",
          },
          {
            title: "待新增加工入库单",
            path: "query",
          },
          {
            title: "详情",
            path: "query",
          },
          {
            title: "待收货生产通知单",
            path: "query",
          },
          {
            title: "详情",
            path: "query",
          },
        ],
      },
      {
        title: "确认生产通知单",
        path: "confirm",
        children: [
          {
            title: "生产通知单查询",
            path: "query",
          },
          {
            title: "详情",
            path: "query/detail",
          },
          {
            title: "待提交生产通知单",
            path: "pendingSubmit",
          },
          {
            title: "详情",
            path: "pendingSubmit/detail",
          },
          {
            title: "待审核通知单（一级）",
            path: "pendingFirst",
          },
          {
            title: "详情",
            path: "pendingFirst/detail",
          },
          {
            title: "待审核通知单（二级）",
            path: "pendingSecond",
          },
          {
            title: "详情",
            path: "pendingSecond/detail",
          },
          {
            title: "待确认生产通知单",
            path: "pendingSubmit",
          },
          {
            title: "详情",
            path: "pendingSubmit/detail",
          },
          {
            title: "待新增加工发货单",
            path: "processingInvoiceToBeAdd",
          },
          {
            title: "详情",
            path: "processingInvoiceToBeAdd/detail",
          },
          {
            title: "待新增物流单",
            path: "pendingAddLogistics",
          },
          {
            title: "详情",
            path: "pendingAddLogistics/detail",
          },
          {
            title: "待发货生产通知单",
            path: "pendingDelivered",
          },
          {
            title: "详情",
            path: "pendingDelivered/detail",
          },
          {
            title: "待确认回单生产通知单",
            path: "pendingReceipt",
          },
          {
            title: "详情",
            path: "pendingReceipt/detail",
          },
        ],
      },
      {
        title: "加工门户",
        path: "infoManage",
        children: [
          {
            title: "加工门户",
            path: "list",
          },
        ],
      },
    ],
  },
  // 结算
  {
    title: "结算",
    path: "balance",
    children: [
      {
        title: "结算规则配置",
        path: "settleRules",
        children: [
          {
            title: "对公账户配置",
            path: "corporateAccount",
          },
          {
            title: "发票信息管理",
            path: "receiptList",
          },
          {
            title: "新增发票",
            path: "receiptList/add",
          },
          {
            title: "详情",
            path: "receiptList/detail",
          },
        ],
      },
      {
        title: "平台结算管理",
        path: "platformSettlement",
        children: [
          {
            title: "平台待收账款",
            path: "accountReceivable",
          },
          {
            title: "详情",
            path: "accountReceivable/detail",
          },
        ],
      },
      {
        title: "应收账款管理",
        path: "accountsReceivable",
        children: [
          {
            title: "开票管理",
            path: "invoice",
          },
        ],
      },
    ],
  },
  // 对账
  {
    title: "对账",
    path: "reconciliation",
    children: [
      {
        title: "对账单管理",
        path: "manage",
        children: [
          {
            title: "对账单管理",
            path: "list",
          },
          {
            title: "新建",
            path: "list/add",
          },
          {
            title: "编辑",
            path: "list/edit",
          },
          {
            title: "详情",
            path: "list/detail",
          },
          {
            title: "项目账单查询",
            path: "billQuery",
          },
          {
            title: "详情",
            path: "billQuery/detail",
          },
        ],
      },
    ],
  },
];
// 定义vue文件模板
export let vueFile = `<template>
  <el-card class="box-card"> {{ title }}页正在施工中...
  </el-card>
</template>

<script>
export default {
  name: 'InComplete',
  data() {
    return {
      title: '',
    }
  },
  mounted() {
    this.title = this.$router.history.current.meta.title
  }
}
</script>

<style scoped>
.box-card {
  height: 80vh;
}
</style>`;
