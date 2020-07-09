@extends('admin.layout')
@section('title')
    @lang('headers.edit_complect')
@endsection
@section('content')

    {{ Form::open([
        'route' => ['complects.update', $complect->id],
        'file' => 'true',
        'enctype' => 'multipart/form-data',
        'method' => 'put',
     ]) }}
    <div class="card-body">
        <!--------- checkboxes -->
        <div class="row">
            <div class="form-group row col-sm-6">
                <label class="col-md-2">@lang('messages.status')</label>
                <div class="col-md-10">
                    <div class="custom-control custom-checkbox mr-sm-2">
                        {{Form::checkbox('status', '1', $complect->status, [
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
                <input type="text" class="form-control" id="title"
                       name="title" value="{{$complect->title}}">
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-3">
                <!-- linked fields  -->
                <!--brand ID -->
                <div class="box">
                    {{Form::select('brand_id',
                        $brands, $brand,
                        ['placeholder' => 'Марка',
                        'class' => 'select2 form-control custom-select',
                        'style' => 'width: 100%; height:36px;',
                        'id' => 'brand',
                        ])
                    }}
                </div>
                <div class="box">
                    {{Form::select('model_id',
                        $models, $model,
                        ['placeholder' => 'Модель',
                        'class' => 'select2 form-control custom-select',
                        'style' => 'width: 100%; height:36px;',
                        'id' => 'model']
                        )
                    }}
                </div>
               {{-- <div class="box {{ $errors->has('model_id') ? 'has-error' : '' }}">
                    <select name="model_id" id="model" class="select2 form-control custom-select" style = "width: 100%; height:36px;">
                        <option value="">{{$complect->model->title}}</option>
                    </select>
                    @if($errors->has('model_id'))
                        <p class="help-block">
                            {{ $errors->first('model_id') }}
                        </p>
                    @endif
                </div>--}}
                <div class="box">
                    {{Form::select('body_id',
                        $bodies, $body,
                        ['placeholder' => 'Кузов',
                        'class' => 'select2 form-control custom-select',
                        'style' => 'width: 100%; height:36px;']
                        )
                    }}
                </div>
                <div class="box">
                    {{Form::select('year_id',
                        $years, $year,
                        ['placeholder' => 'Год',
                        'class' => 'select2 form-control custom-select',
                        'style' => 'width: 100%; height:36px;']
                        )
                    }}
                </div>
                <div class="box">
                    {{Form::select('motor_id',
                        $motors, $motor,
                        ['placeholder' => 'Тип двигателя',
                        'class' => 'select2 form-control custom-select',
                        'style' => 'width: 100%; height:36px;']
                        )
                    }}
                </div>
                <div class="box">
                    {{Form::select('volume_id',
                        $volumes, $volume,
                        ['placeholder' => 'Объем двигателя',
                        'class' => 'select2 form-control custom-select',
                        'style' => 'width: 100%; height:36px;']
                        )
                    }}
                </div>
                <!-- end of Linked Fields -->
                <div class="box">
                    {{Form::select('doors',
                       $doors, $door,
                       ['placeholder' => 'Количество дверей',
                       'class' => 'select2 form-control custom-select',
                       'style' => 'width: 100%; height:36px;']
                       )
                   }}
                </div>

            </div>
            <!--description  -->
            <div class="col-sm-5">
                <textarea class="form-control" id="description" name="description">
                    {!! $complect->description !!}
                </textarea>
            </div>
            <div class="col=sm-4">
                <div class="box">
                    <label for="color">Цвет</label>
                    <input type="text" name="color" class="form-control" id="color" value="{{ $complect->color }}">
                </div>
                <div class="box">
                    <label for="images">Главное фото</label>
                    <input type="file" name="images" class="form-control" id="images" value="{{$complect->images}}">
                    <img class="img-thumbnail" src="{{$complect->getImage()}}" width="200px" />
                </div>

            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-3">
                <h3>Перечень запчастей</h3>
                <p>Категории:</p>
                @foreach($complect->parts as $part)
        {{$part->title}} - {{$part->pivot->price}} / {{$part->group->group}}<br>
                @endforeach

            </div>
            <div class="col-sm-9">

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
    <script type="text/javascript">
        $('#brand').change(function(){
            $.ajax({
                url: "{{ route('get_by_brand') }}?brand_id=" + $(this).val(),
                method: 'GET',
                success: function(data) {
                    $('#model').html(data.html);
                }
            });
        });
    </script>
@endsection
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->