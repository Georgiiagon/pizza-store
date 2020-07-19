<?php

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($number = 1; $number < 9; $number++) {
            factory(Product::class)->create([
                'name' => "Pizza $number",
                'description' => "Pizza's description $number",
                'image' => "/images/pizzas/pizza-$number.jpeg",
            ]);
        }
    }
}
