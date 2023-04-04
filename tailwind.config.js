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
                    "url('https://cdn.discordapp.com/attachments/1092390790162038844/1092506289998938213/backgrDreaptaSus.png')",
            },
            boxShadow: {
                "3xl": [
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px",
                    "rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                ],
            },
            fontFamily: {
                sans: "Helvetica, Arial, sans-serif",
                ibm: "Montserrat, sans-serif",
                fira: "Fira Sans, sans-serif",
                jose: "Josefin Sons, sans-serif",
            },
        },
        screens: {
            phone: "360px",

            tablet: "640px",
            // => @media (min-width: 640px) { ... }

            laptop: "1024px",
            // => @media (min-width: 1024px) { ... }

            desktop: "1280px",
            // => @media (min-width: 1280px) { ... }
        },
    },
    plugins: [],
};
