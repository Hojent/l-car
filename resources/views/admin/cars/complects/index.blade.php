@extends('admin.layout')
@section('title')
    @lang('headers.admin_complects')
@endsection
@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title m-b-0">
                        @lang('messages.brand'):
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
                                    <th>Марка\Модель</th>
                                    <th title="Действие">Действие</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach ($complects as $complect)
                                    <tr>
                                        <td>
                                            <a href="{{route('complects.edit',$complect->id)}}" class="m-b-0 font-medium p-0" title="@lang('headers.edit_complect')">{{$complect->title}}</a><br>
                         <img width="150px" src="{{$complect->images}}">

                                        </td>
                                        <td>
                                            {{$complect->getBrand()}}/
                                            {{$complect->getModel()}}<br>
                                            Кузов: {{$complect->getBody()}}<br>
                                            Двигатель: {{$complect->getMotor()}}<br>
                                            Объем: {{$complect->getVolume()}}<br>
                                            Год: {{$complect->getYear()}}<br>
                                            Кол-во дверей: {{$complect->doors}}<br>
                                            Цвет: {{$complect->color}}<br>
                                        </td>
                                        <td>
                                            {{Form::open([
                                            'route'=>['complects.destroy',
                                                $complect->id],
                                             'method'=>'delete'
                                             ])}}
                                            <button class="btn btn-link btn-sm"
                                                    title="@lang('messages.delete')"
                                                onclick="return confirm('удалить машину?')" type="submit"> <i class="mdi mdi-delete fa-2x "></i>
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
                           <a href="{{route('complects.create')}}" class="btn btn-sm btn-info")>
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