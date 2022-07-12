# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.create(email: 'adminS@homefry.com',password:'12345678', password_confirmation:'12345678')
user2 = User.create(email: 'adminV@homefry.com',password:'12345678', password_confirmation:'12345678')
user3 = User.create(email: 'adminM@homefry.com',password:'12345678', password_confirmation:'12345678')
cocktails_array1 = [
    {
        name: "Bourbon Sidecar",
        image: "https://www.acouplecooks.com/wp-content/uploads/2020/05/Bourbon-Sidecar-002.jpg",
        ingredients: ["bourbon whiskey", "Cointreau", "lemon juice", "simple syrup", "lemon twist"],
        directions: ["Place 2 ounces of whiskey, 1 ounce Cointreau, 1/2 ounch lemon juice, 1 tsp simple syrup in a cocktail shaker with a handful of ice and shake until cold", "Strain the drink into a cocktail glass", "Garnish with a lemon twist or orange twist."]
    }
    
] 
cocktails_array2 = [
    {
        name: "Bloody Mary",
        image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Bloody-Mary_EXPS_BMZ17_37175_D10_25_1b-4.jpg?resize=696,696",
        ingredients: [" celery salt", "ice cubes", "vodka", "tomato juice (chilled)", "lemon juice", "lime juice", "Worcestershire sauce", "horseradish (optional)", "black pepper", "hot pepper sauce", "optional garnishes: Celery rib, pickle spear, green and ripe olives, cucumber slice and/or cocktail shrimp"],
        directions: ["Garnish rim of tall glass with celery salt.", "Place remaining ice in prepared glass.", "Add 2 oz. vodka, 1 cup tomato juice, 1 tbsp. lemon juice, 1-1/2 tsp. lime juice, 3/4 tsp. Worcestershire sauce, 1/2 tsp. horseradish, 1/8 tsp. pepper, 1/8 tsp celery salt and 1/8 tsp. hot pepper sauce to shaker; cover and shake.", "Strain into prepared glass.", "Garnish as desired."]
    },
    {
        name: "Moscow Mule",
        image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps166450_HC173837B03_04_10b.jpg?resize=700,700",
        ingredients: ["ginger beer (chilled)", "cup lime juice", "vodka", "ice cubes", "Lime slices (optional)"],
        directions: ["Combine 4 cups ginger beer, 2/3 cup lime juice and 1-1/4 cups vodka in a pitcher.", "Serve over ice.", "If desired, serve with lime slices."]
    },
    {
        name: "Old Fashioned",
        image:"https://www.liquor.com/thmb/_0WLXSRV03SfpWgZ1hwiAkyIrzE=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__liquor__2018__05__08113350__bourbon-old-fashioned-720x720-recipe-ade6f7780c304999be3577e565c9bcdd.jpg",
        ingredients: ["Rye or bourbon", "sugar", "angostura bitters", "orange slice and twist (optional)"],
        directions: ["Add 1/2 teaspoon sugar, 3 dashes Angostura bitters to a rocks glass, then add 1 teaspoon water, and stir until the sugar is nearly dissolved.", "Fill the glass with large ice cubes, add 2 ounces bourbon, and gently stir to combine.", "Express the oil of an orange peel over the glass, then drop in."]
    }
]
cocktails_array3 = [
    {
        name: "Mimosa",
        image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mimosa-1652105768.jpg?crop=1.00xw:0.668xh;0,0.118xh&resize=980:*",
        ingredients: ["sparkling wine", "orange juice"],
        directions: ["Combine chilled sparkling wine and orange juice in a champaign flute."]
    }
]
cocktails_array1.each do |cocktail_obj|
    user1.cocktails.create cocktail_obj
end
cocktails_array2.each do |cocktail_obj|
    user2.cocktails.create cocktail_obj
end
cocktails_array3.each do |cocktail_obj|
    user3.cocktails.create cocktail_obj
end
