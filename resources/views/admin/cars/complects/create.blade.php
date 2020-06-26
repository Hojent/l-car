@extends('admin.layout')
@section('title')
    @lang('headers.add_complect')
@endsection
@section('content')
    {{ Form::open([
        'route' => 'complects.store',
        'file' => 'true',
        'enctype' => 'multipart/form-data'
     ]) }}
    <div class="card-body">
        <!--------- checkboxes -->
        <div class="row">
          <div class="form-group row col-sm-6">
                <label class="col-md-2">@lang('messages.status')</label>
                <div class="col-md-10">
                    <div class="custom-control custom-checkbox mr-sm-2">
                        {{Form::checkbox('status', '1', old('status'), [
                       'class'=>'custom-control-input',
                       'id' => 'customControlAutosizing2',
                       ])}}
                        <label class="custom-control-label" for="customControlAutosizing2">
                            @lang('messages.public')
                        </label>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">

                   file

            </div>
        </div>
        <!--------- end checkboxes -->
        <!--title -->
        <div class="form-group row">
            <div class="col-sm-3">
            <label for="title" class="text-right control-label col-form-label">
                @lang('messages.title')
            </label>
            </div>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="title" placeholder="введите заголовок" name="title" value="{{old('title')}}" required="required" >
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-3">
                <!-- linked fields  -->
                 <!--brand ID -->
                <div class="box">
                    {{Form::select('brand_id',
                        $brands, null,
                        ['placeholder' => 'Марка',
                        'class' => 'select2 form-control custom-select',
                        'style' => 'width: 100%; height:36px;',
                        'required' => true]
                        )
                    }}
                </div>
                <div class="box">
                    {{Form::select('model_id',
                        $models, null,
                        ['placeholder' => 'Модель',
                        'class' => 'select2 form-control custom-select',
                        'style' => 'width: 100%; height:36px;']
                        )
                    }}
                </div>
                <div class="box">
                    {{Form::select('body_id',
                        $bodies, null,
                        ['placeholder' => 'Кузов',
                        'class' => 'select2 form-control custom-select',
                        'style' => 'width: 100%; height:36px;']
                        )
                    }}
                </div>
                <div class="box">
                        {{Form::select('year_id',
                            $years, null,
                            ['placeholder' => 'Год',
                            'class' => 'select2 form-control custom-select',
                            'style' => 'width: 100%; height:36px;']
                            )
                        }}
                </div>
                <div class="box">
                    {{Form::select('motor_id',
                        $motors, null,
                        ['placeholder' => 'Тип двигателя',
                        'class' => 'select2 form-control custom-select',
                        'style' => 'width: 100%; height:36px;']
                        )
                    }}
                </div>
                <div class="box">
                    {{Form::select('volume_id',
                        $volumes, null,
                        ['placeholder' => 'Объем двигателя',
                        'class' => 'select2 form-control custom-select',
                        'style' => 'width: 100%; height:36px;']
                        )
                    }}
                </div>
                <!-- end of Linked Fields -->
                <div class="box">
                    {{Form::select('doors',
                       $doors, null,
                       ['placeholder' => 'Количество дверей',
                       'class' => 'select2 form-control custom-select',
                       'style' => 'width: 100%; height:36px;',
                       'required' => true]
                       )
                   }}
                </div>

            </div>
            <!--description  -->
            <div class="col-sm-9">
                <textarea class="form-control" id="description" name="description" value="{{old('description')}}">Разместите здесь краткое описание машины. Это может быть любой текст. Какие-то особенности, откуда прибыла машина, ее общее состояние, нюансы кузова, и т.д.
                </textarea>
            </div>
        </div>
        <div>
            <a class="btn btn-info" href="{{ route('complects.index') }}">@lang('messages.back')</a>
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
        CKEDITOR.replace( 'description' );
    </script>
@endsection
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->