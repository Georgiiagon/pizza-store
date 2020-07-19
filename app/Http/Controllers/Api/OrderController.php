<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Http\Requests\OrderRequestStore;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Builder[]|Collection
     */
    public function index()
    {
         return Order::query()
             ->with('items')
             ->where('user_id', Auth::id())
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

        $order = new Order($request->user_info);
        $order->user_id = Auth::id() ?? 0;
        $order->delivery = $request->delivery;
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
