<footer class="ftco-footer ftco-bg-dark ftco-section">
        <div class="container">
            <div class="row mb-5">
                <div class="col-md">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="ftco-heading-2">About Autoroad</h2>
                        <p>Far far away, behind the word mountains, far from the countries,
                            there live the adventures.</p>
                        <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                            <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                            <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                            <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md">
                    <div class="ftco-footer-widget mb-4 ml-md-5">
                        <h2 class="ftco-heading-2">Клиентам</h2>
                        <ul class="list-unstyled">
                           @foreach($welinks as $welink)
                            <!-- список материалов категории about -->
                            <li><a href="{{route('article', $welink->slug)}}" class="py-2 d-block">{{$welink->title}}</a></li>
                            @endforeach
                        </ul>
                    </div>
                </div>
                <div class="col-md">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="ftco-heading-2">Оплата и доставка</h2>
                        <ul class="list-unstyled">
                            <!-- список материалов категории payment -->
                            @foreach($payLinks as $payLink)
                             <li><a href="{{route('article', $payLink->slug)}}" class="py-2 d-block">{{$payLink->title}}</a></li>
                            @endforeach
                        </ul>
                    </div>
                </div>
                <div class="col-md">
                    <div class="ftco-footer-widget mb-4">
                        <h2 class="ftco-heading-2">Есть вопросы?</h2>
                        <div class="block-23 mb-3">
                            <ul>
                                <li><span class="icon icon-map-marker"></span><span class="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                <li><a href="#"><span class="icon icon-phone"></span><span class="text">+2 392 3929 210</span></a></li>
                                <li><a href="#"><span class="icon icon-envelope"></span><span class="text">info@yourdomain.com</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                    <p>
                        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Site designed by <a href="https://web-project.by">Web-project</a><br>This template is made with <i class="icon-heart color-danger" aria-hidden="true"></i> by
                        <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                </div>
            </div>
        </div>
</footer>