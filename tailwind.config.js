/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}"],
    theme: {
        screens: {
            small: "0px",
            mobile: "375px",
            mobileOldHorSmall: "419px",
            mobileHorSmall: "567px",
            mobileHor: "640px",
            tablet: "767px",
            bigHor: "811px",
            vertIpadMini: "820px",
            bigPhoneHor: "844px",
            laptop: "976px",
            ipad: "1023px",
            hd: "1365px",
            fhd: "1440px",
        },
        extend: {
            fontFamily: {
                paris: "Parisienne, cursive",
                meow: "Meow Script, cursive",
                garamond: "EB Garamond, serif",
            },
            colors: {
                offWhite: "#f2f2f2",
                offBlack: "#181818",
                greige: "#D9D4CF",
                midGreige: "#b4a793",
                btnHover: "#bda18c",
                btnNormal: "#5d4e41 ",
            },
        },
    },
    plugins: [],
};
