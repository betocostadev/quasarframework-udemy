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
        <modal-add-edit-food 
        	@close="showAddFoodModal = false"
        	type="add" />
      </q-dialog>
    
  	</div>
  </q-page>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
	  data() {
	  	return {
	  		showAddFoodModal: false
	  	}
	  },
	  computed: {
	  	...mapGetters('solutionFoods', ['foods'])
	  },
	  components: {
	  	'food' : require('components/Solution/Food.vue').default,
	  	'button-add' : require('components/Solution/ButtonAdd.vue').default,
	  	'modal-add-edit-food' : require('components/Solution/ModalAddEditFood.vue').default
	  }
	}
</script>