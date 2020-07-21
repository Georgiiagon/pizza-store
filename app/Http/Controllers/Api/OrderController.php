<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

use App\Http\Requests\OrderRequestStore;
use App\Models\Order;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return Builder[]|Collection
     */
    public function index(Request $request)
    {
        return auth('sanctum')->user()->orders ?? [];
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
        $order->user_id = auth('sanctum')->user()->id ?? 0;
        $order->delivery = $request->input('delivery');
        $order->save();

        $order->addItems($request->input('items'));

        DB::commit();

        return ['status' => 'success'];
    }
}
