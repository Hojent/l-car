@extends('admin.layout')
@section('title')
    @lang('headers.edit_complect')
@endsection
@section('content')

    <div class="row">
    <div class="col-sm-8">
    {{ Form::open([
        'route' => ['complects.update', $complect->id],
        'file' => 'true',
        'enctype' => 'multipart/form-data',
        'method' => 'put',
     ]) }}

        <div class="form-group row">
            <div class="col-sm-3">
                <div><label for="title" class="text-right control-label col-form-label">
                    @lang('messages.title')
                    </label>
                </div>
                <div class="row"><label class="col-md-4">@lang('messages.status'):</label>
                    <div class="col-md-8">
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

        <div class="row">
                <div class="card card-body col-sm-12">
                    <h3>Добавить запчасть</h3>
                  @foreach ($groups as $group)
                     <div><h4>{{$group->group}}</h4></div>
                     <div class="row  flex-wrap">

                     @foreach($parts->where('group_id', $group->id) as $part)
                          @if ($loop->index == 0 OR $loop->index%5 == 0)
                              <div class="col-sm-4 flex-column">
                          @endif
                             <input type="checkbox" name="parts[]" value="{{$part->id}}" /> {{$part->title}}<br>
                          @if ($loop->iteration%5 == 0 OR $loop->last)
                            </div>
                          @endif
                      @endforeach

                    </div>
                      <hr>
                    @endforeach

                </div>
        </div>
        <div>
            <a class="btn btn-info" href="{{ route('complects.index') }}">@lang('messages.close')</a>
            <button class="btn btn-success pull-right">
                @lang('messages.save')
            </button>
        </div>
    {!! Form::close() !!}
    </div>
        <div class="col-sm-4">
            <div class="card card-body">
                <div class="form-group">
                      <h3>Перечень запчастей</h3>

                        @foreach($complect->parts as $part)
                           <p>{{$part->title}} - {{$part->pivot->price}}$
                            <a href="#" title="изменить" style="color: green;" data-toggle="modal" data-target="#modal{{$part->id}}"><span class="mdi mdi-pencil"></span></a>
                               <a href="#" title="удалить" style="color: red;"><span class="mdi mdi-close-circle"> </span></a>
                           </p>

                            <!-- BEGIN MODAL -->
                            <div class="modal fade" id="modal{{$part->id}}" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true" style="display: none;">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">
                                                {{$part->title}}
                                            </h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        {!! Form::open([
                                        'route' => ['complect.updateparts',$complect->id, $part->id],
                                        'file' => 'true',
                                        'enctype' => 'multipart/form-data',
                                        'method' => 'put'
                                        ]) !!}
                                        <div class="modal-body">
                                            <div class="card-body">
                                                <div class="form-group row">
                                                    <label class="col-sm-3 text-right control-label col-form-label">Цена</label>
                                                    <div class="col-sm-9">
                                                        <input type="text" class="form-control" id="price" placeholder=""
                                                               name="price" value="{{$part->pivot->price}}">
                                                        <input type="file" name="image" value="{{$part->pivot->image}}">
                                                        <img src="{{$complect->getPivotImage($part->pivot->image)}}" width="150px">
                                                        <input type="hidden" name="part_id" value="{{$part->id}}">
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                                @lang('messages.close')</button>
                                            <button type="submit" class="btn btn-primary">@lang('messages.save')</button>
                                        </div>
                                        {!! Form::close() !!}
                                    </div>
                                </div>
                            </div>

                            <!-- Modal Add Category -->
                        @endforeach


            </div>
        </div>
    </div>


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