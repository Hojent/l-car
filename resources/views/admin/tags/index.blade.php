@extends('admin.layout')
@section('title')
    Управление тегами
@endsection
@section('content')
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title m-b-0">Теги новостей</h4>
                </div>
                <ul class="list-style-none">
                    @foreach ($tags as $tag)
                    <li class="d-flex no-block card-body border-top">
                        <i class="fa fa-check-circle w-30px m-t-5"></i>
                        <div>
                            <a href="{{route('tags.edit',$tag->id)}}" class="m-b-0 font-medium p-0">{{$tag->title}}</a>
                        </div>
                        <div class="ml-auto">
                            {{Form::open(['route'=>['tags.destroy', $tag->id], 'method'=>'delete'])}}
                            <button onclick="return confirm('удалить тег?')" type="submit" class="icon-delete">
                                <i class="far fa-trash-alt"></i>
                            </button>
                            {{Form::close()}}
                        </div>
                    </li>
                    @endforeach
                </ul>
            </div>
        </div>
        <div class="col-md-4">
            <button type="button" class="btn btn-sm btn-info" data-toggle="modal" data-target="#modalAdd">
                Добавить тег
            </button>
            <div class="card-body">
                <div class="alert alert-info">Чтобы изменить имя, кликнете по нему</div>
            </div>
        </div>
    </div>


    <!-- BEGIN MODAL -->

    <!-- Modal Add Category -->
    @include('partials.new-tag')
    <!-- END Add -->

    <!-- Modal Edit Category -->

    <!-- END Edit -->

    <!-- END MODAL -->
@endsection
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->