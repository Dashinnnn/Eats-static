import '../Styles/WhyEats.css'

export default function WhyEats () {
    return (
        <>
        <div className="Why-contatiner">
            <div className="header">
                <h2>Why Eats you say?</h2>
            </div>

            <div className="content">
                <ul>
                    <li>
                    <i class="fa-solid fa-gauge-simple-high"></i>
                        <b>Quick -</b> Eats offers some quick and easy to cook recipe, that will satisfy your cravings and hunger.
                    </li>
                    <li>
                    <i class="fa-solid fa-book-open"></i>
                        <b>Easy to Follow -</b> Eats laid out the step-by-step process for you! The steps and ingredients are 
                        in front of you with just a click of a button, it also have videos for you to follow!
                    </li>
                    <li>
                    <i class="fa-solid fa-check"></i>
                        <b>Beginner Friendly -</b> Eats never over complicates things and makes it easy to navigate through the pages.
                    </li>
                    <li>
                    <i class="fa-solid fa-bowl-food"></i>
                        <b>Offers New dishes Daily -</b> Try and challenge yourself with our "Dish of the Day" feature. Everyday it updates to a different a new dish
                        that may surprise your taste buds!
                    </li>
                </ul>            
            </div>
        </div>
        </>
    )
}