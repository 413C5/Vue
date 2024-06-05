const { createApp, ref } = Vue;

const app = createApp({
	/* 	template: `
    <h1>Hola mundo</h1>
    <h2>{{message}}</h2>
    <p>-{{author}}</p>
    `, */

	setup() {
		const message = ref("I'm batman");
		const author = ref('Bruce Wayne');

		const changeQuote = () => {
			message.value = 'Hola, Soy Goku';
			author.value = 'Goku';
		};

		/* 		setTimeout(() => {
			message.value = 'Hola, soy Goku';
			author.value = 'Goku';
		}, 1000); */

		return {
            message,
            author,
            changeQuote
        };
	},
});

app.mount('#myApp');
