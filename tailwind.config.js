module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "login-pattern":
                    "url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')",
            },
            fontFamily: {
                'sans': 'Helvetica, Arial, sans-serif',
                'ibm': "Montserrat, sans-serif",
                'fira':"Fira Sans, sans-serif",
                'jose':'Josefin Sons, sans-serif'
              }
        },
        screens: {
            'phone': '360px',

            'tablet': '640px',
            // => @media (min-width: 640px) { ... }
      
            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
          },
    },
    plugins: [],
};
