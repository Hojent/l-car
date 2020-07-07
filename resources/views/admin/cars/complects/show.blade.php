@extends('admin.layout')
@section('title')
    @lang('headers.parts_complect')
@endsection
@section('content')

    <div class="card-body flex-wrap">
        <!--title -->
        <div class="form-group row">
            <div class="col-sm-3">
                <h3>{{$complect->title}}</h3>
            </div>
            <div class="col-sm-9">
                <h4>{{$complect->getBrand()}} {{$complect->getModel()}}</h4>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-sm-3">
                <div class="box">
                <img class="img-thumbnail" src="{{$complect->getImage()}}" width="200px" />
                <p>Год выпуска: {{$complect->getYear()}}</p>
                <p>Кузов: {{$complect->getBody()}}</p>
                <p>Двигатель: {{$complect->getMotor()}}</p>
                <p>Объем (см3): {{$complect->getVolume()}}</p>
                <p><b>Цвет:</b> {{ $complect->color }}</p>
                </div>
                <div class="box">
                    <a href="{{route('complects.edit', $complect)}}" class="btn btn-lg btn-primary")>
                        @lang('messages.change')
                    </a>
                    <a class="btn btn-info" href="{{ route('complects.index') }}">@lang('messages.back')</a>
                </div>
            </div>
            <!--parts list -->
            <div class="col-sm-9">

                <input type="button" class="btn btn-success" data-toggle="modal"
                       data-target="#modalAdd" value="Добавить запчасть" />
            </div>
        </div>
    </div>

    <!-- BEGIN MODAL -->
    @include('partials.modal_part')
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
        $('#group').change(function(){
            $.ajax({
                url: "{{ route('get_by_group') }}?group_id=" + $(this).val(),
                method: 'GET',
                success: function(data) {
                    $('#part').html(data.html);
                }
            });
        });
    </script>
@endsection
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->