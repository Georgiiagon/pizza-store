<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Http\Requests\OrderRequestStore;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;
use Laravel\Sanctum\Sanctum;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Builder[]|Collection
     */
    public function index(Request $request)
    {
         return Order::query()
             ->with('items')
             ->where('user_id', $request->user()->id ?? -1)
             ->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param OrderRequestStore $request
     * @return array
     */
    public function store(OrderRequestStore $request)
    {
        DB::beginTransaction();

        $order = new Order($request->input('user_info'));
        $order->user_id = $request->user()->id ?? 0;
        $order->delivery = $request->input('delivery');
        $order->save();

        $order->addItems($request->items);

        DB::commit();

        return ['statue' => 'success'];
    }

    public function getCookie()
    {
        $orders = Order::query()->get();

        dd($orders, Product::all());
    }
}
