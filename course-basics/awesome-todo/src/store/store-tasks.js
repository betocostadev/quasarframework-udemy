const state = {
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
  ]
}

const mutations = {

}

const actions = {

}

const getters = {

}

// Using namespace we are allowed to have multiple store modules in our app

export default {
  namespace: true,
  state,
  mutations,
  actions,
  getters
}