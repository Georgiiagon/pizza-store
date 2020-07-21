<?php

namespace Tests\Feature;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Collection;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class OrderTest extends TestCase
{
    use DatabaseTransactions, WithFaker;

    /**
     * @var array
     */
    private $userInfo;
    /**
     * @var Collection
     */
    private $products;
    /**
     * @var array
     */
    private $fakeCart;
    /**
     * @var \Illuminate\Database\Eloquent\Collection|User
     */
    private $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = factory(User::class)->create();

        $this->userInfo = [
            'user_name' => $this->faker->firstName,
            'user_surname' => $this->faker->lastName,
            'user_address' => $this->faker->address,
        ];

        $this->products = Product::query()
            ->inRandomOrder()
            ->take($this->faker->numberBetween(1, 4))
            ->pluck('id');

        $this->fakeCart = [];
        foreach ($this->products as $product) {
            $this->fakeCart[$product] = $this->faker->numberBetween(1, 5);
        }
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testStoreOrderWithoutAuth()
    {
        $ordersCount = Order::query()->count();

        $response = $this->post('api/order', [
            'user_info' => $this->userInfo,
            'delivery' => 1,
            'items' => $this->fakeCart,
        ]);

        $lastOrder = Order::query()->orderBy('id', 'desc')->first();

        $response->assertOk();
        $this->assertEquals($ordersCount + 1, Order::query()->count());
        $this->assertEquals($lastOrder->items()->count(), count($this->fakeCart));
        $this->assertEquals($lastOrder->user_name, $this->userInfo['user_name']);
        $this->assertEquals($lastOrder->user_surname, $this->userInfo['user_surname']);
        $this->assertEquals($lastOrder->user_address, $this->userInfo['user_address']);
    }

    public function testStoreOrderWithAuth()
    {
        Sanctum::actingAs($this->user);

        $ordersCount = Order::query()->count();

        $response = $this->post('api/order', [
            'user_info' => $this->userInfo,
            'delivery' => 1,
            'items' => $this->fakeCart,
        ]);

        $lastOrder = Order::query()->orderBy('id', 'desc')->first();

        $response->assertOk();
        $this->assertEquals($ordersCount + 1, Order::query()->count());
        $this->assertEquals($lastOrder->items()->count(), count($this->fakeCart));
        $this->assertEquals($this->user->id, $lastOrder->user_id);
    }

    public function testGetOrdersWithAuth()
    {
        Sanctum::actingAs($this->user);

        $orders = factory(Order::class, 3)->create(['user_id' => $this->user])->each(function($order) {
            $order->addItems($this->fakeCart);
        });

        $response = $this->get('api/order')->assertOk();

        $orders->load('items');

        $this->assertEquals($orders->toArray(), $response->decodeResponseJson());
    }

    public function testGetOrdersWithoutAuth()
    {
        $orders = factory(Order::class, 3)->create(['user_id' => 0])->each(function($order) {
            $order->addItems($this->fakeCart);
        });

        $response = $this->get('api/order')->assertOk();

        $orders->load('items');

        $this->assertEquals([], $response->decodeResponseJson());
    }
}
