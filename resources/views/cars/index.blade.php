@extends('layout')

@section('content')
    <section class="hero-wrap hero-wrap-2" style="background-image: url(../images/bg_2.jpg);" >
        <div class="container">
            <div class="row no-gutters slider-text align-items-end justify-content-start">
                <div class="col-sm-8 ftco-animate pb-5">
                    <p class="breadcrumbs">
                        <span class="mr-2"><a href="/">Главная <i class="ion-ios-arrow-forward"></i></a></span>
                        <span><a href="/blog/o-nas">О нас <i class="ion-ios-arrow-forward"></i></a></span>
                    </p>
                    <h1 class="mb-3 bread">Машинокомплекты</h1>
                </div>
                <div class="col-sm-4 ftco-animate pb-5 ">
                    {{ Form::open([
                        'route' => ['cars'],
                        'method' => 'GET',
                        'class' => 'request-form ftco-animate',
                        'id' => 'searchform'
                         ]) }}
                    <h2>Поиск модели</h2>
                    <div class="form-group">
                        <label for="brand" class="label">Марка</label>

                        <div class="select2-selection__arrow">
                            {{Form::select('brand_id',
                                $brands, null,
                                ['placeholder' => 'Выберите марку',
                                'class' => 'select2 form-control custom-select',
                                'style' => 'width: 100%; height:36px;',
                                'id' => 'brand',
                                ])
                            }}
                        </div>
                    </div>
                    <div class="box {{ $errors->has('model_id') ? 'has-error' : '' }}">
                        <select name="model_id" id="model" class="select2 form-control custom-select" style = "width: 100%; height:36px;">
                            <option value="">Модель</option>
                        </select>
                        @if($errors->has('model_id'))
                            <p class="help-block">
                                {{ $errors->first('model_id') }}
                            </p>
                        @endif
                    </div>
                    <div class="form-group">
                        <label for="year" class="label">Год выпуска</label>
                        <div class="select2-selection__arrow">
                            {{Form::select('year_id',
                             $years, null,
                             ['placeholder' => 'Выберите год',
                             'class' => 'select2 form-control custom-select',
                             'style' => 'width: 100%; height:36px;']
                             )
                         }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="body" class="label">Кузов</label>
                        <div class="select2-selection__arrow">
                            {{Form::select('body_id',
                                  $bodies, null,
                                  ['placeholder' => 'Выберите кузов',
                                  'class' => 'select2 form-control custom-select',
                                  'style' => 'width: 100%; height:36px;']
                                  )
                              }}
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="form-group mr-2">
                            <label for="motor" class="label">Двигатель</label>
                            {{Form::select('motor_id',
                               $motors, null,
                               ['placeholder' => 'Выберите тип',
                               'class' => 'select2 form-control custom-select',
                               'style' => 'width: 100%; height:36px;']
                               )
                           }}
                        </div>
                        <div class="form-group ml-2">
                            <label for="volume" class="label">Объем</label>
                            {{Form::select('volume_id',
                               $volumes, null,
                               ['placeholder' => 'Объем, см3',
                               'class' => 'select2 form-control custom-select',
                               'style' => 'width: 100%; height:36px;']
                               )
                           }}
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Искать" class="btn btn-primary py-3 px-4">
                    </div>
                    {!! Form::close() !!}
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
                        {{--{{$cars->links()}}--}}
                    </div>
                </div>
            </div>
        </div>
    </section>



@endsection