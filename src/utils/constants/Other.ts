export const ERROR_MESSAGE = 'failed to open stream: No such file or directory';
export const TEST_TEXT = 'app.bundle.js:2 <!DOCTYPE html>\n' +
    '<!--[if lt IE 9 ]> <html class="no_support"> <![endif]-->\n' +
    '<!--[if (gte IE 9)|!(IE)]><!--> <html data-ng-app="kamApp" lang="lt"> <!--<![endif]-->\n' +
    '\t<head>\n' +
    '\t\t<title>2021 m. karo prievolininkų sąrašas</title>\n' +
    '\t\t<meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
    '\t\t<meta charset="UTF-8">\n' +
    '\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">\n' +
    '\t\t<meta name="GENERATOR" content="EasyWeb 4" />\n' +
    '\t\t<meta name="AUTHOR" content="Fresh Media" />\n' +
    '\t\t<meta name="description" content="Šaukimo į nuolatinę privalomąją pradinę karo tarnybą sąrašas" />\n' +
    '\t\t<meta name="keywords" content="Šauktiniai, nuolatinė privalomoji pradinė karo tarnyba, krašto apsauga, KAM, krašto apsaugos ministerija, karys, kariuomenė" />\n' +
    '\t\t<meta property="og:image" content="https://sauktiniai.karys.lt/img/share.jpg" />\n' +
    '\t\t<link rel="shortcut icon" href="img/favicon.png" type="image/x-icon"/>\n' +
    '\t\t<link href="css/bootstrap.min.css?v3.3.7" rel="stylesheet" />\n' +
    '\t\t<link href="https://fonts.googleapis.com/css?family=Prompt:400,400i,600,600i,700,700i|Roboto:300,300i,400,400i,500,500i,700,700i,900,900i&amp;subset=latin-ext" rel="stylesheet">\n' +
    '\t\t<link href="css/style.css?v13" type="text/css" rel="stylesheet" />\n' +
    '\t\t<script src="js/alllibs.js?v14" type="text/javascript"></script>\n' +
    '\t\t<script src="js/controllers.js?v15" type="text/javascript"></script>\n' +
    '\t\t<script type="text/javascript">\n' +
    '\t\t\t(function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n' +
    '\t\t\t(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n' +
    '\t\t\tm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n' +
    '\t\t\t})(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n' +
    '\n' +
    '\t\t\tga(\'create\', \'UA-3062246-4\', \'auto\');\n' +
    '\t\t\tga(\'send\', \'pageview\');\n' +
    '\t\t</script>\n' +
    '\t</head>\n' +
    '\t<body data-ng-cloak>\n' +
    '\t\t<!-- CONTENT -->\n' +
    '\t\t<div data-ng-controller="SearchByCredentials">\n' +
    '\t\t\t<div class="header" id="header">\n' +
    '\t\t\t\t<div class="header_left">\n' +
    '\t\t\t\t\t<div class="header_left_wrapper">\n' +
    '\t\t\t\t\t\t<a class="logo" href="//karys.lt">KARYS.LT</a>\n' +
    '\t\t\t\t\t\t<div class="vertical_heading" id="vertical_heading"><script>\n' +
    '\t\t\t\t\t\t\t\tvar m = "KOVOTI DĖL ŠEIMOS, LIETUVOS, LAISVĖS"\n' +
    '\t\t\t\t\t\t\t\tfunction p(i) {\n' +
    '\t\t\t\t\t\t\t\t\tdocument.getElementById("vertical_heading").innerHTML += m.charAt(i);\n' +
    '\t\t\t\t\t\t\t\t\tif (i<m.length) {window.setTimeout(function() {p(++i);}, 100)}\n' +
    '\t\t\t\t\t\t\t\t}\n' +
    '\t\t\t\t\t\t\t\tp(0);\n' +
    '\t\t\t\t\t\t\t</script></div>\n' +
    '\t\t\t\t\t\t<div class="tbl">\n' +
    '\t\t\t\t\t\t\t<div class="cl">\n' +
    '\t\t\t\t\t\t\t\t<h1 class="tbl" role="heading">\n' +
    '\t\t\t\t\t\t\t\t\t<span class="cl small_haedings">\n' +
    '\t\t\t\t\t\t\t\t\t\t<span class="heading">2021m.</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t<span class="heading">karo<br/>prievolininkų</span>\n' +
    '\t\t\t\t\t\t\t\t\t</span>\n' +
    '\t\t\t\t\t\t\t\t\t<span class="cl large_heading">\n' +
    '\t\t\t\t\t\t\t\t\t\t<span class="heading"><span class="first_letter">S</span>ĄRAŠAS</span>\n' +
    '\t\t\t\t\t\t\t\t\t</span>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t</h1>\n' +
    '\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t</div>\n' +
    '\t\t\t\t</div>\n' +
    '\t\t\t\t<div class="header_right">\n' +
    '\t\t\t\t\t<h2 id="scrolltoresults">Tikrinkite savo eilės numerį sąraše</h2>\n' +
    '\t\t\t\t\t<div data-ng-show="response_success">\n' +
    '\t\t\t\t\t\t<div data-ng-if="response.found" >\n' +
    '\t\t\t\t\t\t\t<div class="results_found" data-ng-show=\'showlists\'>\n' +
    '\t\t\t\t\t\t\t\t<p><strong>{{response.info.name}} {{response.info.lastname}}, gim. {{response.info.birthday}}, yra Kalendorinių metų karo prievolininkų sąraše ir yra šaukiamas atlikti nuolatinę privalomąją pradinę karo tarnybą.</strong><p>\n' +
    '\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t<div>\n' +
    '\t\t\t\t\t\t<form name="searchform" data-ng-submit="submit()" novalidate>\n' +
    '\t\t\t\t\t\t\t<div class="form_el">\n' +
    '\t\t\t\t\t\t\t\t<label><span class="fld_title">Vardas </span><input placeholder="Vardenis" onfocus="this.placeholder=\'\'" onblur="this.placeholder=\'Vardenis\'" type="text" class="form-control" name="name" data-ng-model="fdata.name" data-ng-required="true"/>\n' +
    '\t\t\t\t\t\t\t\t\t<span data-ng-show="searchform.name.$invalid && searchform.name.$dirty" data-ng-bind="tr.err_required"></span>\n' +
    '\t\t\t\t\t\t\t\t</label>\n' +
    '\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t\t<div class="form_el">\n' +
    '\t\t\t\t\t\t\t\t<label><span class="fld_title">Pavardė </span><input placeholder="Pavardenis" onfocus="this.placeholder=\'\'" onblur="this.placeholder=\'Pavardenis\'" type="text" class="form-control" name="lastname" data-ng-model="fdata.lastname" data-ng-required="true"/>\n' +
    '\t\t\t\t\t\t\t\t\t<span data-ng-show="searchform.lastname.$invalid && searchform.lastname.$dirty" data-ng-bind="tr.err_required"></span>\n' +
    '\t\t\t\t\t\t\t\t</label>\n' +
    '\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t\t<div class="form_el cal_cnt">\n' +
    '\t\t\t\t\t\t\t\t<span class="fld_title">Gimimo data</span>\n' +
    '\t\t\t\t\t\t\t\t<div class="calendar_select">\n' +
    '\t\t\t\t\t\t\t\t\t<input data-ng-click="openCal($event)" placeholder="1900-01-01" type="text" autocomplete="off"  class="form-control" name="bdate" data-uib-datepicker-popup="yyyy-MM-dd" data-uib-datepicker-mode="dpmode" data-ng-model="fdata.bdate" data-is-open="calopened" data-ng-required="true" />\n' +
    '\t\t\t\t\t\t\t\t\t<button type="button" class="cal_btn" data-ng-click="openCal($event)"><i class="icon-calendar"></i></button>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t\t\t<span data-ng-show="searchform.bdate.$dirty" data-ng-messages="searchform.bdate.$error" role="alert">\n' +
    '\t\t\t\t\t\t\t\t\t<span data-ng-message="date">{{tr.err_date_format}}</span>\n' +
    '\t\t\t\t\t\t\t\t\t<span data-ng-message="required">{{tr.err_required}}</span>\n' +
    '\t\t\t\t\t\t\t\t</span>\n' +
    '\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t\t<div class="form_el last_col">\n' +
    '\t\t\t\t\t\t\t\t<label><span class="fld_title">Asmens kodo paskutiniai 2 skaitmenys</span>\n' +
    '\t\t\t\t\t\t\t\t<span class="ak_input">\n' +
    '\t\t\t\t\t\t\t\t\t<span class="dummy_input">A.k. 000000000</span>\n' +
    '\t\t\t\t\t\t\t\t\t<input placeholder="XX" onfocus="this.placeholder=\'\'" onblur="this.placeholder=\'XX\'" type="text" name="code" class="form-control code_input" maxlength="2" data-ng-maxlength="2" data-ng-minlength="2" data-ng-model="fdata.code" data-ng-required="true" data-ng-pattern="/^\\d{1,2}$/"/>\n' +
    '\t\t\t\t\t\t\t\t</span>\n' +
    '\t\t\t\t\t\t\t\t<span data-ng-show="searchform.code.$dirty" data-ng-messages="searchform.code.$error" role="alert">\n' +
    '\t\t\t\t\t\t\t\t\t<span data-ng-message="pattern">{{tr.err_numbers_only}}</span>\n' +
    '\t\t\t\t\t\t\t\t\t<span data-ng-message="required">{{tr.err_required}}</span>\n' +
    '\t\t\t\t\t\t\t\t\t<span data-ng-message="minlength">{{tr.err_to_short}}</span>\n' +
    '\t\t\t\t\t\t\t\t\t<span data-ng-message="maxlength">{{tr.err_to_long}}</span>\n' +
    '\t\t\t\t\t\t\t\t</span>\n' +
    '\t\t\t\t\t\t\t\t</label>\n' +
    '\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t\t<div class="clear"></div>\n' +
    '\n' +
    '\t\t\t\t\t\t\t<div class="recaptcha">\n' +
    '\t\t\t\t\t\t\t\t<div data-vc-recaptcha data-theme="\'light\'" data-key="grkey" data-on-success="setGrResponse(response)" data-on-create="setGrWidgetId(widgetId);" data-ng-model="grresponse"></div>\n' +
    '\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t\t<div class="buttons_cnt">\n' +
    '\t\t\t\t\t\t\t\t<button type="submit" class="sbmt" data-ng-disabled="searchform.$invalid">Tikrinti</button>\n' +
    '\t\t\t\t\t\t\t\t<button data-ng-show="searchform.$dirty || searchform.bdate.$viewValue" class="clr" type="button" data-ng-click="resetForm();"><i class="glyphicon glyphicon-remove"></i> Išvalyti</button>\n' +
    '\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t</form>\n' +
    '\t\t\t\t\t</div>\n' +
    '\t\t\t\t</div>\n' +
    '\t\t\t</div>\n' +
    '\t\t\t<div class="wrapper global_container">\n' +
    '\t\t\t<div class="results_wrapper" id="results_wrapper" data-ng-show="submitted && !progress.active()">\n' +
    '\t\t\t\t<div class="alert alert-danger" data-ng-show="messages" data-ng-bind-html="messages"></div>\n' +
    '\t\t\t\t<div class="padding_wrapper" data-ng-show="response_success">\n' +
    '\t\t\t\t\t<div data-ng-if="response.found" >\n' +
    '\t\t\t\t\t\t<div class="mobile_scroll_table marg_btm">\n' +
    '\t\t\t\t\t\t<div class="results_found" data-ng-show=\'!showlists\'>\n' +
    '\t\t\t\t\t\t\t<p style="font-size: 16px;line-height:1.4;"><strong>{{response.info.name}} {{response.info.lastname}}, gim. {{response.info.birthday}}, yra Kalendorinių metų karo prievolininkų sąraše ir yra šaukiamas atlikti nuolatinę privalomąją pradinę karo tarnybą.</strong><p>\n' +
    '\t\t\t\t\t\t<div class="datatable generic_datatable">\n' +
    '\t\t\t\t\t\t\t<div class="wrapper global_container mobile_scroll_table marg_btm">\n' +
    '\t\t\t\t\t\t\t\t<table width="100%" cellspacing="0" cellpadding="0">\n' +
    '\t\t\t\t\t\t\t\t\t<thead>\n' +
    '\t\t\t\t\t\t\t\t\t\t<tr>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<th width="20%">Karo prievolininko kodas</th>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<th width="20%">Regionas</th>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<th width="10%">Eilės numeris</th>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<th width="50%">Šaukimo eiga ir nurodymai</th>\n' +
    '\t\t\t\t\t\t\t\t\t\t</tr>\n' +
    '\n' +
    '\t\t\t\t\t\t\t\t\t</thead>\n' +
    '\t\t\t\t\t\t\t\t\t<tbody>\n' +
    '\t\t\t\t\t\t\t\t\t\t<tr>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<td><span data-ng-bind="response.info.number"></span></td>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<td><span data-ng-bind="getRegion(response.info.region)"></span></td>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<td><span data-ng-bind="response.info.pos"></span></td>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<td><span data-ng-bind="response.info.info"></span></td>\n' +
    '\t\t\t\t\t\t\t\t\t\t</tr>\n' +
    '\t\t\t\t\t\t\t\t\t</tbody>\n' +
    '\t\t\t\t\t\t\t\t</table>\n' +
    '\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t</div>\t\n' +
    '\t\t\t\t\t\t\t<p style="font-size: 16px;"><strong>JŪS PRIVALOTE:</strong></p>\n' +
    '\t\t\t\t\t\t\t<ol>\n' +
    '\t\t\t\t\t\t\t\t<li>iki Kalendorinių metų karo prievolininkų sąraše (toliau - sąrašas) nurodytos datos pateikti savo duomenis ryšiams palaikyti (faktinės gyvenamosios vietos adresą, telefono numerį, elektroninio pašto adresą). Jeigu yra aplinkybių, dėl kurių galite būti atleistas nuo karo prievolės ar privalomoji pradinė karo tarnyba gali būti atidėta, Jūs turite pateikti dokumentus, kuriais pagrindžiamos atleidimo nuo karo prievolės ar privalomosios pradinės karo tarnybos atidėjimo individualia tvarka aplinkybės;</li>\n' +
    '\t\t\t\t\t\t\t\t<li>sąraše nurodytu laiku atvykti pasitikrinti sveikatos (ši informacija sąraše paskelbiama ne vėliau kaip per 20 darbo dienų nuo tos dienos, kai Jūs pateiksite 1 punkte nurodytus dokumentus ir (ar) duomenis ryšiams palaikyti).</li>\n' +
    '\t\t\t\t\t\t\t</ol>\n' +
    '\t\t\t\t\t\t\t<p style="font-size: 16px;"><strong>Administruojantis padalinys:</strong></p>\n' +
    '\t\t\t\t\t\t\t<div class="maxw">{{getDepartmentParam(response.info.department, \'info\')}}</div>\n' +
    '\t\t\t\t\t\t\t<div class="datatable">\n' +
    '\t\t\t\t\t\t\t\t<div class="wrapper global_container mobile_scroll_table marg_btm">\n' +
    '\t\t\t\t\t\t\t\t\t<table class="invisible_table" width="100%" cellspacing="0" cellpadding="0">\n' +
    '\t\t\t\t\t\t\t\t\t\t<thead>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<th width="33%">Adresas</th>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<th width="33%">Telefono numeris (-iai)</th>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<th width="33%">Elektroninio pašto adresas</th>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
    '\t\t\t\t\t\t\t\t\t\t</thead>\n' +
    '\t\t\t\t\t\t\t\t\t\t<tbody>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<tr>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<td>{{getDepartmentParam(response.info.department, \'address\')}}</td>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<td>{{getDepartmentParam(response.info.department, \'phone\')}}</td>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<td>{{getDepartmentParam(response.info.department, \'email\')}}</td>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
    '\t\t\t\t\t\t\t\t\t\t</tbody>\n' +
    '\t\t\t\t\t\t\t\t\t</table>\n' +
    '\t\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t\t<p class="maxw">Už aukščiau pateiktų nurodymų nevykdymą Jums gali būti taikoma administracinė atsakomybė pagal Lietuvos Respublikos administracinių nusižengimų kodekso 558 arba 560 straipsnius, pažeidimams kartojantis - baudžiamoji atsakomybė pagal Baudžiamojo kodekso 314 straipsnį.</p>\n' +
    '\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t<div data-ng-show="showlists && response.list" class="datatable marg_btm">\n' +
    '\t\t\t\t\t\t\t<div data-results-table="" data-list="response.list" class="no_header rsl_tbl"></div>\n' +
    '\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t\t<div class="btn_show_me" data-ng-if="response.list_before.length>0 || response.list_after.length>0"><button data-ng-click="toogleLists();" class="btnback btnlist"><span data-ng-show="showlists && response.list_before.length>0">Grįžti į rezultatus</span><span data-ng-show="!showlists || !response.list_before.length>0">Rodyti mane sąraše</span></button></div>\n' +
    '\t\t\t\t\t\n' +
    '\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t<div data-ng-if="!response.found">\n' +
    '\t\t\t\t\t\t<p class="no_person_found"><strong>Kalendorinių metų karo prievolininkų sąraše tokio asmens nėra.</strong></p>\n' +
    '\t\t\t\t\t\t<p class="if_have_questions">Jei turite klausimų, prašome kreiptis į vieną iš Lietuvos kariuomenės Karo prievolės ir komplektavimo tarnybos regioninių padalinių:</p>\n' +
    '\t\t\t\t\t\t<div class="clear"></div>\n' +
    '\t\t\t\t\t\t<div class="datatable">\n' +
    '\t\t\t\t\t\t\t<div class="wrapper global_container mobile_scroll_table marg_btm">\n' +
    '\t\t\t\t\t\t\t\t<table class="padaliniai_info" cellspacing="0" cellpadding="0">\n' +
    '\t\t\t\t\t\t\t\t\t<thead>\n' +
    '\t\t\t\t\t\t\t\t\t\t<tr>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<th class="center">Eil. Nr.</th>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<th class="center">Pavadinimas</th>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<th class="center">Adresas</th>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<th class="center">Telefono numeris</th>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<th class="center">El. pa&scaron;tas</th>\n' +
    '\t\t\t\t\t\t\t\t\t\t</tr>\n' +
    '\t\t\t\t\t\t\t\t\t</thead>\n' +
    '\t\t\t\t\t\t\t\t\t<tbody>\n' +
    '\t\t\t\t\t\t\t\t\t\t<tr ng-repeat="(key, value) in regions">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t<td colspan="5">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<span class="region_title">{{value.title_reg}}</span>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<table class="no_bg">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t<tr ng-repeat="dep in getDepartmentsByReg(value.nr) | orderBy:\'eilnr\'">\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{dep.eilnr}}</td>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{dep.title}}</td>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t\t<td>{{dep.address}}</td>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="center">{{dep.phone}}</td>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t\t<td class="center">{{dep.email}}</td>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t\t</table>\n' +
    '\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
    '\t\t\t\t\t\t\t\t\t\t</tr>\n' +
    '\t\t\t\t\t\t\t\t\t</tbody>\n' +
    '\t\t\t\t\t\t\t\t</table>\n' +
    '</div>\n' +
    '</div>\n' +
    '\t\t\t\t\t</div>\n' +
    '\t\t\t\t</div>\n' +
    '\t\t\t\t<div class="do_new_search"><a href="javascript:void(0);" class="clr new_search" data-ng-click="resetSubmit();">Atlikti naują paiešką</a></div>\n' +
    '\t\t\t</div>\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '\t\t<div class="wrapper global_container lists_wrapper">\n' +
    '\t\t<h2>Sąrašai</h2> \n' +
    '\t\t<h3 class="subtitle"><span data-ng-show="ud.updatetime">Duomenys atnaujinti: <span data-ng-bind="ud.updatetime"></span></span></h3>\n' +
    '\t\t<ul class="lists">\n' +
    '\t\t\t<li data-ng-repeat="(id, region) in regions" data-ng-class="{\'active_li\': region.active}">\n' +
    '\t\t\t\t<a class="listbtn" data-ng-show="mobile" data-ng-href="#/list/{{id}}" data-ng-class="{\'active\': region.active}">{{region.title}}</a>\n' +
    '\t\t\t\t<a class="listbtn" data-ng-show="!mobile" data-ng-href="#/list/{{id}}" data-uib-popover="{{region.name}}: {{region.info}}" popover-trigger="\'mouseenter\'" data-popover-placement="top" data-ng-class="{\'active\': region.active}">{{region.title}}</a>\n' +
    '\t\t\t\t<a class="remove_btn" href="#/"><i class="glyphicon glyphicon-remove"></i></a>\n' +
    '\t\t\t</li>\n' +
    '\t\t</ul>\n' +
    '\t\t<div class="clear"></div>\n' +
    '\t\t</div>\n' +
    '<script type="text/ng-template"  id="tpl_paginate-anything.html">\n' +
    '\t<div class="paginate-anything">\n' +
    '\t<ul class="pagination pagination-{{size}} links" data-ng-if="numPages > 1">\n' +
    '\t<li data-ng-class="{disabled: page <= 0}"><a href data-ng-click="gotoPage(page-1)">&laquo;</a></li>\n' +
    '\t<li data-ng-if="linkGroupFirst() > 0"><a href data-ng-click="gotoPage(0)">1</a></li>\n' +
    '\t<li data-ng-if="linkGroupFirst() > 1" class="disabled"><a href>&hellip;</a></li>\n' +
    '\t<li data-ng-repeat="p in [linkGroupFirst(), linkGroupLast()] | makeRange" data-ng-class="{active: p === page}">\n' +
    '\t<a href data-ng-click="gotoPage(p)">{{p+1}}</a>\n' +
    '\t</li>\n' +
    '\t<li data-ng-if="linkGroupLast() < numPages - 2" class="disabled"><a href>&hellip;</a></li>\n' +
    '\t<li data-ng-if="isFinite() && linkGroupLast() < numPages - 1"><a href data-ng-click="gotoPage(numPages-1)">{{numPages}}</a></li>\n' +
    '\t<li data-ng-class="{disabled: page >= numPages - 1}"><a href data-ng-click="gotoPage(page+1)">&raquo;</a></li>\n' +
    '\t</ul>\n' +
    '\t</div>\n' +
    '</script>\n' +
    '<script type="text/ng-template"  id="tpl_list.html">\n' +
    '\t<div>\n' +
    '\t\t<div class="region_info">\n' +
    '\t\t\t<h3 id="scrolltothis">{{region.name}}</h3>\n' +
    '\t\t\t<p data-ng-bind="region.info"></p>\n' +
    '\t\t</div>\n' +
    '\t\t<results-table list="list"></results-table>\n' +
    '\t\t<div>\n' +
    '\t\t\t<bgf-pagination page="starting_page" collection="list" url="list_url" url-params="url_params" template-url="tpl_paginate-anything.html" per-page="items_per_page" per-page-presets="" auto-presets="false" reload-page="url_reload"></bgf-pagination>\n' +
    '\t\t</div>\n' +
    '\t\t<div class="text_after_lists">\n' +
    '\t\t\t<p style="">Vadovaujantis Lietuvos Respublikos karo prievolės įstatymu, asmenys, įra&scaron;yti į Kalendorinių metų karo prievolininkų sąra&scaron;us (toliau - sąra&scaron;as), yra &scaron;aukiami atlikti nuolatinę privalomąją pradinę karo tarnybą. Karo prievolininkai įra&scaron;yti į sąra&scaron;ą privalo:</p>\n' +
    '<ol style="">\n' +
    '<li>iki sąra&scaron;e nurodytos datos pateikti savo duomenis ry&scaron;iams palaikyti (faktinės gyvenamosios vietos adresą, telefono numerį, elektroninio pa&scaron;to adresą). Jeigu yra aplinkybių, dėl kurių karo prievolininkas gali būti atleistas nuo karo prievolės ar privalomoji pradinė karo tarnyba gali būti atidėta, karo prievolininkas turi pateikti dokumentus, kuriais pagrindžiamos atleidimo nuo karo prievolės ar privalomosios pradinės karo tarnybos atidėjimo individualia tvarka aplinkybės;</li>\n' +
    '<li>sąra&scaron;e nurodytu laiku atvykti pasitikrinti sveikatos (&scaron;i informacija sąra&scaron;e paskelbiama ne vėliau kaip per 20 darbo dienų nuo tos dienos, kai asmuo pateikia 1 punkte nurodytus dokumentus ir (ar) duomenis ry&scaron;iams palaikyti).</li>\n' +
    '</ol>\n' +
    '<p style="">Karo prievolininkai į nuolatinę privalomąją pradinę karo tarnybą šaukiami nuo 18 iki 23 metų (įskaitytinai). Studentams tarnyba yra atidedama iki studijų pabaigos ir šaukimas vykdomas iki 26 metų (įskaitytinai), bet ne ilgiau kaip iki kitų kalendorinių metų pabaigos po studijų baigimo ar nutraukimo.</p>\n' +
    '<p style="">Informacija apie &scaron;aukimo eigos pasikeitimus sąra&scaron;e paskelbiama ne vėliau kaip per 5 darbo dienas nuo &scaron;aukimo eigos aplinkybių pasikeitimo dienos. Už auk&scaron;čiau pateiktų nurodymų (1, 2 punktai) nevykdymą karo prievolininkui gali būti taikoma administracinė atsakomybė pagal Administracinių nusižengimų kodekso 558 arba 560 straipsnius, pažeidimams kartojantis - baudžiamoji atsakomybė pagal Baudžiamojo kodekso 314 straipsnį.</p>\n' +
    '\t\t</div>\n' +
    '\t</div>\n' +
    '</script>\n' +
    '<script type="text/ng-template"  id="tpl_results_table.html">\n' +
    '\t<table>\n' +
    '\t\t<thead>\n' +
    '\t\t\t<tr>\n' +
    '\t\t\t\t<th>Eil. Nr.</th>\n' +
    '\t\t\t\t<th>Vardas Pavardė</th>\n' +
    '\t\t\t\t<th>Gimimo metai</th>\n' +
    '\t\t\t\t<th>Karo prievolininko kodas</th>\n' +
    '\t\t\t\t<th>Šaukimo eiga ir nurodymai</th>\n' +
    '\t\t\t</tr>\n' +
    '\t\t</thead>\n' +
    '\t\t<tbody>\n' +
    '\t\t\t<tr data-ng-repeat="item in list" data-ng-class="{\'marked\': item.marked}">\n' +
    '\t\t\t\t<td data-ng-bind="item.pos"></td>\n' +
    '\t\t\t\t<td><span data-ng-bind="item.name"></span> <span data-ng-bind="item.lastname"></span></td>\n' +
    '\t\t\t\t<td data-ng-bind="item.bdate"></td>\n' +
    '\t\t\t\t<td data-ng-bind="item.number"></td>\n' +
    '\t\t\t\t<td data-ng-bind="item.info"></td>\n' +
    '\t\t\t</tr>\n' +
    '\t\t</tbody>\n' +
    '\t</table>\n' +
    '</script>\n' +
    '\t\t<div class="datatable">\n' +
    '\t\t\t\t<div data-ng-view class="wrapper global_container container-fluid mobile_scroll_table"></div>\n' +
    '\t\t</div>\n' +
    '\t\t<!-- //CONTENT -->\n' +
    '\t\t<!-- FOOTER -->\n' +
    '\t\t<div class="footer">\n' +
    '\t\t\t<div class="global_container container-fluid">\n' +
    '\t\t\t\t<div class="footer_tbl">\n' +
    '\t\t\t\t\t<div class="footer_left">\n' +
    '\t\t\t\t\t\t<div class="bold uppercase">Kyla klausimų? </div>\n' +
    '\t\t\t\t\t\t<div class="bold">8 800 12340</div>\n' +
    '\t\t\t\t\t\t<div class="bold"><a href="/cdn-cgi/l/email-protection#4a392b3f213e2324232b230a27232664263e"><span class="__cf_email__" data-cfemail="97e4f6e2fce3fef9fef6fed7fafefbb9fbe3">[email&#160;protected]</span></a></div>\n' +
    '\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t<div class="footer_middle">\n' +
    '\t\t\t\t\t\tLietuvos kariuomenė<br/>\n' +
    '\t\t\t\t\t\tBiudžetinė įstaiga, <br/>\n' +
    '\t\t\t\t\t\tkodas Juridinių asmenų registre 188732677<br/>\n' +
    '\t\t\t\t\t\tŠv. Ignoto g. 8, LT-01144 Vilnius<br/>\n' +
    '\t\t\t\t\t\tPVM mokėtojo kodas LT887326716 <br/>\n' +
    '\t\t\t\t\t</div>\n' +
    '\t\t\t\t\t<div class="footer_right">\n' +
    '\t\t\t\t\t\t<a class="logo" target="_blank" href="//kariuomene.kam.lt"><img src="img/footer_lk.png" alt="Lietuvos kariuomenė"></a>\n' +
    '\t\t\t\t\t\t<a class="logo" target="_blank" href="//kam.lt"><img src="img/footer_kam.png?v13" alt="Lietuvos Respublikos krašto apsaugos ministerija" class="kam"></a>\n' +
    '\t\t\t\t\t</div>\n' +
    '\t\t\t\t</div>\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '\t\t<div class="footer_bottom_line">\n' +
    '\t\t\t<div class="global_container container-fluid">\n' +
    '\t\t\t\tSprendimas: <a class="fm" title="Interneto svetainių kūrimas" target="_blank" href="https://www.freshmedia.lt">UAB "Fresh Media"</a>\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '\t\t<!-- //FOOTER -->\n' +
    '\t\t<!-- HELPERS -->\n' +
    '\t\t<div data-ng-show="show_loader" class="loader">\n' +
    '\t\t\t<div class="loader_cnt">\n' +
    '\t\t\t\t<div class="alert alert-success">Ruošiama...</div>\t\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '\t\t\n' +
    '\t\t<div class="ie-message">\n' +
    '\t\t\t<div class="loader_cnt">\t\n' +
    '\t\t\t\t<div class="sh-browser alert alert-danger">Atsiprašome, Jūsų naudojama interneto naršyklė nepalaikoma. Norėdami apsilankyti šioje svetainėje naudokite naujausią Safari, Firefox, Chrome ar Internet Explorer versiją. Dėkojame.</div>\t\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>\n' +
    '\t\t\n' +
    '\t\t<!-- //HELPERS -->\n' +
    '\t<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script></body>\n' +
    '</html>\n' +
    '\n';
