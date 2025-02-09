module.exports = {
	content: [
		"./app/**/*.{html,erb,js,jsx,ts,tsx,vue}", // Pastikan mencakup semua file yang menggunakan Tailwind
		"./app/helpers/**/*.rb", // Menambahkan helper di folder helpers jika perlu
	],
	theme: {
		extend: {},
	},
	plugins: [],
	mode: "jit",
};
