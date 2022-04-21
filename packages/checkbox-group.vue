<template>
  <div class="fir-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'firCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>
