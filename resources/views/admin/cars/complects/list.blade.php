@extends('admin.layout')
@section('title')
    @lang('headers.edit_complect')
@endsection
@section('content')

    {{ Form::open([
        'route' => ['complect.updateparts', $complect->id],
        'file' => 'true',
        'enctype' => 'multipart/form-data',
        'method' => 'put',
     ]) }}
    <div class="card-body">
              <!--------- end checkboxes -->
        <!--title -->
        <div class="form-group row">
            <div class="col-sm-3">
                <h3>{{$complect->title}}</h3>
            </div>
            <div class="col-sm-9">
               <h5>{{$complect->getBrand()}} {{$complect->getModel()}}.  {{$complect->getYear()}}, {{$complect->getBody()}},  {{$complect->getMotor()}}  {{$complect->getVolume()}} cm3</h5>
            </div>
        </div>

      <div class="card card-body">
        <div class="form-group row">
            <div class="col-sm-3">
                <h3>Перечень запчастей</h3>
                <p><img src="{{$complect->getImage()}}" width="200px"/></p>

                <p>Указывайте цены в долларах</p>
            </div>
            <div class="col-sm-9">
                <div class="row  flex-wrap">
                @foreach ($complect->parts as $part)

                            @if ($loop->index == 0 OR $loop->index%5 == 0)
                                <div class="col-sm-4 flex-column">
                                    @endif
                                 <p>{{$part->title}}
                                     <a href="#" title="удалить" style="color: green;"><span class="mdi mdi-pencil">

                                     <a href="#" title="удалить" style="color: red;"><span class="mdi mdi-close-circle"> </span></a><br>
                                     <input type="text" name="prices[]" value="{{$part->pivot->price}}">
                                 </p>
                            @if ($loop->iteration%5 == 0 OR $loop->last)
                               </div>

                    @endif

                @endforeach
               </div>
            </div>
        </div>
      </div>

        <div>
            <a class="btn btn-info" href="{{ route('complects.index') }}">@lang('messages.close')</a>
            <button class="btn btn-success pull-right">
                @lang('messages.save')
            </button>
        </div>


    </div>
    {!! Form::close() !!}

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