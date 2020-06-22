<div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true" style="display: none;">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                    @lang('headers.email')
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            {!! Form::open(['route' => 'send', 'data-remote' => 'true']) !!}
            <div class="modal-body">
                <div class="card-body">
                    <div class="form-group row">
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="client" placeholder="Ваше имя" name="client">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-9">
                            <textarea type="text" class="form-control" id="content" placeholder="текст сообщения" name="content"></textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-9">
                            <input type="email" class="form-control" id="email" placeholder="Ваш e-mail" name="email">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                    @lang('messages.close')</button>
                <button type="submit" class="btn btn-primary">@lang('messages.send')</button>
            </div>
            {!! Form::close() !!}
        </div>
    </div>
</div>