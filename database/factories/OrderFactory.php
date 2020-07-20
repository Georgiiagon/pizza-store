<?php

/** @var Factory $factory */

use App\Models\Order;
use App\Models\User;
use Faker\Generator as Faker;
use Illuminate\Database\Eloquent\Factory;

$factory->define(Order::class, function (Faker $faker) {
    return [
        'user_id' => function () {
            return factory(User::class)->create()->id;
        },
        'delivery' => 1,
        'user_name' => $faker->firstName,
        'user_surname' => $faker->lastName,
        'user_address' => $faker->address
    ];
});
