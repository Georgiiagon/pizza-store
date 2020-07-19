<?php

namespace Tests\Feature;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class OrderTest extends TestCase
{
    use DatabaseTransactions, WithFaker;

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testStoreOrder()
    {
        $ordersCount = Order::count();
        $products = Product::query()
            ->inRandomOrder()
            ->take($this->faker->numberBetween(1, 4))
            ->pluck('id');

        $data = [];
        foreach ($products as $product) {
            $data[$product] = $this->faker->numberBetween(1, 5);
        }
        $userInfo = [
            'user_name' => $this->faker->firstName,
            'user_surname' => $this->faker->lastName,
            'user_address' => $this->faker->address,
        ];

        $response = $this->post('api/order', [
            'user_info' => $userInfo,
            'delivery' => 1,
            'items' => $data,
        ]);

        $lastOrder = Order::orderBy('id', 'desc')->first();

        $response->assertOk();
        $this->assertEquals($ordersCount + 1, Order::count());
        $this->assertEquals($lastOrder->items()->count(), count($data));
        $this->assertEquals($lastOrder->user_name, $userInfo['user_name']);
        $this->assertEquals($lastOrder->user_surname, $userInfo['user_surname']);
        $this->assertEquals($lastOrder->user_address, $userInfo['user_address']);
    }
}
