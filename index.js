import { writeFile, mkdir } from "fs";
import { info, vueFile } from "./generatorRules.js";

// 声明路由树
let routes = [];

// 创建目录
const createDirector = (director) => {
  mkdir(director, function (err) {
    if (err) {
      return console.error(err);
    }
    console.log(`${director}目录创建成功`);
  });
};
// 创建和写入文件
const createAndWriteFile = (director, content) => {
  writeFile(director, content, null, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log(`${director}创建成功`);
    }
  });
};

// 创建存放路由的文件夹
createDirector("./views");

for (let i = 0; i < info.length; i++) {
  // 获取一级菜单的子项
  let firstLevelItem = info[i];
  // 创建一级菜单对应的文件夹
  createDirector(`./views/${firstLevelItem.path}`);
  // 一级菜单首字母大写
  let firstLevelItemName =
    firstLevelItem.path.slice(0, 1).toUpperCase() +
    firstLevelItem.path.slice(1);
  // 生成一级菜单
  routes[i] = {
    path: "/" + firstLevelItem.path,
    component: "Layout",
    name: firstLevelItemName,
    meta: {
      title: firstLevelItem.title,
      icon: "nested",
    },
  };
  if (firstLevelItem?.children) {
    routes[i].children = [];
    for (let j = 0; j < firstLevelItem.children.length; j++) {
      // 获取二级菜单的子项
      let SecondaryItem = firstLevelItem.children[j];
      // 创建二级菜单对应的文件夹
      createDirector(`./views/${firstLevelItem.path}/${SecondaryItem.path}`);
      // 二级菜单name首字母大写
      let SecondaryItemName =
        SecondaryItem.path.slice(0, 1).toUpperCase() +
        SecondaryItem.path.slice(1);
      // 生成二级菜单
      routes[i].children[j] = {
        path: SecondaryItem.path,
        component: "()=>import('@/views/nested/index')",
        name: SecondaryItemName,
        meta: { title: SecondaryItem.title },
      };
      if (SecondaryItem?.children) {
        routes[i].children[j].children = [];
        for (let k = 0; k < SecondaryItem.children.length; k++) {
          // 获取三级菜单的子项
          let threeLevelItem = SecondaryItem.children[k];
          // 分割三级菜单path，获取三级菜单目录名及文件名
          let threeLevelDirector = "";
          let threeLevelFileName = "";
          if (threeLevelItem.path.split("/").length === 2) {
            threeLevelDirector = threeLevelItem.path.split("/")[0];
            threeLevelFileName = threeLevelItem.path.split("/")[1];
          } else {
            threeLevelDirector = threeLevelItem.path;
            threeLevelFileName = "index";
          }
          // 创建三级菜单对应的文件夹
          createDirector(
            `./views/${firstLevelItem.path}/${SecondaryItem.path}/${threeLevelDirector}`
          );
          // 生成三级菜单文件夹内部的vue文件
          createAndWriteFile(
            `./views/${firstLevelItem.path}/${SecondaryItem.path}/${threeLevelDirector}/${threeLevelFileName}.vue`,
            vueFile
          );
          // 三级菜单首字母大写
          let threeLevelItemName =
            threeLevelItem.path.slice(0, 1).toUpperCase() +
            threeLevelItem.path.slice(1);
          // 生成三级菜单
          routes[i].children[j].children[k] = {
            path: threeLevelItem.path,
            component: `()=>import('@/views/${firstLevelItem.path}/${SecondaryItem.path}/${threeLevelItem.path}')`,
            name: threeLevelItemName,
            meta: { title: threeLevelItem.title },
            hidden: threeLevelItem.path.split("/").length === 1 ? false : true,
          };
        }
      }
    }
  }
}
let routesJson = JSON.stringify(routes);

routesJson = routesJson.replace(/\"Layout\"/g, "Layout");
routesJson = routesJson.replace(/\"\(\)/g, "()");
routesJson = routesJson.replace(/\'\)\"/g, "')");
console.log(routesJson);

createAndWriteFile("./" + "routes.js", routesJson);
