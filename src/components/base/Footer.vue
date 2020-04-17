<template>
  <div>
    <p v-for="(item,id) in arr" :key="id">{{item}}</p>
  </div>
</template>
<script>
export default {
  props: ['arr'],
  data() {
    return {};
  }
};
</script>
<style scoped>
div {
  width: 100%;
  height: 5%;
  background: rgb(84, 92, 100,.7);
  border-top: 1px solid #cccccc;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  color: white;
}
div p{
  color: white;
  line-height: normal;
}
</style>