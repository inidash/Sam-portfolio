/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: "#1a1a22",
			accent: {
				DEFAULT: "#00ff99",
				hover: "#00e187"
			}
  		},
		container: {
			center: true, 
			padding: "15px"
		},
		screens: {
			sm: "640px",
			md: "768",
			lg: "960px",
			xl: "1200px"
		},
		fontFamily: {
			
			// 	font-family:  var(--font-geist-sans); //var(--font-geist-mono);
			//   }
			primary:  "var(--font-geist-mono)",//"var(--font-JetBrainsMono)",
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
