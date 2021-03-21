<template>
    <div class="section">
        <h2 class='section-title'>{{title}}</h2>
        <slot/>
    </div>
</template>

<script>
export default {
  name: 'Section',
  props: {
    title: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang='scss' scoped>
.section {
    margin: 0;
    padding: 1rem;
}
.section-title {
    margin: 1.6rem 0;
    font-size: 2.4rem;
}
</style>