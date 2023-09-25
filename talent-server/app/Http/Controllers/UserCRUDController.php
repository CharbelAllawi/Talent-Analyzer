<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserCRUDController extends Controller
{
    function get_users($id = null)
    {
        if ($id) {
            $user = User::find($id);
            if ($user) {
                $userData = [
                    'id' => $user->id,
                    'username' => $user->username,
                    'email' => $user->email,
                    'password' => $user->password,
                ];
                return response()->json([$userData]);
            } else {
                return response()->json(['error' => 'User not found'], 404);
            }
        } else {
            $users = User::all();
            $userList = [];

            foreach ($users as $user) {
                $userList[] = [
                    'id' => $user->id,
                    'username' => $user->username,
                    'email' => $user->email,
                    'password' => $user->password,
                ];
            }

            return response()->json([$userList]);
        }
    }
    public function removeuser($id)
    {
        $user = User::find($id)->delete();
    }


    public function addOrUpdateUser(Request $request, $id = null)
    {
        if ($id === null || $id === "add") {
            $user = new User();
        } else {
            $user = User::find($id);

            if (!$user) {
                return response()->json(['error' => 'User not found'], 404);
            }
        }
        $user->username = $request->input('username', $user->username);
        $user->email = $request->input('email', $user->email);
        $user->password =  Hash::make($request->password);
        $user->save();

        return response()->json(["user" => $user]);
    }
}
