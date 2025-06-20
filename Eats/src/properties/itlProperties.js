import arancini from  '../assets/itlFood/arancini.jpg'
import baked from '../assets/itlFood/baked.jpg'
import lasagna from '../assets/itlFood/lasagna.jpg'
import alfredo from '../assets/itlFood/alfredo.jpg'
import ossobocu from '../assets/itlFood/ossobocu.jpg'
import casio from '../assets/itlFood/cacio_e_pepe.jpg'

export default [
    {
        id: 1, 
        dishName: "Arancini",
        img: {
            src: arancini,
            alt: "Image of Arancini dish"
        },
        desc: "Arancini or also known as arancine. These little ones that looks golden are italian riceballs. It is made out of risotto with a stuffed center; in some cases they stuff It with mozzarella cheese, it is also breaded to make a nice crunchy and golden outer layer. This dish is a known to be a Sicilian street food.", 
    }, 

    {
        id: 2, 
        dishName: "Baked Italian Chicken Thighs",
        img: {
            src: baked,
            alt: "Image of Baked Italian Thighs",
        },
        desc: "These juicy chicken thighs are topped with a flavorful blend of three cheeses and your favorite marinara sauce, 'says Allrecipes Allstar France C.' Serve over pasta or rice or alongside roasted potatoes for a tasty weeknight meal. I like to shred my own cheese, as I find it melts better, but feel free to use pre-shredded to save time."
    },

    {
        id: 3,
        dishName: "Lasagna",
        img: {
            src: lasagna,
            alt: "Image of Lasagna"
        },
        desc: "Lasagna, also known as lasagne, is a type of pasta, possibly one of the oldest types, made in very wide, flat sheets. The same-named Italian dish is made of stacked layers of lasagna alternating with fillings such as ragù, béchamel sauce, vegetables, cheeses, and seasonings and spices."
    },

    {
        id: 4,
        dishName: "Alfredo Fettuccine",
        img: {
            src: alfredo,
            alt: "An image of Alfredo Fettuccine"
        },
        desc: "Fettuccine Alfredo is a pasta dish consisting of fettuccine tossed with butter and Parmesan cheese, which melt and emulsify to form a rich cheese sauce coating the pasta."
    }, 

    {
        id: 5,
        dishName: "Osso Bocu",
        img: {
            src: ossobocu,
            alt:"An image of Osso bocu"
        },

        desc: "Osso buco is a classic Italian dish, specifically from the Lombardy region, featuring cross-cut veal shanks (or sometimes beef shanks) braised in white wine, broth, and vegetables. "
    },

    {
        id: 6,
        dishName: "Casio E Pepe",
        img: {
            src: casio,
            alt: "An image of Casio E Pepe"
        },
        desc: "An iconic dish of the 'Eternal City' Roma, cacio e pepe or pasta de pepe simply translates to cheese and pepper pasta. While this dish is definitely not as well known as other Roman classics like spaghetti alla carbonara, it is cheesy indulgence at its finest."
    }
]