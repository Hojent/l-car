<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Feedback;

class FeedbackController extends Controller
{
    public function send() {
        $comment = 'Это сообщение отправлено из формы обратной связи';
        $toEmail = "admin@avtobelarus.com";
        //Mail::to($toEmail)->send(new Feedback($comment));


        Mail::send('emails.feedback', array('key' => 'value'), function($message)
        {
           $message->to('admin@avtobelarus.com', 'John Smith')->subject('Welcome!');
        });

        return 'Сообщение отправлено на адрес '. $toEmail;
    }
}
