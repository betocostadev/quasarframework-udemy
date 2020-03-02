import Vue from "vue"
import { uid } from 'quasar'

const state = {
  foods: {
    'uid1': {
      id: 1,
      name: 'Burger',
      description: 'A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.',
      imageUrl: 'https://i.imgur.com/0umadnY.jpg',
      rating: 4
    },
    'uid2': {
      id: 2,
      name: 'Pizza',
      description: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough.',
      imageUrl: 'https://i.imgur.com/b9zDbyb.jpg',
      rating: 5
    },
    'uid3': {
      id: 3,
      name: 'Sprouts',
      description: 'The Brussels sprout is a member of the Gemmifera Group of cabbages, grown for its edible buds.',
      imageUrl: 'https://i.imgur.com/RbKjUjB.jpg',
      rating: 1
    }
  }
}

const mutations = {
  addFood(state, payload) {
    Vue.set(state.foods, payload.id, payload.food)
  },
  editFood(state, food) {
    Vue.set(state.foods, food.id, food)
  },
  deleteFood(state, id) {
    Vue.delete(state.foods, id)
  }
}

const actions = {
  addFood({ commit }, food) {
    let foodId = uid()
    let payload = {
      id: foodId,
      food: food
    }
    commit('addFood', payload)
  },
  editFood({ commit }, food) {
    commit('editFood', food)
  },
  deleteFood({ commit }, id) {
    commit('deleteFood', id)
  }
}

const getters = {
  foods: (state) => {
    return state.foods
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}