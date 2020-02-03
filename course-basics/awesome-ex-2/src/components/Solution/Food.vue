<template>
  <div 
  	class="card shadow-1">
  	<img :src="food.image" width="198" height="180">
  	<div class="card-content">
  		<h1 class="text-primary">{{ food.name }}</h1>
  		<p>{{ food.description }}</p>
  		<p>
	  		<small>
	  			<b>Delicousness:</b>
	  		</small>
	  		<b class="text-primary">
  	  		{{ food.deliciousness }}/5
	  		</b>
  		</p>
  	</div>
  </div>
</template>

<script>
	export default {
		props: ['food']
	}
</script>