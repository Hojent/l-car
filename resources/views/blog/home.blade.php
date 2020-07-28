@extends('layout')

@section('content')

    <div class="hero-wrap" style="background-image: url('images/bg_1.jpg');" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text justify-content-start align-items-center">
                <div class="col-lg-6 col-md-6 ftco-animate d-flex align-items-end">
                    <div class="text">
                        <h1 class="mb-4">Автозапчасти<span>из Европы</span></h1>
                        <p style="font-size: 18px;">Бэушка с европейских авторазборок. Демонстрационный сайт.</p>
                        <a href="https://vimeo.com/45830194" class="icon-wrap popup-vimeo d-flex align-items-center mt-4">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="ion-ios-play"></span>
                            </div>
                            <div class="heading-title ml-5">
                                <span>здесь будет ваше видео</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-lg-2 col"></div>
                <div class="col-lg-4 col-md-6 mt-0 mt-md-5 d-flex">
                    <form action="#" class="request-form ftco-animate" id="searchform">
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
                    </form>
                </div>
            </div>
        </div>
    </div>

    <section class="ftco-section ftco-no-pb ftco-no-pt">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="search-wrap-1 ftco-animate mb-5">
                        <form action="#" class="search-property-1">
                            <div class="row">
                                <div class="col-lg align-items-end">
                                    <div class="form-group">
                                        <label for="#">Категория запчастей</label>
                                        <div class="form-field">
                                            <div class="select-wrap">
                                                <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                {{Form::select('group_id',
                                                   $groups, null,
                                                   ['placeholder' => 'Выберите категорию',
                                                   'class' => 'select2 form-control custom-select',
                                                   'style' => 'width: 100%; height:36px;']
                                                   )
                                               }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg align-items-end">
                                    <div class="form-group">
                                        <label for="#">Выберите марку</label>
                                        <div class="form-field">
                                            <div class="select-wrap">
                                                <div class="icon"><span class="ion-ios-arrow-down"></span></div>
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
                                    </div>
                                </div>
                                <div class="col-lg align-self-end">
                                    <div class="form-group">
                                        <div class="form-field">
                                            <input type="submit" value="Search" class="form-control btn btn-primary">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-section services-section ftco-no-pt ftco-no-pb">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 heading-section text-center ftco-animate mb-5">
                    <span class="subheading">мы предлагаем</span>
                    <h2 class="mb-2">Наши услуги</h2>
                </div>
            </div>
            <div class="row d-flex">
                <div class="col-md-3 d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services">
                        <div class="media-body py-md-4">
                            <div class="d-flex mb-3 align-items-center">
                                <div class="icon"><span class="flaticon-customer-support"></span></div>
                                <h3 class="heading mb-0 pl-3">Мелкий ремон</h3>
                            </div>
                            <p>A small river named Duden flows by their place and supplies it with you</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services">
                        <div class="media-body py-md-4">
                            <div class="d-flex mb-3 align-items-center">
                                <div class="icon"><span class="flaticon-route"></span></div>
                                <h3 class="heading mb-0 pl-3">Доставка</h3>
                            </div>
                            <p>A small river named Duden flows by their place and supplies it with you</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services">
                        <div class="media-body py-md-4">
                            <div class="d-flex mb-3 align-items-center">
                                <div class="icon"><span class="flaticon-online-booking"></span></div>
                                <h3 class="heading mb-0 pl-3">Заказ и бронь</h3>
                            </div>
                            <p>A small river named Duden flows by their place and supplies it with you</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services">
                        <div class="media-body py-md-4">
                            <div class="d-flex mb-3 align-items-center">
                                <div class="icon"><span class="flaticon-rent"></span></div>
                                <h3 class="heading mb-0 pl-3">Прокат авто</h3>
                            </div>
                            <p>A small river named Duden flows by their place and supplies it with you</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-section">
        <div class="container-fluid px-4">
            <div class="row justify-content-center">
                <div class="col-md-12 heading-section text-center ftco-animate mb-5">
                    <span class="subheading">автомобили в разборке</span>
                    <h2 class="mb-2">Найди своего донора</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="car-wrap ftco-animate">
                        <div class="img d-flex align-items-end" style="background-image: url(/images/car-1.jpg);">
                            <div class="price-wrap d-flex">
                                <span class="rate">$25</span>
                                <p class="from-day">
                                    <span>From</span>
                                    <span>/Day</span>
                                </p>
                            </div>
                        </div>
                        <div class="text p-4 text-center">
                            <h2 class="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                            <span>Audi</span>
                            <p class="d-flex mb-0 d-block"><a href="#" class="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" class="btn btn-black btn-outline-black ml-1">Details</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="car-wrap ftco-animate">
                        <div class="img d-flex align-items-end" style="background-image: url(images/car-2.jpg);">
                            <div class="price-wrap d-flex">
                                <span class="rate">$25</span>
                                <p class="from-day">
                                    <span>From</span>
                                    <span>/Day</span>
                                </p>
                            </div>
                        </div>
                        <div class="text p-4 text-center">
                            <h2 class="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                            <span>Ford</span>
                            <p class="d-flex mb-0 d-block"><a href="#" class="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" class="btn btn-black btn-outline-black ml-1">Details</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="car-wrap ftco-animate">
                        <div class="img d-flex align-items-end" style="background-image: url(images/car-3.jpg);">
                            <div class="price-wrap d-flex">
                                <span class="rate">$25</span>
                                <p class="from-day">
                                    <span>From</span>
                                    <span>/Day</span>
                                </p>
                            </div>
                        </div>
                        <div class="text p-4 text-center">
                            <h2 class="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                            <span>Cheverolet</span>
                            <p class="d-flex mb-0 d-block"><a href="#" class="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" class="btn btn-black btn-outline-black ml-1">Details</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="car-wrap ftco-animate">
                        <div class="img d-flex align-items-end"
                             style="background-image: url(/images/car-4.jpg);">
                            <div class="price-wrap d-flex">
                                <span class="rate">$25</span>
                                <p class="from-day">
                                    <span>From</span>
                                    <span>/Day</span>
                                </p>
                            </div>
                        </div>
                        <div class="text p-4 text-center">
                            <h2 class="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                            <span>Mercedes</span>
                            <p class="d-flex mb-0 d-block"><a href="#" class="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" class="btn btn-black btn-outline-black ml-1">Details</a></p>
                        </div>
                    </div>
                </div>

                <div class="col-md-3">
                    <div class="car-wrap ftco-animate">
                        <div class="img d-flex align-items-end" style="background-image: url(images/car-5.jpg);">
                            <div class="price-wrap d-flex">
                                <span class="rate">$25</span>
                                <p class="from-day">
                                    <span>From</span>
                                    <span>/Day</span>
                                </p>
                            </div>
                        </div>
                        <div class="text p-4 text-center">
                            <h2 class="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                            <span>Audi</span>
                            <p class="d-flex mb-0 d-block"><a href="#" class="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" class="btn btn-black btn-outline-black ml-1">Details</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="car-wrap ftco-animate">
                        <div class="img d-flex align-items-end" style="background-image: url(images/car-6.jpg);">
                            <div class="price-wrap d-flex">
                                <span class="rate">$25</span>
                                <p class="from-day">
                                    <span>From</span>
                                    <span>/Day</span>
                                </p>
                            </div>
                        </div>
                        <div class="text p-4 text-center">
                            <h2 class="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                            <span>Ford</span>
                            <p class="d-flex mb-0 d-block"><a href="#" class="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" class="btn btn-black btn-outline-black ml-1">Details</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="car-wrap ftco-animate">
                        <div class="img d-flex align-items-end" style="background-image: url(images/car-7.jpg);">
                            <div class="price-wrap d-flex">
                                <span class="rate">$25</span>
                                <p class="from-day">
                                    <span>From</span>
                                    <span>/Day</span>
                                </p>
                            </div>
                        </div>
                        <div class="text p-4 text-center">
                            <h2 class="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                            <span>Cheverolet</span>
                            <p class="d-flex mb-0 d-block"><a href="#" class="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" class="btn btn-black btn-outline-black ml-1">Details</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="car-wrap ftco-animate">
                        <div class="img d-flex align-items-end" style="background-image: url(images/car-8.jpg);">
                            <div class="price-wrap d-flex">
                                <span class="rate">$25</span>
                                <p class="from-day">
                                    <span>From</span>
                                    <span>/Day</span>
                                </p>
                            </div>
                        </div>
                        <div class="text p-4 text-center">
                            <h2 class="mb-0"><a href="#">Mercedes Grand Sedan</a></h2>
                            <span>Mercedes</span>
                            <p class="d-flex mb-0 d-block"><a href="#" class="btn btn-black btn-outline-black mr-1">Book now</a> <a href="#" class="btn btn-black btn-outline-black ml-1">Details</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-section services-section img" style="background-image: url(images/bg_2.jpg);">
        <div class="overlay"></div>
        <div class="container">
            <div class="row justify-content-center mb-5">
                <div class="col-md-7 text-center heading-section heading-section-white ftco-animate">
                    <span class="subheading">Work flow</span>
                    <h2 class="mb-3">Как мы работаем</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services services-2">
                        <div class="media-body py-md-4 text-center">
                            <div class="icon d-flex align-items-center justify-content-center"><span class="icon-car"></span></div>
                            <h3>Подбираем машинокомплект</h3>
                            <p>Наши коллеги в Литве и Польше тщательно выбирают машинокомплект</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services services-2">
                        <div class="media-body py-md-4 text-center">
                            <div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-route"></span></div>
                            <h3>Везем в Беларусь</h3>
                            <p>Машинокмплект везут в Беларуси на автопоезде.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services services-2">
                        <div class="media-body py-md-4 text-center">
                            <div class="icon d-flex align-items-center justify-content-center"><span class="icon-wrench"></span></div>
                            <h3>Проверяем и разбираем</h3>
                            <p>Проверяем работу двигателя, проверяем качество всех деталей, аккуратно разбираем.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services services-2">
                        <div class="media-body py-md-4 text-center">
                            <div class="icon d-flex align-items-center justify-content-center"><span class="flaticon-review"></span></div>
                            <h3>Предлагаем Вам</h3>
                            <p>Чистим, сортируем и предлагаем своим клиентам проверенные б/у запчати.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="ftco-section">
        <div class="container">
            <div class="row justify-content-center mb-5">
                <div class="col-md-7 heading-section text-center ftco-animate">
                    <span class="subheading">Наш Блог о ремонте автомобилей</span>
                    <h2>Новости и статьи</h2>
                </div>
            </div>
            <div class="row d-flex">
                @foreach ($posts as $post)
                <div class="col-md-4 d-flex ftco-animate">
                    <div class="blog-entry justify-content-end">
                        <a href="{{route('article', $post->slug)}}" class="block-20"
                           style="background-size: 100%;
                                  background-image: url('{{$post->getImage()}}');">
                        </a>
                        <div class="text pt-4">
                           <h3 class="heading mt-2"><a href="{{route('article', $post->slug)}}">{{$post->title}}</a></h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        <div class="small float-sm-right">
                            {{$post->getDate()}}
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
            {{$posts->links()}}
        </div>
    </section>
@endsection
@section ('script')
    <script type="text/javascript">
        $('#brand').change(function(){
            $.ajax({
                url: "{{ route('get_by_brand') }}?brand_id=" + $(this).val(),
                method: 'GET',
                success: function(data) {
                    $('#model').html(data.html);
                }
            });
        });
    </script>
@endsection