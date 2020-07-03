<ul id="sidebarnav" class="p-t-30">
    <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{route('admin')}}" aria-expanded="false"><i class="mdi mdi-view-dashboard"></i><span class="hide-menu">Рабочий стол</span></a></li>
    <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="fas fa-car"></i><span class="hide-menu">Машинокомплекты</span></a>
     <ul aria-expanded="false" class="collapse  first-level">
         @foreach($brandLinks as $item)
         <!-- список материалов категории about -->
             <li class="sidebar-item"><a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{route('complect.brand',$item->id)}}">
                     <i class="fab fa-steam-square"></i>
                     <span class="hide-menu">{{$item->title}}</span>
                 </a></li>
         @endforeach
     </ul>
    </li>
    <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="#" aria-expanded="false"><i class="fas fa-cogs"></i><span class="hide-menu">Запчасти</span></a></li>
    <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-blogger"></i><span class="hide-menu">Блог</span></a>
        <ul aria-expanded="false" class="collapse  first-level">
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{route('posts.index')}}" aria-expanded="false"><i class="mdi mdi-pencil"></i><span class="hide-menu">Все материалы</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{route('category', 3)}}" aria-expanded="false"><i class="mdi mdi-pencil"></i><span class="hide-menu">Новости</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{route('category', 4)}}" aria-expanded="false"><i class="mdi mdi-pencil"></i><span class="hide-menu">Клиентам</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{route('category', 1)}}" aria-expanded="false"><i class="mdi mdi-pencil"></i><span class="hide-menu">Оплата и доставка</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{route('categories.index')}}" aria-expanded="false"><i class="mdi mdi-chart-bubble"></i><span class="hide-menu">Категории новостей</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{route('tags.index')}}" aria-expanded="false"><i class="mdi mdi-tag"></i><span class="hide-menu">Теги новостей</span></a></li>
        </ul>
    </li>
    <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-wrench"></i><span class="hide-menu">Базы данных</span></a>
        <ul aria-expanded="false" class="collapse  first-level">
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{route('bodies.index')}}" aria-expanded="false"><i class="mdi mdi-car"></i><span class="hide-menu">Типы кузова</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{route('motors.index')}}" aria-expanded="false"><i class="mdi mdi-engine"></i><span class="hide-menu">Типы двигателей</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{route('volumes.index')}}" aria-expanded="false"><i class="mdi mdi-engine"></i><span class="hide-menu">Объемы двгателей</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{route('years.index')}}" aria-expanded="false"><i class="mdi mdi-yelp"></i><span class="hide-menu">Годы выпуска</span></a></li>
             <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{route('groups.index')}}" aria-expanded="false"><i class="mdi mdi-yeast"></i><span class="hide-menu">Категории запчастей</span></a></li>
            <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="{{route('parts.index')}}" aria-expanded="false"><i class="mdi mdi-car"></i><span class="hide-menu">Запчасти - названия</span></a></li>
        </ul>
    </li>
    <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-chemical-weapon"></i><span class="hide-menu">Марки автомобилей</span></a>
        <ul aria-expanded="false" class="collapse  first-level">
            <li class="sidebar-item"><a href="{{route('brands.index')}}" class="sidebar-link"><i class="fab fa-steam-square"></i><span class="hide-menu"> Бренды </span></a></li>
            <li class="sidebar-item"><a href="{{route('models.index')}}" class="sidebar-link"><i class="fab fa-steam-symbol"></i><span class="hide-menu"> Модели </span></a></li>
        </ul>
    </li>

</ul>