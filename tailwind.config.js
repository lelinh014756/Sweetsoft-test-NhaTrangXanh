module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue,scss}"],
  theme: {
    extend: {
      colors: {
        primary: "#8cb916",
        primary_text: '#279435',
      },
      height: {
        mobile: '68px',
        pc: '108px'
      }
    },
  },
  plugins: [],
};
