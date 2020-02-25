// We will import vue here because we will not use 'delete object method'. We will use a vue method to keep the component reactive
import Vue from "vue"

// The tasks array was changed for an object because we will use Firebase.
// Firebase will create objects inside objects inside objects...
const state = {
  tasks: {
    'ID1': {
      name: 'Quasar Section 6',
      comment: 'Complete it today',
      completed: false,
      dueDate: '2020/02/25',
      dueTime: '9:30'
    },
    'ID2': {
      name: 'Quasar Section 7',
      comment: 'Complete it today',
      completed: false,
      dueDate: '2020/02/25',
      dueTime: '12:00'
    },
    'ID3': {
      name: 'Go to Gym',
      comment: 'Go at 9 o clock',
      completed: false,
      dueDate: '2020/02/25',
      dueTime: '11:00'
    },
    'ID4': {
      name: 'Quasar Section 8',
      comment: '',
      completed: false,
      dueDate: '2020/02/25',
      dueTime: '15:30'
    },
  }
  /*
  tasks: [
     {
      id: 1,
      name: 'Quasar Section 6',
      comment: 'Complete it today',
      completed: false,
      dueDate: '2020/02/25',
      dueTime: '9:30'
    },
    {
      id: 2,
      name: 'Quasar Section 7',
      comment: 'Complete it today',
      completed: false,
      dueDate: '2020/02/25',
      dueTime: '12:00'
    },
    {
      id: 3,
      name: 'Go to Gym',
      comment: 'Go at 9 o clock',
      completed: false,
      dueDate: '2020/02/25',
      dueTime: '11:00'
    },
    {
      id: 4,
      name: 'Quasar Section 8',
      comment: '',
      completed: false,
      dueDate: '2020/02/25',
      dueTime: '15:30'
    },
  ] */
}

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    // delete state.tasks.id //it works, but its not recommended to use with vue
    Vue.delete(state.tasks, id)
  }
}

// Pass the payload: ( {}, payload )
// We use the commit to update the mutation
const actions = {
  updateTask({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask({ commit }, id) {
    commit('deleteTask', id)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

// Using namespace we are allowed to have multiple store modules in our app

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}