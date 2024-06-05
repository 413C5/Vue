const { createApp, ref } = Vue;

const app = createApp({
	template: `
    <h1>Hola mundo</h1>
    <h2>{{message}}</h2>
    <p>-{{author}}</p>
    `,

	setup() {
		const message = ref("I'm batman");
		const author = ref('Bruce Wayne');

		setTimeout(() => {
			message.value = 'Soy Goku';
			author.value = 'Goku';
		}, 1000);

		return { message,author };
	},
});

app.mount('#myApp');
