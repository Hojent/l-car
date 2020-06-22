<div class="well col-sm-8">
    <h3>{{ $feedback->client }}</h3>
    <hr>
    <p><b>Текст сообщения:</b><br>{{ $feedback->content}}</p>
    <p><b>E-mail:</b> -
        <a href="mailto:{{ $feedback->email }}">{{ $feedback->email }}</a></p>
</div>