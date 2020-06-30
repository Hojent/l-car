<div class="modal fade" id="modalAdd" tabindex="-1" role="dialog" aria-labelledby="modalAdd" aria-hidden="true" style="display: none;">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                    @lang('headers.add_part')
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            {!! Form::open(['route' => 'parts.store', 'data-remote' => 'true']) !!}
            <div class="modal-body">
                <div class="card-body">
                    <div class="form-group row">
                        <div class="col-sm-3">
                            <label for="title" class=" text-right control-label col-form-label">
                                @lang('messages.parts')
                            </label>
                        </div>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="title" placeholder="введите заголовок" name="title" value="{{old('title')}}">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-3">
                            <label class="text-right control-label col-form-label">
                                @lang('messages.group')
                            </label>
                        </div>
                        <div class="col-sm-9">
                            {{Form::select('group_id',
                                $groups, null,
                                ['placeholder' => 'Выберите категорию',
                                'class' => 'select2 form-control custom-select',
                                'style' => 'width: 100%; height:36px;']
                                )
                            }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                    @lang('messages.close')</button>
                <button type="submit" class="btn btn-primary">@lang('messages.save')</button>
            </div>
            {!! Form::close() !!}
        </div>
    </div>
</div>


