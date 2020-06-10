<div class="modal fade" id="modal-edit" tabindex="-1" role="dialog" aria-labelledby="modal-add" aria-hidden="true" style="display: none;">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                    Редактировать категорию
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
                   {{Form::open(['route'=>['categories.update',$category->id], 'method'=>'put'])}}
                    <div class="card-body">
                        <div class="form-group row">
                            <label for="title" class="col-sm-3 text-right control-label col-form-label">Название</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" id="title" value="{{$category->title}}"  name="title">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                            <button type="submit" class="btn btn-primary">Сохранить</button>
                    </div>

                    {!! Form::close() !!}
        </div>
    </div>
</div>