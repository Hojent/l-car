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
                        <div class="col-sm-6">
                        <h4 class="card-title m-b-0">
                            @lang('headers.index_parts'):
                            @if ($gid)
                                {{$groupTitle}}
                            @endif
                        </h4>
                        </div>
                        <div class="col-sm-6">
                        <button type="button" class="btn btn-sm btn-info" data-toggle="modal" data-target="#modalAdd">
                            @lang('headers.add_part')
                        </button>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <div class="row">
                            <table id="zero_config" class="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>Название</th>
                                    <th>Категория</th>
                                    <th title="Действие">Действие</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach ($parts as $part)
                                    <tr>
                                        <td>
                                            <a href="{{route('parts.edit',$part->id)}}" class="m-b-0 font-medium p-0" title="@lang('message.edit')">{{$part->title}}</a></td>
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
       $('#zero_config').DataTable();
    </script>
@endsection
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->