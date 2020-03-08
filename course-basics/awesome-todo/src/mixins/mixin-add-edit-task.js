export default {
  methods: {
    submitForm() {
      // console.log(this.$refs.name)
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    }
  },
  components: {
    'modal-header': require('../components/Shared/ModalHeader').default,
    'modal-task-name': require('../components/Shared/ModalTaskName').default,
    'modal-task-date': require('../components/Shared/ModalTaskDate').default,
    'modal-task-time': require('../components/Shared/ModalTaskTime').default,
    'modal-task-note': require('../components/Shared/ModalTaskNote').default,
    'modal-buttons': require('../components/Shared/ModalButtons').default
  },
}