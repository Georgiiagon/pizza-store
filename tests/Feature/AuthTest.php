<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthTest extends TestCase
{
    use DatabaseTransactions, WithFaker;


    public function testRegister()
    {
        $usersCount = User::count();

        $this->post('/api/register',
            factory(User::class)->make()->toArray() + ['password' => 'password']
        );

        $user = User::orderBy('id', 'desc')->first();

        $this->assertAuthenticatedAs($user);
        $this->assertEquals($usersCount + 1, User::count());
    }

    public function testLogin()
    {
        $user = factory(User::class)->create();

        $this->post('/api/login',
            ['email' => $user->email, 'password' => 'password']
        );

        $this->assertAuthenticatedAs($user);
    }
}
