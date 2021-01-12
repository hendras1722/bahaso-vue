<template>
  <div>
    {{ name }}
  </div>
</template>

<script>
export default {
  // console.log(props,'iniprops')
  methods: {
    fetchapplicants() {
      switch ("name") {
        case "hello":
          return <p>hello12121</p>;
        default:
          break;
      }
    },
  },
  mounted() {
    this.fetchapplicants();
  },
  props: ["name"],
};
</script>

<style>
</style>