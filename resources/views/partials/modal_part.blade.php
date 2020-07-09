<div class="modal fade" id="modalAdd" tabindex="-1" role="dialog" aria-labelledby="modalAdd" aria-hidden="true" style="display: none;">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                    Добавить запчасть
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            {!! Form::open([
            'route' => ['add_parts', $complect],
            'method' => 'put',
            ]) !!}
            <div class="modal-body">
                <div class="card-body">
                    <div class="form-group row">
                        <div class="box col-sm-6">
                            {{Form::select('group_id',
                                $groups, null,
                                ['placeholder' => 'Категория запчастей',
                                'class' => 'select2 form-control custom-select',
                                'style' => 'width: 100%; height:36px;',
                                'required' => true,
                                'id' => 'group']
                                )
                            }}
                        </div>
                        <div class="col-sm-6 box {{ $errors->has('part_id') ? 'has-error' : '' }}">
                            <select name="part_id" id="part" class="select2 form-control custom-select" style = "width: 100%; height:36px;">
                                <option value="">Запчасть</option>
                            </select>
                            @if($errors->has('part_id'))
                                <p class="help-block">
                                    {{ $errors->first('part_id') }}
                                </p>
                            @endif
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


