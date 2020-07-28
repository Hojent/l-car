@extends('layout')

@section('content')

    <section class="hero-wrap hero-wrap-2 js-fullheight" style="background-image: url(images/bg_2.jpg);" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
                <div class="col-md-9 ftco-animate pb-5">
                    <p class="breadcrumbs">
                        <span class="mr-2"><a href="/">Главная <i class="ion-ios-arrow-forward"></i></a></span>
                        <span><a href="/blog/o-nas">О нас <i class="ion-ios-arrow-forward"></i></a></span>
                    </p>
                    <h1 class="mb-3 bread">Машинокомплекты</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-section">
        <div class="container">
            <div class="row flex-row">
                @foreach($cars as $car)
                    <div class="col-sm-4">
                        <div class="car-wrap ftco-animate">
                            <div class="img d-flex align-items-end" style="background-image: url({{$car->getImage()}});">
                                <div class="price-wrap d-flex">
                                    <span class="rate">{{$car->getYear()}}</span>
                                    <p class="from-day">
                                        @if ($car->motor_id == 0)
                                            <span></span>
                                        @else
                                            <span>{{$car->getMotor()}}</span>
                                            <span>{{$car->getVolume()}} cm3</span>
                                        @endif
                                    </p>
                                </div>
                            </div>
                            <div class="text p-4 text-center">
                                <h2 class="mb-0"><a href="#">{{$car->getBrand()}}, {{$car->getModel()}}</a></h2>
                                <span>{{$car->title}}</span>
                                <p class="d-flex mb-0 d-block">
                                    <a href="tel:+375293469941" class="btn btn-black btn-outline-black mr-1">
                                        <i class="icon icon-phone"></i></a>
                                    <a href="{{route('car', $car->id)}}" class="btn btn-black btn-outline-black ml-1">Запчасти</a>
                                </p>
                            </div>
                        </div>
                    </div>
                @endforeach

            </div>
            <div class="row mt-5">
                <div class="col text-center">
                    <div class="block-27">
                        {{$cars->links()}}
                    </div>
                </div>
            </div>
        </div>
    </section>



@endsection