@extends('layout')

@section('content')

    <div class="hero-wrap" style="background-image: url('images/bg_1.jpg');" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text justify-content-start align-items-center">
                <div class="col-lg-6 col-md-6 ftco-animate d-flex align-items-end">
                    <div class="text">
                        <h1 class="mb-4">Now <span>It's easy for you</span> <span>rent a car</span></h1>
                        <p style="font-size: 18px;">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
                        <a href="https://vimeo.com/45830194" class="icon-wrap popup-vimeo d-flex align-items-center mt-4">
                            <div class="icon d-flex align-items-center justify-content-center">
                                <span class="ion-ios-play"></span>
                            </div>
                            <div class="heading-title ml-5">
                                <span>Easy steps for renting a car</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-lg-2 col"></div>
                <div class="col-lg-4 col-md-6 mt-0 mt-md-5 d-flex">
                    <form action="#" class="request-form ftco-animate">
                        <h2>Make your trip</h2>
                        <div class="form-group">
                            <label for="" class="label">Pick-up location</label>
                            <input type="text" class="form-control" placeholder="City, Airport, Station, etc">
                        </div>
                        <div class="form-group">
                            <label for="" class="label">Drop-off location</label>
                            <input type="text" class="form-control" placeholder="City, Airport, Station, etc">
                        </div>
                        <div class="d-flex">
                            <div class="form-group mr-2">
                                <label for="" class="label">Pick-up date</label>
                                <input type="text" class="form-control" id="book_pick_date" placeholder="Date">
                            </div>
                            <div class="form-group ml-2">
                                <label for="" class="label">Drop-off date</label>
                                <input type="text" class="form-control" id="book_off_date" placeholder="Date">
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="" class="label">Pick-up time</label>
                            <input type="text" class="form-control" id="time_pick" placeholder="Time">
                        </div>
                        <div class="form-group">
                            <input type="submit" value="Search Vehicle" class="btn btn-primary py-3 px-4">
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
                                        <label for="#">Select Model</label>
                                        <div class="form-field">
                                            <div class="select-wrap">
                                                <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" class="form-control">
                                                    <option value="">Select Model</option>
                                                    <option value="">Model 1</option>
                                                    <option value="">Model 2</option>
                                                    <option value="">Model 3</option>
                                                    <option value="">Model 4</option>
                                                    <option value="">Model 5</option>
                                                    <option value="">Model 6</option>
                                                    <option value="">Model 7</option>
                                                    <option value="">Model 8</option>
                                                    <option value="">Model 9</option>
                                                    <option value="">Model 10</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg align-items-end">
                                    <div class="form-group">
                                        <label for="#">Select Brand</label>
                                        <div class="form-field">
                                            <div class="select-wrap">
                                                <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" class="form-control">
                                                    <option value="">Select Brand</option>
                                                    <option value="">Brand 1</option>
                                                    <option value="">Brand 2</option>
                                                    <option value="">Brand 3</option>
                                                    <option value="">Brand 4</option>
                                                    <option value="">Brand 5</option>
                                                    <option value="">Brand 6</option>
                                                    <option value="">Brand 7</option>
                                                    <option value="">Brand 8</option>
                                                    <option value="">Brand 9</option>
                                                    <option value="">Brand 10</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg align-items-end">
                                    <div class="form-group">
                                        <label for="#">Year Model</label>
                                        <div class="form-field">
                                            <div class="select-wrap">
                                                <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" class="form-control">
                                                    <option value="">Year Model</option>
                                                    <option value="">2019</option>
                                                    <option value="">2018</option>
                                                    <option value="">2017</option>
                                                    <option value="">2016</option>
                                                    <option value="">2015</option>
                                                    <option value="">2014</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg align-items-end">
                                    <div class="form-group">
                                        <label for="#">Price Limit</label>
                                        <div class="form-field">
                                            <div class="select-wrap">
                                                <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" class="form-control">
                                                    <option value="">$1</option>
                                                    <option value="">$50</option>
                                                    <option value="">$100</option>
                                                    <option value="">$200</option>
                                                    <option value="">$300</option>
                                                    <option value="">$400</option>
                                                    <option value="">$500</option>
                                                    <option value="">$600</option>
                                                    <option value="">$700</option>
                                                    <option value="">$800</option>
                                                    <option value="">$900</option>
                                                    <option value="">$1000</option>
                                                </select>
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
                    <span class="subheading">Our Services</span>
                    <h2 class="mb-2">Our Services</h2>
                </div>
            </div>
            <div class="row d-flex">
                <div class="col-md-3 d-flex align-self-stretch ftco-animate">
                    <div class="media block-6 services">
                        <div class="media-body py-md-4">
                            <div class="d-flex mb-3 align-items-center">
                                <div class="icon"><span class="flaticon-customer-support"></span></div>
                                <h3 class="heading mb-0 pl-3">24/7 Car Support</h3>
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
                                <h3 class="heading mb-0 pl-3">Lots of location</h3>
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
                                <h3 class="heading mb-0 pl-3">Reservation</h3>
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
                                <h3 class="heading mb-0 pl-3">Rental Cars</h3>
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
                    <span class="subheading">What we offer</span>
                    <h2 class="mb-2">Choose Your Car</h2>
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
                        <a href="{{$post->slug}}.html" class="block-20"
                           style="background-size: 100%;
                                  background-image: url('{{$post->getImage()}}');">
                        </a>
                        <div class="text pt-4">
                            <div class="meta mb-3">
                                <div><a href="#">{{$post->getCategory()}}</a></div>
                            </div>
                            <h3 class="heading mt-2"><a href="#">{{$post->title}}</a></h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        <div class="small float-sm-right">
                            {{$post->getDate()}}
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </section>

@endsection