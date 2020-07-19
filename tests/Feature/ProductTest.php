<?php

namespace Tests\Feature;

use App\Models\Product;
use Tests\TestCase;
use Throwable;

class ProductTest extends TestCase
{
    /**
     * @return void
     * @throws Throwable
     */
    public function testGetProducts()
    {
        $products = Product::all();
        $response = $this->get('api/get-products')->assertOk();

        $this->assertEquals($products->toArray(), $response->decodeResponseJson());
    }
}
