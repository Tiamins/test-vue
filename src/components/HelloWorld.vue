<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>Essential Links</h2>
		<ul>
			<li>
				<a href="https://vuejs.org" target="_blank">
					Core Docs
				</a>
			</li>
		</ul>
		<div class="title" @click="handleHello">Hello</div>
		<template>
			<div :class="cls">red</div>
		</template>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
			cls: 'good',
		}
	},
	methods: {
		async handleHello() {
			const a = 10
			console.log('a:', a)
			const b = a + 10
			console.log('b:', b)
			let c = 12
			const obj = {
				c,
				a,
				d: a + b,
			}
			// console.log(obj)
		},
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
	font-weight: normal;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
.good {
	color: red;
}
</style>
