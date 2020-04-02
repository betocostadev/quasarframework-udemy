import Vue from 'vue'
import { uid } from 'quasar'

const state = {
	foods: [
		{
			id: 1,
			name: 'Burger',
			description: 'A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.',
			imageUrl: 'https://i.imgur.com/0umadnY.jpg',
			rating: 4
		},
		{
			id: 2,
			name: 'Pizza',
			description: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough.',
			imageUrl: 'https://i.imgur.com/b9zDbyb.jpg',
			rating: 5
		},
		{
			id: 3,
			name: 'Sprouts',
			description: 'The Brussels sprout is a member of the Gemmifera Group of cabbages, grown for its edible buds.',
			imageUrl: 'https://i.imgur.com/RbKjUjB.jpg',
			rating: 1
		}
	]
}

const mutations = {
	deleteFood(state, id) {
		let index = state.foods.findIndex(food => food.id == id);
		Vue.delete(state.foods, index)
	},
	addFood(state, food) {
		state.foods.push(food)
	},
	updateFood(state, food) {
		let index = state.foods.findIndex(stateFood => stateFood.id == food.id)
		Vue.set(state.foods, index, food)
	}
}

const actions = {
	deleteFood({ commit }, id) {
		commit('deleteFood', id)
	},
	addFood({ commit }, food) {
		let newId = uid()
		food.id = newId
		commit('addFood', food)
	},
	updateFood({ commit }, food) {
		commit('updateFood', food)
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