<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['user_id', 'delivery', 'user_name', 'user_surname', 'user_address'];

    protected $with = ['user'];

    const DELIVERIES = [
        [
            'value' => 1,
            'text' => 'Courier delivery',
            'price' => 5,
        ],
        [
            'value' => 2,
            'text' => 'Express delivery',
            'price' => 8,
        ],
        [
            'value' => 3,
            'text' => 'Pickup',
            'price' => 0,
        ],
    ];

    public function setUserNameAttribute($value)
    {
        $this->attributes['user_name'] = $this->user_id ? $this->user->name: $value;
    }

    public function setUserSurnameAttribute($value)
    {
        $this->attributes['user_surname'] = $this->user_id ? $this->user->surname: $value;
    }

    public function setFirstNameAttribute($value)
    {
        $this->attributes['user_address'] = $this->user_id ? $this->user->address: $value;
    }

    public function getDeliveryNameAttribute()
    {
        return self::DELIVERIES[$this->delivery - 1]['text'];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function items()
    {
        return $this->belongsToMany(Product::class, 'order_items')
            ->withPivot('count');
    }

    public function addItems($items)
    {
        foreach ($items as $product_id => $count) {
            if ($count > 0) {
                $this->items()->attach($product_id, ['count' => $count]);
            }
        }
    }
}
