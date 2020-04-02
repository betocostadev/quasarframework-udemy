<template>
	<q-card
		@click="$emit('click')"
  	class="card card-clickable bg-grey-4">
		 <q-icon
		 	name="add"
		 	size="104px"
		 	color="white"
		 	class="absolute-center"
		/>
  </q-card>
</template>