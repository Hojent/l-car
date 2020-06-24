@extends('admin.layout')
@section('title')
    {{ __('headers.admin_dictes') }}
@endsection
@section('content')
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title m-b-0">
                        {{ __('headers.index_volume') }}
                    </h4>
                </div>
                <ul class="list-style-none">
                    @foreach ($volumes as $volume)
                    <li class="d-flex no-block card-body border-top">
                        <i class="fa fa-check-circle w-30px m-t-5"></i>
                        <div>
                            <a href="{{route('volumes.edit',$volume->id)}}" class="m-b-0 font-medium p-0" title="@lang('headers.edit_volume')">{{$volume->title}}</a>
                        </div>
                        <div class="ml-auto">
                            {{Form::open(['route'=>['volumes.destroy', $volume->id], 'method'=>'delete'])}}
                            <button title="@lang('messages.delete')" onclick="return confirm('удалить объем')" type="submit" class="icon-delete">
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
                @lang('headers.add_volume')
            </button>
            <div class="card-body">
                <div class="alert alert-info">Чтобы изменить объем, кликнете по названию</div>
            <div class="alert alert-info">@lang('messages.attention')</div>
            </div>
        </div>
    </div>


    <!-- BEGIN MODAL -->

    <!-- Modal Add -->
    @include('partials.new-volume')
    <!-- END Add -->

    <!-- END MODAL -->
@endsection
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->