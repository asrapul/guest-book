<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

use function Laravel\Prompts\password;

class authController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'username'=>'required',
            'email'=>'required',
            'password'=>'required',
            'code'=>'required',
            'role'=>'required|in:staf,superadmin',
        ]);
        $user = User::create([
          'username'=>$request->username,
          'email'=>$request->email,
          'password'=>Hash::make($request->password),
          'code'=>$request->code,
          'role'=>$request->role,
        ]);
        return response()->json($user);
    }
    public function login(Request $request)
    {
        $request->validate([
            'username'=>'required',
            'password'=>'required',
        ]);
        $user=User::Where('username', $request->username)->first();

        auth()->login($user);

        $token = $user->CreateToken('auth_token')->plainTextToken;
        return response()->json([
                'access_token' => $token,
                'token_type' => 'Bearer',
                'user' => $user,
            ]);
        }


            public function logout(Request $request) {
                $request->user()->currentAccessToken()->delete();
                return response()->json([
                    'message' => 'Logged out successfully'
            ]);
        }
        public function user() {
            $data=user::where('id', auth()->user()->id)->first();
            return response()->json($data);
        }
    }
