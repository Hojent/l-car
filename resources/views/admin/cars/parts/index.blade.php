@extends('admin.layout')
@section('title')
    {{ __('headers.admin_parts') }}
@endsection
@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body ">
                    <div class="row">
                        <div class="col-sm-2">
                        <h4 class="card-title m-b-0">
                            @lang('headers.index_parts'):
                            @if ($gid)
                                {{$groupTitle}}
                            @endif
                        </h4>
                        </div>
                        <div class="col-sm-5">
                            {{ Form::open([
                            'route' => ['parts.index'],
                            'method' => 'GET',
                             ]) }}
                            <div class="row">
                                <div class="col-sm-8">
                                    {{Form::select('group_id',
                                    $groups, request()->get('group_id'),
                                    ['class' => 'select2 form-control custom-select',
                                    'style' => 'width: 100%; height:36px;',
                                    'placeholder' => 'Выберите категорию',
                                    'id' => 'group',
                                     ])}}
                                </div>
                                <div class="col-sm-2">
                                    <input type="submit" class="btn btn-info" value="Выбрать" />
                                </div>
                                <div class="col-sm-2">
                                    {{Form::open([
                                           'route'=>['parts.index'],
                                            'method'=>'GET',
                                            'group_id' => '1'
                                            ])}}
                                    <input type="submit" class="btn btn-primary" value="Очистить"  onclick="
                                    getElementsByName('group_id')[0].remove()
                                        ">
                                    {{Form::close()}}
                                </div>
                            </div>
                            {!! Form::close() !!}
                        </div>
                        <div class="col-sm-5">
                        <input type="button" class="btn btn-success" data-toggle="modal"
                               data-target="#modalAdd" value="@lang('headers.add_part')" />

                        </div>
                    </div>
                    <div class="table-responsive">
                        <div class="row">
                            <table id="zero_config" class="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>Название</th>
                                    <th>Общее кол-во</th>
                                    <th>Категория</th>
                                    <th title="Действие">Действие</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach ($parts as $part)
                                    <tr>
                                        <td>
                                            <a href="{{route('parts.edit',$part->id)}}" class="m-b-0 font-medium p-0" title="@lang('message.edit')">{{$part->title}}</a></td>
                                        <td>{{$part->complects->count()}}</td>
                                        <td>{{$part->getGroup()}}</td>
                                        <td>
                                            {{Form::open([
                                            'route'=>['parts.destroy', $part->id],
                                             'method'=>'delete'
                                             ])}}
                                            <button class="btn btn-link btn-sm"
                                                    title="@lang('messages.delete')"
                                                onclick="return confirm('удалить запчасть?')" type="submit"> <i class="mdi mdi-delete fa-2x "></i>
                                            </button>
                                            {{Form::close()}}
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
{{--                        <div class="row">
                            <div class="col-sm-12 dataTables_paginate paging_simple_numbers">
                                {{ $parts->links('vendor.pagination.admin') }}
                            </div>
                        </div>--}}
                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- BEGIN MODAL -->


    <!-- Modal Add -->
    @include('partials.new-part')
    <!-- END Add -->

    <!-- END MODAL -->
@endsection
@section('script')
    @parent
    <script>
       $('#zero_config').DataTable({
           "bPaginate": true,
           "info": false,
           "searching": false
       }
       );
    </script>
@endsection
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->