@extends('admin.layout')
@section('title')
    {{ __('headers.admin_dictes') }}
@endsection
@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title m-b-0">
                        @lang('messages.models'):
                        @if ($cid)
                            {{$brandTitle}}
                        @endif
                    </h4>
                    <div class="table-responsive">
                        <div class="row">
                            <table id="zero_config" class="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>Название</th>
                                    <th>Марка</th>
                                    <th title="Действие">Действие</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach ($models as $model)
                                    <tr>
                                        <td>
                                            <a href="{{route('models.edit',$model->id)}}" class="m-b-0 font-medium p-0" title="@lang('headers.edit_model')">{{$model->title}}</a></td>
                                        <td>{{$model->getBrand()}}</td>
                                        <td>
                                            {{Form::open([
                                            'route'=>['models.destroy', $model->id],
                                             'method'=>'delete'
                                             ])}}
                                            <button class="btn btn-link btn-sm"
                                                    title="@lang('messages.delete')"
                                                onclick="return confirm('удалить модель?')" type="submit"> <i class="mdi mdi-delete fa-2x "></i>
                                            </button>
                                            {{Form::close()}}
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                           <a href="{{route('models.create')}}" class="btn btn-sm btn-info")>
                               @lang('messages.add')
                           </a>
                    </div>
                </div>

            </div>
        </div>
    </div>

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