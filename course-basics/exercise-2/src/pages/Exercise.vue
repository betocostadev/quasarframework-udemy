<template>
	<!--
	Awesome Exercise 2 - Vue.js Lists & Components

	1) Create an array for the food items you see on the page. Each object in the array should contain properties for the image url, name, description and deliciousness
	2) Create a v-for loop that displays these food items onto the page, with all the data coming from the food array (hint: for the image src, use :src)
	3) Add your own food item to the list
	4) Create a child component and use it to display each of your items (don't use the components/Solution/Food.vue file)
	5) Add unique id's to the food array for each item, and apply these to a :key property on your v-for loop

	-->
  <q-page padding>
  	<div class="q-pa-md row items-stretch">

			<food v-for="food in foods"
        :key="food.id"
        :food="food"
        ></food>

  	</div>
  </q-page>
</template>

<script>
// import Food from '../components/Food'
	export default {
		data() {
			return {
				foods: [
					{
						id: 1,
						img: 'https://i.imgur.com/0umadnY.jpg',
						name: 'Burguer',
						description: 'A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.',
						rating: '4'
					},
					{
						id: 2,
						img: 'https://i.imgur.com/b9zDbyb.jpg',
						name: 'Pizza',
						description: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough.',
						rating: '5'
					},
					{
						id: 3,
						img: 'https://i.imgur.com/RbKjUjB.jpg',
						name: 'Sprouts',
						description: 'The Brussels sprout is a member of the Gemmifera Group of cabbages, grown for its edible buds.',
						rating: '1'
					},
					{
						id: 4,
						img: 'https://i.imgur.com/JIO102F.jpg',
						name: 'Baked Potato',
						description: 'A baked potato, or jacket potato, is a potato that has been baked for eating. When well cooked, a baked potato has a fluffy interior and a crisp skin.',
						rating: '4.5'
					}
				]
			}
		},
		components: {
			'food': require('components/Food.vue').default
		}
	}
</script>

<style>
	.card {
		flex-basis: 210px;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 5px;
		margin-right: 10px;
		margin-bottom: 10px;
	}
	.card img {
		max-width: 100%;
	}
	.card-content {
		padding: 0 10px;
	}
	h1 {
		font-size: 23px;
	}
	p {
		font-size: 14px;
	}
</style>
