@extends('admin.layout')
@section('title')
    Изменить категорию
@endsection
@section('content')

    {{Form::open(['route'=>['categories.update',$category->id], 'method'=>'put'])}}
    <div class="card-body">

        <div class="form-group row">
            <label for="fname" class="col-sm-3 text-right control-label col-form-label">Название</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="fname" value="{{$category->title}}"  name="title">
            </div>
        </div>

        <div>
            <button class="btn btn-default">Назад</button>
            <button class="btn btn-success pull-right">Изменить</button>
        </div>

    </div>
    {!! Form::close() !!}

    <!-- BEGIN MODAL -->

    <!-- Modal Add Category -->

    <!-- END MODAL -->
@endsection
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->