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
        foreach (['Margherita', 'Carbonara', 'Tonno', 'Romana', 'Americana', 'Rustica', 'Contadina', 'Calzone'] as $index => $name) {
            factory(Product::class)->create([
                'name' => "$name pizza",
                'description' => "$name's description",
                'image' => "/images/pizzas/pizza-" . ($index + 1) . ".jpeg",
            ]);
        }
    }
}
