var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/foodtruck', function() {
 
  // Load Mongoose models
  seeder.loadModels([
    './models/trucks.js'
  ]);

  // Clear specified collections
  seeder.clearModels(['Truck'], function() {
     // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
});

// Data array containing seed data - documents organized by Model
var data = [
  {
      'model': 'Truck',
      'documents': [
          {
              title: 'The Curryer',
              description: 'Hi, I’m Cam Slade and I would like to introduce Mubina, my Ammi Jaan (which is Urdu for ‘Mom’). Ammi Jaan was born and raised in Faisalabad, Pakistan as the youngest of 6 sisters and a brother.',
              thumbnail: 'https://fakeimg.pl/200x200/?text=Hello',
              category: 'International',
              bizlocation: 'mcknight',
              streetlocation: 'downtown',
              direction: 'SE'
          },
          {
            title: 'Mumbai Bites',
            description: 'We offer Non traditional Indian food from the streets of Mumbai. With items like Vada Pav (Bombay Burger), Pataka (Fire Cracker) Wings, Bombay Poutine, Gulaab ka Nasha ( Rose Milk Shake) we kept our menu fun and diverse.',
            thumbnail: 'https://fakeimg.pl/200x200/?text=MumbaiBites',
            category: 'International',
            bizlocation: 'Skyview',
            streetlocation: 'Uptown',
            direction: 'NE'
          },
          {
            title: 'Take it & Go',
            description: 'Calgary’s first East African Food Truck making everything from tempting and tasty curries to authentic bodacious BBQ, ready to serve nice and hot!',
            thumbnail: 'https://fakeimg.pl/200x200/?text=TakeItNGo',
            category: 'International',
            bizlocation: 'Redstone',
            streetlocation: 'Uptown',
            direction: 'NE'
          },
          {
            title: 'Vasilis',
            description: 'With food fit for a God or Goddess, Vasili’s is serving up a mouth watering menu of greek food with a gourmet twist.',
            thumbnail: 'https://fakeimg.pl/200x200/?text=VASILIS',
            category: 'International',
            bizlocation: 'Cornerstone',
            streetlocation: '12th Street',
            direction: 'SW'
          },
          {
            title: 'Empanada Queen',
            description: 'Empanada Queen is a family owned and operated, casual Latin food truck serving Chilean and Latin influenced dishes. Our feature product is the empanada… not just any empanada, but the queen of all empanadas!',
            thumbnail: 'https://fakeimg.pl/200x200/?text=EmpanadaQueen',
            category: 'Pizza',
            bizlocation: 'Castelridge',
            streetlocation: 'Uptown',
            direction: 'NW'
          },
          {
            title: 'Greek Story',
            description: 'I knew I wanted to be a baker since I remember myself but my parents pushed me to follow a different career and keep baking as a hobby.',
            thumbnail: 'https://fakeimg.pl/200x200/?text=GreekStory',
            category: 'International',
            bizlocation: 'Cornerbrook',
            streetlocation: 'Downtown',
            direction: 'SE'
          },
          {
            title: 'Il Forno Vagabondo',
            description: 'il Forno Vagabondo roughly translates to “the wandering oven”, a concept we embrace with our mobile Forno. Crafting and serving delicious wood fired pizza in and around Okotoks and all over Southern Alberta, we are available to cater for parties, weddings, business lunches, festivals and special events.   The experience of watching the crust rise, the cheese bubble up and that first bite into a freshly made wood fired pizza is second to none.',
            thumbnail: 'https://fakeimg.pl/200x200/?text=IlFornoVagabondo',
            category: 'International',
            bizlocation: 'mcKnight',
            streetlocation: 'downtown',
            direction: 'NE'
          },
          {
            title: 'Savino Pizzeria',
            description: 'Growing up in an Italian family, great food was always on the go; and the days we made bread and pizza were charged with, almost insane, excitement. Our goal is to produce true Neapolitan pizza that will invoke that same “insanity”. Buon’ apetito!',
            thumbnail: 'https://fakeimg.pl/200x200/?text=SavinoPizzeria',
            category: 'Pizza',
            bizlocation: 'Redstone',
            streetlocation: 'Uptown',
            direction: 'NW'
          },
          {
            title: 'Avatara',
            description: 'Avatara is a company specialized in the making of Fire Roasted healthy pizza, appetizers, salads and drinks. ',
            thumbnail: 'https://fakeimg.pl/200x200/?text=Avatara',
            category: 'Pizza',
            bizlocation: 'Taradale',
            streetlocation: 'Uptown',
            direction: 'SE'
          },
          {
            title: 'Family Squeezed',
            description: 'We have re-engineered what lemonade was. These are made to order; fresh fruit and herbs...with a twist! These fresh ingredients are chopped, assembled, and muddled right before your eyes. No artificial flavours or syrups- all natural, and real fruit... At 32 ounces -  we hope you can handle it. Old-fashioned lemonade elevated to the way it was always meant to be.',
            thumbnail: 'https://fakeimg.pl/200x200/?text=FamilySqueezed',
            category: 'International',
            bizlocation: 'Redstone',
            streetlocation: 'Uptown',
            direction: 'NE'
          },
          {
            title: 'Cookie Dough YYC',
            description: 'Cookie Dough YYC is a family created and operated, award winning company that ha taken Alberta by storm with marvellously tasty edible cookie dough! Weve heard the rumours too, some people will tell you not to eat raw cookie dough, and you dont need that kind of negativity in your life :). This dough is made with love, using heat-treated flour and pasteurized eggs so its safe to eat raw, and is scooped liked ice cream. ',
            thumbnail: 'https://fakeimg.pl/200x200/?text=CookieDoughYYC',
            category: 'International',
            bizlocation: 'Redstone',
            streetlocation: 'Uptown',
            direction: 'NW'
          }
      ]
  }
];