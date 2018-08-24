# el-multi-cascader

> 基于element ui 1.x版本的多选级联组件


## 安装


```sh
$ npm i el-multi-cascader --save
```

## 引入

```js
import ElMultiCascader from 'el-multi-cascader';

Vue.use(ElMultiCascader);
```

## 使用
```js
<template>
    <el-multi-cascader v-model="cascaderData" :options="testData" placeholder="请选择"></el-multi-cascader>
</template>
<script>
export default {
    data() {
      return {
          cascaderData: [],
          testData: [
             {
                 label: '互联网开发', 
                 value: '44',
                 children: [
                     { 
                         label: 'APP开发', 
                         value: '4401', 
                         children: [] 
                         
                     }
             },
             { 
                 label: '微信开发', 
                 value: '4402', 
                 children: [] 
                 
             }
          ]
      }
    }
}
</script>

