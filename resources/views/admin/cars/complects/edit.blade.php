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
            <div class="col-sm-6">
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

            <div class="col=sm-6">
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
                     <textarea class="form-control" id="description" name="description">
                    {!! $complect->description !!}
                </textarea>
                    <h3>Добавить запчасть:  <input type="checkbox" id="checkallfull" value=""> - выбрать все</h3>
                  @foreach ($groups as $group)
                        <div class="has-arrow"><a class="sidebar-link has-arrow" data-toggle="collapse" data-target="#group{{$group->id}}" href="#" ><h4>{{$group->group}}</h4></a></div>
                     <div class="row  flex-wrap collapse  first-level" id="group{{$group->id}}">
                     @foreach($parts->where('group_id', $group->id) as $part)
                          @if ($loop->index == 0 OR $loop->index%5 == 0)
                              <div class="col-sm-4 flex-column">
                          @endif
                             <input class="checkfull_" type="checkbox" name="parts[]" value="{{$part->id}}" /> {{$part->title}}<br>
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
                    <div class="row font-weight-bold">
                        <div class="col-sm-1">
                            <input type="checkbox" name="checkall" value="" id="checkall"/>
                        </div>
                        <div class="col-sm-8">название</div>
                        <div class="col-sm-2">
                            Фото
                        </div>
                        <div class="col-sm-1">

                        </div>
                    </div>
                        @foreach($complect->parts as $part)
                        <div class="row">
                            <div class="col-sm-1">
                                <input type="checkbox" class="check_" name="checkparts[]" value="{{$part->id}}" form="deleteall"/>
                            </div>
                            <div class="col-sm-8">
                           {{$part->title}} - {{$part->pivot->price}}$
                            <a href="#" title="изменить" style="color: green;" data-toggle="modal" data-target="#modal{{$part->id}}">
                                <span class="mdi mdi-pencil"></span></a>
                            </div>
                            <div class="col-sm-2">
                                @if ($part->pivot->image)
                                    <span class="mdi mdi-car"></span>
                                @endif
                            </div>
                            <div class="col-sm-1">
                            {{Form::open([
                                            'route'=>['complect.deletepart',
                                                $complect->id, $part->id],
                                             'method'=>'delete'
                                             ])}}
                            <button class="btn btn-link btn-sm"
                                    title="@lang('messages.delete')"
                                    onclick="return confirm('удалить {{$part->title}}?')" type="submit"> <span style="color: darkred;" class="mdi mdi-close-circle"> </span>
                            </button>
                            {{Form::close()}}
                            </div>

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
                                                        <input type="file" name="image">
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
                            <!-- END MODAL -->
                        </div>
                        @endforeach

                    {{Form::open(['route'=>['complect.deleteparts', $complect->id],
                                    'method'=>'delete',
                                    'id' => 'deleteall'
                                  ])}}
                    <button class="btn btn-danger" title="" onclick="return confirm('удалить выбранные?')" type="submit">
                        @lang('messages.delete')
                    </button>
                    {{Form::close()}}

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
            <script>
                $('#checkall').on('change', function(){
                    if ($('#checkall').prop('checked')) {
                          $('.check_').prop( 'checked' , true );
                    }
                    else {
                        $(".check_").removeProp('checked');
                    }
                });
                $('#checkallfull').on('change', function(){
                    if ($('#checkallfull').prop('checked')) {
                        $('.checkfull_').prop( 'checked' , true );
                    }
                    else {
                        $(".checkfull_").removeProp('checked');
                    }
                });

            </script>
@endsection
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->