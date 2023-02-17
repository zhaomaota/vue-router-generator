// 定义路由结构
export let info = [
  {
    title: "合同",
    path: "memberAbility",
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
      },
      {
        title: "合同协同",
        path: "coordination",
      },
    ],
  },
  { title: "店铺", path: "shopAbility" },
  { title: "渠道", path: "channelAbility" },
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
      formData: {
        numberRange: []
      }
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
