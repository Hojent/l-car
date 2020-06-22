<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Feedback;

class FeedbackController extends Controller
{
    public function send(Request $request) {
        $mess = new Feedback($request);
        $toEmail = "admin@avtobelarus.com";
        Mail::to($toEmail)
        ->send($mess->subject('Welcome!'));
        return redirect()->back()
            ->with('status', 'Ваше сообщение успешно отправлено владельцу сайта!'); //создание переменной status в сессии - session('status')
    }
}