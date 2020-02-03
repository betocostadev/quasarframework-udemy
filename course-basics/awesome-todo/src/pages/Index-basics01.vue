<template>
  <q-page padding>
    <button class="ab-right" @click="counter++">{{ counter }}</button>
  <!-- Using a Vue Directive with v-"directive_name" -->
    <input type="text"
          v-model="message"
          @keyup="handleKeyUp"
          v-autofocus
          :style="styleGood"
          v-bind:class="{ 'error' : message.length > 22}"
          />
          <!-- <input @mouseenter="alertMessage"> -->
    <button @click="clearMessage">Clear</button>

    <p>Message length: {{ message.length }}</p>
    <!-- Since message.length is inside the v-show. The H5 will be set to display:none
    And it will get back to the page when there is content in the message
    If it was a v-if instead of v-show, the element would be removed from the DOM!-->
    <h5
        class="border-grey"
        v-if="message.length">{{ message }}</h5>
    <h6 v-else>No message entered!</h6>

    <p ref="lowerParagraph">Using a ref here!</p>

    <hr>

    <!-- The problem with calling the method the way below is that it will be called every time the we have an event on the page. Even if we do something else.
    That's why we use computed. To avoid events firing other events that are not related to it. -->
    <!-- <p>Uppercase message: {{ messageUpperCase() }}</p> -->
    <!-- Now using a computed: -->
    <p>Uppercase message: {{ messageUpperCase }}</p>
    <!-- Using a filter -->
    <p>Lowercase message: {{ message | messageLowerCase }}</p>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: 'Im learning Vue.js',
      counter: 0
    }
  },
  computed: {
    messageUpperCase() {
      // To see that if breaks the page. Check the log when calling another method.
      console.log('Message Upper Case function was fired!')
      return this.message.toUpperCase()
    },
    styleGood() {
      if (this.message.length <= 22) {
        return 'background: #e7e7e7'
      }
    }
  },
  methods: {
    clearMessage() {
      this.message = ''
    },

    handleKeyUp(e) {
      // ESC keycode = 27 | ENTER keycode = 13
      if (e.keyCode === 27) {
        this.message = ''
      } else if (e.keyCode === 13) {
        this.alertMessage()
      }
    },

    alertMessage() {
      alert(`Mensagem: ${this.message}`)
    },

    // messageUpperCase() {
    //   // To see that if breaks the page. Check the log when calling another method.
    //   console.log('Message Upper Case function was fired!')
    //   return this.message.toUpperCase()
    // }
  },
  filters: {
    messageLowerCase(value) {
      return value.toLowerCase()
    }
  },
  directives: {
    autofocus: {
      inserted(el) {
        console.log('Directive: Input inserted')
        el.focus()
      }
    }
  },
  // beforeCreate() {
  //   console.log('Before create fired!')
  // },
  // created() {
  //   console.log('Created fired!')
  // },
  // beforeMount() {
  //   console.log('Before mount fired!')
  // },
  mounted() {
    console.log('Mounted fired!')
    console.log(this.$refs)
    this.$refs.lowerParagraph.className = 'bg-green'
  },
  // beforeUpdate() {
  //   console.log('Before update fired!')
  // },
  // updated() {
  //   console.log('Updated fired!')
  // },
  // beforeDestroy() {
  //   console.log('Before destroy fired!')
  // },
  // destroyed() {
  //   console.log('Destroyed fired!')
  // }
}
</script>

<style>
  .border-grey {
    border: 1px solid grey;
  }

  input, button {
    font-size: 1.4rem;
  }

  .ab-right {
    position: absolute;
    right: 10px;
  }

  .error {
    color: red;
    background: pink;
  }
</style>