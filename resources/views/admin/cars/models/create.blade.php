@extends('admin.layout')
@section('title')
    @lang('headers.add_model')
@endsection
@section('content')
    {{ Form::open([
        'route' => 'models.store',
     ]) }}
    <div class="card-body">
        <div class="form-group row">
            <div class="col-sm-2">
            <label for="title" class="col-sm-3 text-right control-label col-form-label">
                @lang('messages.title')
            </label>
            </div>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="title" placeholder="введите заголовок" name="title" value="{{old('title')}}">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-2">
                <label class="col-sm-3 text-right control-label col-form-label">
                    @lang('messages.brand')
                </label>
            </div>
            <div class="col-sm-10">
                {{Form::select('brand_id',
                    $brands, null,
                    ['placeholder' => 'Выберите марку авто',
                    'class' => 'select2 form-control custom-select',
                    'style' => 'width: 100%; height:36px;']
                    )
                }}
            </div>
        </div>
        <div>
            <a class="btn btn-info" href="{{ route('models.index') }}">@lang('messages.back')</a>
            <button class="btn btn-success pull-right">
                @lang('messages.save')
            </button>
        </div>

    </div>
    {!! Form::close() !!}

    <!-- BEGIN MODAL -->

    <!-- Modal Add Category -->

    <!-- END MODAL -->
@endsection
@section('script')
    @parent
    <script>
        $(".select2").select2();
    </script>
    <script>
        CKEDITOR.replace( 'content' );
    </script>
@endsection
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->