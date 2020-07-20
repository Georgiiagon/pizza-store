<?php

/** @var Factory $factory */

use \App\Models\Product;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Product::class, function (Faker $faker) {
    return [
        'name' => $faker->word,
        'description' => $faker->text(60),
        'price' => $faker->randomFloat(2, 5, 10),
        'image' => '/images/pizzas/pizza-1.jpeg',
    ];
});
