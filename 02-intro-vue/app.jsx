const { createApp, ref } = Vue;

const app = createApp({
	template: `
    <h1>Hola mundo</h1>
    <p>Desde app.jsx</p>
    `,
});

app.mount('#myApp');
