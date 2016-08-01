<template>
  <div>
    {{value}}
    <span v-for="m in subitems">{{m}}</span>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data: function () {
    return {
      subitems: [1,2,3]
    }
  }
}
</script>
