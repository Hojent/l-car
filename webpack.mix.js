const mix = require('laravel-mix');

mix.autoload({
    jquery: ["$", "global.jQuery","jQuery","global.$","jquery","global.jquery"]
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    'resources/assets/admin/dist/css/style.min.css',
    //'resources/assets/admin/dist/css/icons/font-awesome/css/fontawesome-all.css',
    //'resources/assets/admin/dist/css/icons/simple-line-icons/css/simple-line-icons.css',
    //'resources/assets/admin/dist/css/icons/weather-icons/css/weather-icons.min.css',
    //'resources/assets/admin/dist/css/icons/themify-icons/themify-icons.css',
    //'resources/assets/admin/dist/css/icons/flag-icon-css/flag-icon.min.css',
    //'resources/assets/admin/dist/css/icons/material-design-iconic-font/css/materialdesignicons.min.css',
    //'resources/assets/admin/dist/css/icons/crypto-icons/cryptocoins.css)',
    //'resources/assets/admin/dist/css/style.css',
    //'resources/assets/admin/assets/libs/jquery-steps/jquery.steps.css',
    //'resources/assets/admin/assets/libs/jquery-steps/steps.css',
    //'resources/assets/admin/assets/libs/select2/dist/css/select2.min.css',
    //'resources/assets/admin/assets/libs/jquery-minicolors/jquery.minicolors.css',
    //'resources/assets/admin/assets/libs/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css',
    //'resources/assets/admin/assets/libs/quill/dist/quill.snow.css',
], 'public/css/admin.css');

mix.js([
    //'resources/assets/admin/assets/libs/jquery/dist/jquery.min.js',
    //'resources/assets/admin/assets/libs/select2/dist/js/select2.full.min.js',
    //'resources/assets/admin/assets/libs/select2/dist/js/select2.min.js',
    'resources/assets/admin/dist/js/jquery.ui.touch-punch-improved.js',
    'resources/assets/admin/dist/js/jquery-ui.min.js',
    //'resources/assets/admin/assets/libs/popper.js/dist/umd/popper.min.js',
    'resources/assets/admin/assets/libs/bootstrap/dist/js/bootstrap.min.js',
    'resources/assets/admin/assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js',
    //'resources/assets/admin/assets/extra-libs/sparkline/sparkline.js',
    //'resources/assets/admin/dist/js/waves.js',
    'resources/assets/admin/dist/js/sidebarmenu.js',
    'resources/assets/admin/dist/js/custom.min.js',
    'resources/assets/admin/assets/extra-libs/multicheck/datatable-checkbox-init.js',
    'resources/assets/admin/assets/extra-libs/multicheck/jquery.multicheck.js',
    //'resources/assets/admin/assets/extra-libs/DataTables/datatables.js',
    //'resources/assets/admin/assets/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
    //'resources/assets/admin/assets/libs/magnific-popup/meg.init.js',
    //'resources/assets/admin/assets/libs/toastr/build/toastr.min.js',
    //'resources/assets/admin/assets/libs/jquery-steps/build/jquery.steps.min.js',
    //'resources/assets/admin/assets/libs/jquery-validation/dist/jquery.validate.min.js',
    //'resources/assets/admin/assets/libs/inputmask/dist/min/jquery.inputmask.bundle.min.js',
    //'resources/assets/admin/dist/js/pages/mask/mask.init.js',
    //'resources/assets/admin/assets/libs/jquery-asColor/dist/jquery-asColor.js',
    //'resources/assets/admin/assets/libs/jquery-asGradient/dist/jquery-asGradient.js',
    //'resources/assets/admin/assets/libs/jquery-asColorPicker/dist/jquery-asColorPicker.js',
    //'resources/assets/admin/assets/libs/jquery-minicolors/jquery.minicolors.min.js',
    //'resources/assets/admin/assets/libs/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js',
    //'resources/assets/admin/assets/libs/quill/dist/quill.min.js',
    //'resources/assets/admin/dist/js/script.js',
    //'resources/assets/admin/dist/js/baseform.js',
   // 'resources/assets/admin/dist/js/formselect2.js',
], 'public/js/admin.js');

//mix.copy([
    //'resources/assets/admin/dist/css/icons/font-awesome/css/fontawesome-all.css',
    //'resources/assets/admin/dist/css/icons/weather-icons/css/weather-icons.min.css',
    //'resources/assets/admin/dist/css/icons/themify-icons/themify-icons.css',
    //'resources/assets/admin/dist/css/icons/material-design-iconic-font/css/materialdesignicons.min.css',
//], 'public/css/icons');

mix.copyDirectory ([
    'resources/assets/admin/assets/images',
], 'public/assets/images');
mix.copyDirectory ([
    'resources/assets/admin/dist/css/icons',
], 'public/css/icons');
mix.copy (['resources/assets/admin/assets/libs/jquery/dist/jquery.min.js',],
    'public/js/jquery.min.js');
mix.copy ([
    'resources/assets/admin/assets/libs/select2/dist/js/select2.full.min.js',
    'resources/assets/admin/assets/libs/select2/dist/js/select2.min.js',
    ],
    'public/js');

