<?php

namespace App\Http\Requests;

use App\Rules\ValidateArrayRule;
use Illuminate\Foundation\Http\FormRequest;
use App\Models\Order;

class OrderRequestStore extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $deliveryValues = implode(',', array_column(Order::DELIVERIES, 'value'));
//        dd($this->items);
        return [
            'user_info.user_name' => 'required|string',
            'user_info.user_surname' => 'required|string',
            'user_info.user_address' => 'required|string',
            'delivery' => 'required|integer|in:' . $deliveryValues,
            'items' => ['required', 'array', 'min:1', new ValidateArrayRule],
        ];
    }
}
