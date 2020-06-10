@extends('admin.layout')
@section('title')
    Категории блога
@endsection
@section('content')
    <div class="row">
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title m-b-0">Категории новостей</h4>
                </div>
                <ul class="list-style-none">
                    @foreach ($categories as $category)
                    <li class="d-flex no-block card-body border-top">
                        <i class="fa fa-check-circle w-30px m-t-5"></i>
                        <div>
                            <a href="{{route('categories.edit',$category->id)}}" class="m-b-0 font-medium p-0">{{$category->title}}</a>
                        </div>
                        <div class="ml-auto">
                            {{Form::open(['route'=>['categories.destroy', $category->id], 'method'=>'delete'])}}
                            <button onclick="return confirm('удалить категорию и все ее материалы?')" type="submit" class="icon-delete">
                                <i class="far fa-trash-alt"></i>
                            </button>
                            {{Form::close()}}
                        </div>
                    </li>
                    @endforeach
                </ul>
            </div>
        </div>
        <div class="col-md-4">
            <button type="button" class="btn btn-sm btn-info" data-toggle="modal" data-target="#modal-add">
                Добавить категорию
            </button>
            <div class="card-body">
                <div class="alert alert-info">Чтобы изменить название категории, кликнете по названию</div>
            </div>
        </div>
    </div>


    <!-- BEGIN MODAL -->

    <!-- Modal Add Category -->

    @include('partials.edit-category')
    @include('partials.new-category')
    <!-- END Add -->

    <!-- Modal Edit Category -->
<script>
    $("a.mod-edit").click(function(){
        $('form input[name="zakaz"]').val($(this).attr("data-zakaz"));
    })
</script>
    <!-- END Edit -->

    <!-- END MODAL -->
@endsection
<!-- ============================================================== -->
<!-- End PAge Content -->
<!-- ============================================================== -->