@extends('layout')

@section('content')
    <section class="hero-wrap hero-wrap-2 js-fullheight" style="background-image: url('/images/bg_2.jpg');" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
                <div class="col-md-9 ftco-animate pb-5">
                    <p class="breadcrumbs"><span class="mr-2"><a href="{{route('home')}}">Главная <i class="ion-ios-arrow-forward"></i></a></span> <span class="mr-2"><a href="{{route('blog')}}">Блог <i class="ion-ios-arrow-forward"></i></a></span> <span>{{$post->title}} <i class="ion-ios-arrow-forward"></i></span></p>
                    <h1 class="mb-3 bread">Блог</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-section ftco-degree-bg">
        <div class="container">
            <div class="row">
                <div class="col-md-8 order-md-last ftco-animate">
                    <h2 class="mb-3">{{$post->title}}</h2>
                    <div class="small"><p>({{$category}})</p></div>
                    <div class="img float-left"><img src="{{$post->getImage()}}"/></div>
                    {!! $post->content !!}
                    <div class="tag-widget post-tag-container mb-5 mt-5">
                        <div class="tagcloud">
                            @foreach($post->tags as $tag)
                            <a href="#" class="tag-cloud-link">{{$tag->title}}</a>
                            @endforeach
                        </div>
                    </div>

                    <div class="about-author d-flex p-4 bg-light">
                        <div class="bio mr-5">
                            <img src="/images/person_1.jpg" alt="Image placeholder" class="img-fluid mb-4">
                        </div>
                        <div class="desc">
                            <h3>Продавец - George Washington</h3>
                            <p>Звоните, чтобы получить консультацию, узнать о наличии зпчастей или сделать заказ. Пока вы думаете, нужную Вам запчасть купит кто-нибудь другой и Вам придется ждать следующего завоза.
                            </p>
                            <p><span class="icon icon-phone_in_talk"></span><span> Телефон: 223-3-22</span></p>
                        </div>
                    </div>

                </div> <!-- .col-md-8 -->
                <div class="col-md-4 sidebar ftco-animate">
                    <div class="sidebar-box">
                        <form action="#" class="search-form">
                            <div class="form-group">
                                <span class="icon icon-search"></span>
                                <input type="text" class="form-control" placeholder="Type a keyword and hit enter">
                            </div>
                        </form>
                    </div>
                    <div class="sidebar-box ftco-animate">
                        <div class="categories">
                            <h3>Категории</h3>
                            <ul>
                    @foreach($categories as $category)
                      <li><a href="#">{{$category->title}} <span>(12)</span></a></li>
                     @endforeach
                            </ul>
                        </div>
                    </div>

                    <div class="sidebar-box ftco-animate">
                        <h3>Recent Blog</h3>
                        <div class="block-21 mb-4 d-flex">
                            <a class="blog-img mr-4" style="background-image: url(/images/image_1.jpg);"></a>
                            <div class="text">
                                <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                <div class="meta">
                                    <div><a href="#"><span class="icon-calendar"></span> July 12, 2018</a></div>
                                    <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                                    <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="block-21 mb-4 d-flex">
                            <a class="blog-img mr-4" style="background-image: url(/images/image_2.jpg);"></a>
                            <div class="text">
                                <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                <div class="meta">
                                    <div><a href="#"><span class="icon-calendar"></span> July 12, 2018</a></div>
                                    <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                                    <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="block-21 mb-4 d-flex">
                            <a class="blog-img mr-4" style="background-image: url(/images/image_3.jpg);"></a>
                            <div class="text">
                                <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                <div class="meta">
                                    <div><a href="#"><span class="icon-calendar"></span> July 12, 2018</a></div>
                                    <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                                    <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-box ftco-animate">
                        <h3>Облако тегов</h3>
                        <div class="tagcloud">
                            @foreach($tags as $tag)
                                <a href="#" class="tag-cloud-link">{{$tag->title}}</a>
                            @endforeach
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section> <!-- .section -->

@endsection