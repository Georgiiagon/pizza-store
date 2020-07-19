<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Get a list of the products.
     *
     * @return Product[]|\Illuminate\Database\Eloquent\Collection
     */
    public function getProducts()
    {
        return Product::all();
    }
}
