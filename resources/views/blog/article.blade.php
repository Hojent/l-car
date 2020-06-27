@extends('layout')

@section('content')
    <section class="hero-wrap hero-wrap-2 js-fullheight" style="background-image: url('/images/bg_2.jpg');" data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
                <div class="col-md-9 ftco-animate pb-5">
                    <p class="breadcrumbs"><span class="mr-2"><a href="{{route('home')}}">Главная <i class="ion-ios-arrow-forward"></i></a></span> <span class="mr-2"><a href="{{route('blog',$post->getCategoryID())}}">{{$post->getCategory()}} <i class="ion-ios-arrow-forward"></i></a></span></p>
                    <h1 class="mb-3 bread">{{$post->title}}</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-section ftco-degree-bg">
        <div class="container">
            <div class="row">
                <div class="col-md-8 order-md-last ftco-animate">
                    <h2 class="mb-3">{{$post->title}}</h2>
                    <div class="float-left"><img width="100%" src="{{$post->getImage()}}"/></div>
                    {!! $post->content !!}
                    <div class="tag-widget post-tag-container mb-5 mt-5">
                        <div class="tagcloud">
                            @foreach($post->tags as $tag)
                            <a href="{{route('tag',$tag->slug)}}" class="tag-cloud-link">{{$tag->title}}</a>
                            @endforeach
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
                      <li><a href="{{route('blog', $category->id)}}">{{$category->title}} <span>({{$category->posts()->count()}})</span></a></li>
                     @endforeach
                            </ul>
                        </div>
                    </div>
                    <div class="sidebar-box ftco-animate">
                        <h3>Облако тегов</h3>
                        <div class="tagcloud">
                            @foreach($tags as $tag)
                                <a href="{{route('tag',$tag->slug)}}" class="tag-cloud-link">{{$tag->title}}</a>
                            @endforeach
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section> <!-- .section -->

@endsection