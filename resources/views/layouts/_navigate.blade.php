<div class="container">
    <a class="navbar-brand" href="/">Auto<span>road</span></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
    </button>

    <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
         <li class="nav-item active"><a href="{{route('home')}}" class="nav-link">Главная</a></li>
         <li class="nav-item"><a href="{{route('article', 'o-nas')}}" class="nav-link">О нас</a></li>
         <li class="nav-item"><a href="{{route('complects')}}" class="nav-link">Авто в разборке</a></li>
         <li class="nav-item"><a href="{{route('article', 'dostavka')}}" class="nav-link">Доставка</a></li>
         <li class="nav-item"><a href="{{route('blog', 3)}}" class="nav-link">Новости</a></li>
         <li class="nav-item" ><a href="{{route('article', 'kontakty')}}" class="nav-link">Контакты</a></li>
          <li class="nav-item" ><a href="#" data-toggle="modal" data-target="#modal" class="nav-link">E-mail</a></li>
        </ul>
    </div>
</div>