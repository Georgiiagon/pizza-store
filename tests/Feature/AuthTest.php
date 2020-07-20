<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\WithFaker;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use DatabaseTransactions, WithFaker;


    public function testRegister()
    {
        $usersCount = User::query()->count();
        $newUser = factory(User::class)->make();

        $this->post('/api/register',
            $newUser->toArray() + ['password' => 'password']
        );

        $user = User::query()->orderBy('id', 'desc')->first();

        $this->assertEquals($usersCount + 1, User::query()->count());
        $this->assertEquals($user->name, $newUser['name']);
        $this->assertEquals($user->surname, $newUser['surname']);
        $this->assertEquals($user->address, $newUser['address']);
    }

    public function testLogin()
    {
        $user = factory(User::class)->create();

        Sanctum::actingAs($user);

        $this->get('/api/profile')->assertOk();
    }
}
