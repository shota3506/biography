<template>
    <div class="subsection">
        <h2 class='subsection-title'>{{title}}</h2>
        <slot/>
    </div>
</template>

<script>
export default {
  name: 'SubSection',
  props: {
    title: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang='scss' scoped>
.subsection {
    margin: 0;
    padding: 0;
}
.subsection-title {
    margin: 1.2rem 0;
    font-size: 1.6rem;
}
</style>