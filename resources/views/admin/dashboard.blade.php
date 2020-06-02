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
                <h4 class="card-title">Новые поступления</h4>
            </div>
            <div class="comment-widgets scrollable">
                <!-- Comment Row -->
                <div class="d-flex flex-row comment-row m-t-0">
                    <div class="p-2"><img src="assets/images/users/1.jpg" alt="user" width="50" class="rounded-circle"></div>
                    <div class="comment-text w-100">
                        <h6 class="font-medium">Ситроен Ксара 2009</h6>
                        <span class="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing and type setting industry. </span>
                        <div class="comment-footer">
                            <span class="text-muted float-right">April 14, 2016</span>
                            <button type="button" class="btn btn-cyan btn-sm">Редактировать</button>
                            <button type="button" class="btn btn-danger btn-sm">Удалить</button>
                            <button type="button" class="btn btn-success btn-sm">Скрыть</button>

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