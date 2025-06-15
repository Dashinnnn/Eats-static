import arancini from  '../assets/itlFood/arancini.jpg'
import baked from '../assets/itlFood/baked.jpg'
import lasagna from '../assets/itlFood/lasagna.jpg'

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
    }
]