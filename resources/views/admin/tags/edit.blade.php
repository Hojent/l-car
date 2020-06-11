@extends('admin.layout')
@section('title')
    @lang('headers.edit_tag')
@endsection
@section('content')

    {{Form::open(['route'=>['tags.update',$tag->id], 'method'=>'put'])}}
    <div class="card-body">

        <div class="form-group row">
            <label for="fname" class="col-sm-3 text-right control-label col-form-label">
                @lang('messages.name')
            </label>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="fname" value="{{$tag->title}}"  name="title">
            </div>
        </div>

        <div>
            <a class="btn btn-info" href="{{ route('tags.index') }}">@lang('messages.back')</a>
            <button class="btn btn-success pull-right">@lang('messages.change')</button>
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