import chemex_body from "../assets/images/chemex_body.jpg";
import grinder from "../assets/images/grinder.jpg";
import coffee_beans from "../assets/images/coffee_beans.jpg";
import kettle from "../assets/images/kettle.jpg";
import chemex_filter from "../assets/images/chemex_filter.jpg";
import ground_coffee_spoon from "../assets/images/ground_coffee_spoon.jpg";
import fine_grinding from "../assets/images/fine_grinding.jpg";
import medium_grinding from "../assets/images/medium_grinding.jpg";
import corase_grinding from "../assets/images/corase_grinding.jpg";
import temp_control_kettle from "../assets/images/temp_control_kettle.jpg";
import electric_kettle from "../assets/images/electric_kettle.jpg";

const step = [
    {
        id: 1,
        title: "Prepare coffee and Chemex",
        content_detail: [{
            substep_id: 1,
            title: "What you will need",
            sub_content: [
                {
                    content_type: "plain_text",
                    title: "Chemex Preparation",
                    content: ["The Chemex system was developed by the chemist Peter Schlumbohn in 1941 to achieve a single result, prepare a perfect cup of coffee. The Chemex method is the fractional extraction of only the desirable parts of the coffee bean. An adequate extraction at 88 94 degrees Celsius and the use of its special filters leaves the bitter remains in the coffee grounds, not in the cup."]
                }, {
                    content_type: "ingredient",
                    title: "What you will need",
                    content: [{
                        title: "Chemex",
                        value: "3 Cups",
                        image_src: chemex_body
                    }, {
                        title: "Grinder",
                        value: "Medium",
                        image_src: grinder
                    }, {
                        title: "Coffee Beans",
                        value: "64 grams",
                        image_src: coffee_beans
                    }, {
                        title: "Weight",
                        value: "Oz"
                    }, {
                        title: "Kettle",
                        value: "4 Oz Water",
                        image_src: kettle
                    }, {
                        title: "Chemex Filter",
                        value: "1 qty",
                        image_src: chemex_filter

                    }]
                },
            ],
            note: "Talk to your manager in case you don’t have the necessary equipment."
        }, {
            substep_id: 2,
            title: "Grind Coffee",
            sub_content: [
                {
                    content_type: "media_carousel",
                    title: "Grind Coffee",
                    content: [{
                        description: "The following grind sizes are all you’ll need to brew great cups using different brewing methods.",
                        medias: [{
                            source: ground_coffee_spoon,
                            caption: "Coarse and extra course should be  the size of your coffee grain.",
                            alt: "Grounded coffee with spoon"
                        }, {
                            source: fine_grinding,
                            caption: "Fine ground coffee",
                            alt: "Fine ground coffee"
                        }, {
                            source: medium_grinding,
                            caption: "Medium ground coffee",
                            alt: "Medium ground coffee"
                        }, {
                            source: corase_grinding,
                            caption: "Coarse ground coffee",
                            alt: "Coarse ground coffee"
                        }]
                    }]
                }
            ],
            note: "Grind coffee can determine the quality of the brewage."
        }, {
            substep_id: 3,
            title: "Water Temperature",
            sub_content: [
                {
                    content_type: "media_carousel",
                    title: "Water Temperature",
                    content: [{
                        description: "Boil water up to 192 ºF (88 ºC), and avoid passing the boiling temperature.",
                        medias: [{
                            source: electric_kettle,
                            caption: "Water temperature plays an important part on the taste of your coffee.",
                            alt: "electric kettle"
                        }, {
                            source: temp_control_kettle,
                            caption: "You could also use an electric kettle with temperature control to boil water to the desired temperature.",
                            alt: "Temperature control electric kettle"
                        }]
                    }]
                }
            ],
            note: "If you don’t have a thermometer to measure the water’s temperature, pay attention if it’s about to boil, and then turn it off."
        }],
    }, {
        id: 2,
        title: "Ratio Calculation",
        content_detail: [{
            substep_id: 1,
            title: "Golden Ratio",
            sub_content: [
                {
                    content_type: "desc_with_ref",
                    title: "About Ratio",
                    content: [{
                        description: "Coffee brewing ratios are the number of coffee grounds in grams to water in grams used as a starting point across all coffee brewing methods. The Specialty Coffee Association recommends a 1:18 coffee-to-water ratio as their Golden Cup Standard for many brewing methods like pour-over, French Press, Chemex, and Autodrip.",
                        reference: "– Coffee Bros / coffeebros.com"
                    }]
                }, {
                    content_type: "desc_with_ref",
                    title: "The Golden Ratio",
                    content: [{
                        description: "Coffee’s golden ratio is 1:18 (1 gram of coffee to every 18 grams of water). If you want a stronger cup, use a ratio of 1:15 or if you want a lighter cup, use 1:18. But somewhere between 15 to 18 grams of water to every gram of coffee is most common. Espresso on the other hand, uses a ratio of 1:2 (1 gram of coffee to 2 grams of water) because it is a concentrate that is typically diluted in water or milk.",
                        reference: "– Methodical Coffee / methodicalcoffee.com"
                    }]
                },
            ],
            note: "The ratio is very easy to understand. Let's say you have 1 g of coffee and 1 g of water. In this case, the coffee-to-water ratio is 1:1."
        }, {
            substep_id: 2,
            title: "Calculating",
            sub_content: [
                {
                    content_type: "desc_with_ref",
                    title: "Calculating",
                    content: [{
                        description: "Coffee brewing ratios are the number of coffee grounds in grams to water in grams used as a starting point across all coffee brewing methods. The Specialty Coffee Association recommends a 1:18 coffee-to-water ratio as their Golden Cup Standard for many brewing methods like pour-over, French Press, Chemex, and Autodrip.",
                        reference: "– Coffee Bros / coffeebros.com"
                    }]
                },
                {
                    content_type: "ratio_calc",
                    content: [{ default_ratio: 18 }]
                },
            ],
            note: "The ratio is very easy to understand. Let's say you have 1 g of coffee and 1 g of water. In this case, the coffee-to-water ratio is 1:1."
        }
        ],
    }
];

export default step;