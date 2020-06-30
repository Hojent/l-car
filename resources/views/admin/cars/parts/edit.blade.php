@extends('admin.layout')
@section('title')
    @lang('headers.edit_part')
@endsection
@section('content')

    {{ Form::open([
     'route' => ['parts.update', $part->id],
     'method' => 'put',
     ]) }}
    <div class="card-body">
        <div class="form-group row">
            <div class="col-sm-2">
                <label for="title" class="col-sm-3 text-right control-label col-form-label">
                    @lang('messages.title')
                </label>
            </div>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="title" placeholder="введите заголовок" name="title" value="{{$part->title}}">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-2">
                <label for="category_id" class="col-sm-3 text-right control-label col-form-label">
                    @lang('messages.parts')
                </label>
            </div>
            <div class="col-sm-10">
                {{Form::select('group_id',
                  $groups,
                  $group,
                  ['class' => 'select2 form-control custom-select',
                  'style' => 'width: 100%; height:36px;',
                  ])
                }}
            </div>
        </div>
              <div>
            <a class="btn btn-info" href="{{ route('parts.index') }}">@lang('messages.back')</a>
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
@endsection
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->