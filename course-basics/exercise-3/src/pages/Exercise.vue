<template>
	<!--
	Awesome Exercise 3 - Vuex & Forms

	1) Create a Vuex Store for the food items, with the four different sections and add the food data to the appropriate section
	2) Create a getter to retreive the food and display these on the page using the getter
	3) Add the ability to delete an item (when the user clicks Delete) using actions & mutations - show a confirm dialog before deleting
	4) Add validation to the Add / Edit Food modal - make the Name a required field with a max of 20 characters. Make description not required, but with a max of 135 characters. Validation should be triggered when Save is clicked
	5) Add the ability to Add an item (hint: both Add and Edit modals use the same component - use the 'type' prop to differentiate)
	6) Add the ability to Edit an item
	7) If no description is provided for a food item, display the text "No description provided." in italic text
	8) If no image is provided, fall back to the image statics/image-placeholder.png

	-->
  <q-page class="q-pa-lg">
  	<div class="row q-gutter-lg">

			<food 
				v-for="food in foods"
				:key="food.id"
				:food="food" />

	    <button-add
	    	@click="showAddFoodModal = true" />

	    <q-dialog 
	    	v-model="showAddFoodModal">
        <modal-add-edit-food type="add" />
      </q-dialog>
    
  	</div>
  </q-page>
</template>

<script>
	export default {
	  data() {
	  	return {
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
	  		],
	  		showAddFoodModal: false
	  	}
	  },
	  components: {
	  	'food' : require('components/Food.vue').default,
	  	'button-add' : require('components/ButtonAdd.vue').default,
	  	'modal-add-edit-food' : require('components/ModalAddEditFood.vue').default
	  }
	}
</script>