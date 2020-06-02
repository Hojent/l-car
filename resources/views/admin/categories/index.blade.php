@extends('admin.layout')
@section('title')
    Категории блога
@endsection
@section('content')
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title m-b-0">Категории новостей</h4>
                </div>
                <ul class="list-style-none">
                    @foreach ($categories as $category)
                    <li class="d-flex no-block card-body border-top">
                        <i class="fa fa-check-circle w-30px m-t-5"></i>
                        <div>
                            <a href="{{route('categories.edit',$category->id)}}" class="m-b-0 font-medium p-0">{{$category->title}}</a>
                        </div>
                        <div class="ml-auto">
                            {{Form::open(['route'=>['categories.destroy', $category->id], 'method'=>'delete'])}}
                            <button onclick="return confirm('удалить категорию и все ее материалы?')" type="submit" class="icon-delete">
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
            <button type="button" class="btn btn-sm btn-info" data-toggle="modal" data-target="#modal">
                Добавить категорию
            </button>
            <a href="{{route('categories.create')}}">Добавить</a>
            <div class="card-body">
                <div class="alert alert-info">Чтобы изменить название категории, кликнете по названию</div>
            </div>

        </div>
    </div>


    <!-- BEGIN MODAL -->

    <!-- Modal Add Category -->
    <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: none;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Alert Model</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    Lorem ipsum dolor sit amet...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <!-- END MODAL -->
@endsection
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->