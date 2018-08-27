<template>
  <div class="multi-cascader">
    <div @click="expandEvent">
      <el-input :placeholder="placeholder" v-model="inputValue" :disabled="true"></el-input>
    </div>
    <el-collapse-transition>
      <div v-show="isExpand" class="tree-select">
        <el-scrollbar tag="div" wrap-class="cascader-wrap">
          <el-tree
            :data="options"
            show-checkbox
            :node-key="nodeKey"
            ref="tree"
            highlight-current
            @check-change="checkEvent">
          </el-tree>
        </el-scrollbar>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
  import './main.css';

  export default {
    name: 'ElMultiCascader',
    data() {
      return {
        inputValue: null,
        isExpand: false
      };
    },
    props: {
      placeholder: String,
      value: Array,
      options: Array,
      nodeKey: {
        type: String,
        default: 'id'
      }
    },
    methods: {
      expandEvent(event) {
        event.stopPropagation();
        this.isExpand = !this.isExpand;
      },
      getNodesLabel() {
        const nodesLabel = [];
        let nodesObj = [];


        this.$refs.tree.setCheckedKeys(this.value);
        nodesObj = this.$refs.tree.getCheckedNodes();
        nodesObj.forEach((node) => {
          nodesLabel.push(node.label);
        });
        this.inputValue = nodesLabel.join('、');
      },
      checkEvent() {
        this.$emit('input', this.$refs.tree.getCheckedKeys());
      }
    },
    watch: {
      value() {
        this.getNodesLabel();
      }
    },
    mounted() {
      this.getNodesLabel();

      document.addEventListener('click', () => {
        if (this.isExpand) this.isExpand = false;
      });
    }
  };
</script>

