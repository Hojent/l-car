@extends('admin.layout')
@section('title')
    Рабочий стол
@endsection
<!-- ============================================================== -->
<!-- Start Page Content -->
<!-- ============================================================== -->
@section('content')

<div class="row">
    <div class="col-md-6">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Последние действия (update)</h4>
            </div>
            <div class="comment-widgets scrollable">
                <!-- Comment Row -->
                <div class="d-flex flex-row comment-row m-t-0">
                    <div class="p-2"><img src="{{$lastcar->getImage()}}" alt="" width="50" class="rounded-circle"></div>
                    <div class="comment-text w-100">
                        <h6 class="font-medium">{{$lastcar->title}}</h6>
                        <span class="m-b-15 d-block">О машине: {{$lastcar->getBrand()}} {{$lastcar->getModel()}}. {{$lastcar->getYear()}} г.<br>
                            {{$lastcar->getBody()}}, {{$lastcar->getMotor()}}, {{$lastcar->getVolume()}}</span>
                        <span class="m-b-15 d-block">Количество запчастей: {{$lastcar->parts->count()}}</span>
                        <div class="comment-footer">
                            <span class="text-muted float-right">{{$lastcar->created_at}}</span>
                            <div class="row">
                                <div class="col-sm-4">
                                    <a href="{{route('complects.edit',$lastcar->id)}}" class="m-b-0 font-medium p-0"
                                       title="@lang('headers.edit_complect')">
                                        <button type="button" class="btn btn-cyan btn-sm">Редактировать</button>
                                    </a>
                                </div>
                                <div class="col-sm-8">
                                    {{Form::open([
                                   'route'=>['complects.destroy',
                                       $lastcar->id],
                                    'method'=>'delete'
                                    ])}}
                                    <button type="submit" onclick="return confirm('удалить машину?')" class="btn btn-danger btn-sm">Удалить</button>
                                    {{Form::close()}}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Card -->
    </div>
    <div class="col-md-6">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title m-b-0">Категории запчастей</h4>
            </div>
            <ul class="list-style-none">
                <!-- parts links -->
                <li class="d-flex no-block card-body border-top">
                    <i class="fa fa-check-circle w-30px m-t-5"></i>
                    <div>
                        <a href="#" class="m-b-0 font-medium p-0">Двигатели и зч по двигателям</a>
                    </div>
                    <div class="ml-auto">
                        <div class="tetx-right">
                            <h5 class="text-muted m-b-0">(6)</h5>
                        </div>
                    </div>
                </li>
                <li class="d-flex no-block card-body border-top">
                    <i class="fa fa-check-circle w-30px m-t-5"></i>
                    <div>
                        <a href="#" class="m-b-0 font-medium p-0">Подвеска</a>
                    </div>
                    <div class="ml-auto">
                        <div class="tetx-right">
                            <h5 class="text-muted m-b-0">(12)</h5>
                        </div>
                    </div>
                </li>
                <li class="d-flex no-block card-body border-top">
                    <i class="fa fa-check-circle w-30px m-t-5"></i>
                    <div>
                        <a href="#" class="m-b-0 font-medium p-0">Электрика</a>
                    </div>
                    <div class="ml-auto">
                        <div class="tetx-right">
                            <h5 class="text-muted m-b-0">(19)</h5>
                        </div>
                    </div>
                </li>
                <!-- end parts links -->
            </ul>
        </div>
    </div>
</div>

<!-- BEGIN MODAL -->

<!-- Modal Add Category -->

<!-- END MODAL -->
@endsection
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->