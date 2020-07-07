@extends('admin.layout')
@section('title')
    @lang('headers.admin_complects')
@endsection
@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-2">
                            <h4 class="card-title m-b-0">
                                @lang('headers.index_complects'):
                            </h4>
                        </div>
                        <div class="col-sm-5">
                            <a href="{{route('complects.create')}}" class="btn btn-sm btn-success")>
                                @lang('headers.add_complect')
                            </a>
                        </div>
                        <div class="col-sm-5">


                        </div>
                    </div>

                    <div class="table-responsive">
                        <div class="row">
                            <table id="zero_config" class="table table-striped table-bordered">
                                <thead>
                                <tr>
                                    <th>Название</th>
                                    <th>Характеристики</th>
                                    <th>Запчасти</th>
                                    <th>Статус</th>
                                    <th title="Действие">Действие</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach ($complects as $complect)
                                    <tr>
                                        <td>
                                            <a href="{{route('complects.edit',$complect->id)}}" class="m-b-0 font-medium p-0" title="@lang('headers.edit_complect')">{{$complect->title}}</a><br>
                         <img width="150px" src="{{$complect->getImage()}}">
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
                                        <td><p><a href="{{route('complects.show',$complect)}}">Автозапчасти и диски</a></p>
                                            <p>Запчасти (общее кол-во):<br>
                                                Диски:</p>
                                        </td>
                                        <td>
                                            @if ($complect->isStatus($complect->status))
                                                <i class="mdi mdi-eye float-left" title="опубликовано"></i>
                                            @else
                                                <i class="mdi mdi-eye-off" title="скрыто"></i>
                                            @endif
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
                </div>

            </div>
        </div>
    </div>

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