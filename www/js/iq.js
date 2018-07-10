$(document).ready(function() {

    setTimeout(inputClick,10);

    $(".oyunaBasla").click(function(){
        $('.header').hide();
        $('.sorular').show();
    });

    $(".tekrarDene").click(function(){
        location.reload();
    });


    var sorular = ['','<div class="soru" id="s1">' +
    '   <div class="ust">' +
    '       <p> Mezarın başında bir kız ağlıyor. Mezarda yatanın annesi ağlayan kızın annesinin kayın validesi. ' +
            'Mezarda yatan, ağlayan kızın nesi olur?  </p>' +
    '   </div>' +
    '   <div class="alt">' +
    '       <form id="form1" method="post">' +
    '           <ul>' +
    '               <li><input type="radio" name="cevap1" value="yanlis">Teyzesi</li>' +
    '               <li><input type="radio" name="cevap1" value="yanlis">Halası</li>' +
    '               <li><input type="radio" name="cevap1" value="dogru">Anneannesi</li>' +
    '               <li><input type="radio" name="cevap1" value="yanlis">Yengesi</li>' +
    '           </ul>' +
    '           <input type="submit" value="CEVAPLA">' +
    '       </form>' +
    '   </div>' +
    '</div>',
        '<div class="soru" id="s2">' +
        '   <div class="ust">' +
        '       <p> 7 kişi karşılaşır ve birbirleri ile yalnızca bir kere tokalaşırlarsa kaç kere tokalaşma olur?  </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form2" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap2" value="yanlis">21 </li>' +
        '               <li><input type="radio" name="cevap2" value="dogru">14</li>' +
        '               <li><input type="radio" name="cevap2" value="yanlis">7</li>' +
        '               <li><input type="radio" name="cevap2" value="yanlis">49</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s3">' +
        '   <div class="ust">' +
        '       <p> Vişne, Ayva, Kiraz, Muz, Elma, Erik, Dut, Üzüm... Hangisi farklıdır?  </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form3" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap3" value="yanlis">Vişne </li>' +
        '               <li><input type="radio" name="cevap3" value="yanlıs">Ayva</li>' +
        '               <li><input type="radio" name="cevap3" value="yanlis">Üzüm</li>' +
        '               <li><input type="radio" name="cevap3" value="dogru">Muz</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s4">' +
        '   <div class="ust">' +
        '       <p> 3 avcı, 3 saatte, 3 ördek vurabiliyorsa, 9 avcının 9 ördeği vurabilmesi için kaç saat lazım?  </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form4" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap4" value="yanlis">15</li>' +
        '               <li><input type="radio" name="cevap4" value="dogru">9</li>' +
        '               <li><input type="radio" name="cevap4" value="yanlis">3</li>' +
        '               <li><input type="radio" name="cevap4" value="yanlis">1</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s5">' +
        '   <div class="ust">' +
        '       <p>Kadının hergün yaptığı erkeğin ise senede bir defa yaptığı iş nedir? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form5" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap5" value="yanlis">Alışveriş</li>' +
        '               <li><input type="radio" name="cevap5" value="yanlis">Dedikodu </li>' +
        '               <li><input type="radio" name="cevap5" value="yanlis">Banyo</li>' +
        '               <li><input type="radio" name="cevap5" value="dogru">İmza</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s6">' +
        '   <div class="ust">' +
        '       <p> Doktorunuz size 3 ilaç verdi ve dedi ki; bunları yarım saat ara ile içiniz. İlaçlarınız kaç saat içinde biter?  </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form6" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap6" value="dogru">1 </li>' +
        '               <li><input type="radio" name="cevap6" value="yanlis">1.5 </li>' +
        '               <li><input type="radio" name="cevap6" value="yanlis">2 </li>' +
        '               <li><input type="radio" name="cevap6" value="yanlis">3</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s7">' +
        '   <div class="ust">' +
        '       <p>“Emre’nin annesi,benim annemin tek kızıdır.” Bu nu söylenen bir kişi  Emre’nin nesi olur?  </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form7" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap7" value="yanlis">Teyzesi </li>' +
        '               <li><input type="radio" name="cevap7" value="yanlis">Halası </li>' +
        '               <li><input type="radio" name="cevap7" value="yanlis">Amcası </li>' +
        '               <li><input type="radio" name="cevap7" value="dogru">Dayısı</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s8">' +
        '   <div class="ust">' +
        '       <p> Sabah saat 9\'dan ertesi sabah saat 9\'dan kadar geçen sürede bir saatin akrep, yelkovan ve saniye kolları üçü birden kaç kere üst üste gelir?  </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form8" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap8" value="dogru">25 </li>' +
        '               <li><input type="radio" name="cevap8" value="yanlis">24</li>' +
        '               <li><input type="radio" name="cevap8" value="yanlis">12</li>' +
        '               <li><input type="radio" name="cevap8" value="yanlis">2</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s9">' +
        '   <div class="ust">' +
        '       <p>        Bir kızın erkek kardeşleri ve kız kardeşlerinin satısı birbirlerine eşittir.' +
        'Fakat hererkeğin kız kardeşlerinin sayısıs, diğer erkek kardeşlerinin sayısının iki katıdır. ' +
        'Bu ailede kaç kız, kaç erkek kardeş var?</p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form9" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap9" value="dogru"> 4 erkek, 3 kız</li>' +
        '               <li><input type="radio" name="cevap9" value="yanlis">3 kız, 3 erkek </li>' +
        '               <li><input type="radio" name="cevap9" value="yanlis">4 kız, 4 erkek </li>' +
        '               <li><input type="radio" name="cevap9" value="yanlis">5 erkek, 3 kız</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s10">' +
        '   <div class="ust">' +
        '       <p> Sadece bir tek kibritiniz var, içinde bir gaz lambası, bir gaz sobası, ve bir de mum bulunan karanlık ve soğuk bir odaya girdiniz… Önce hangisini yakarsınız? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form10" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap10" value="yanlis">Gaz lambası </li>' +
        '               <li><input type="radio" name="cevap10" value="dogru">Kibrit  </li>' +
        '               <li><input type="radio" name="cevap10" value="yanlis">Gaz Sobası </li>' +
        '               <li><input type="radio" name="cevap10" value="yanlis">Işık</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s11">' +
        '   <div class="ust">' +
        '       <p> Adamın biri dikdörtgen biçiminde ve her cephesi güney manzaralı bir ev inşa ediyor. Evi kocaman bir ayı ziyaret ederse bu ayı ne renk olur? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form11" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap11" value="yanlis">Kahverengi </li>' +
        '               <li><input type="radio" name="cevap11" value="yanlis"> Kızıl  </li>' +
        '               <li><input type="radio" name="cevap11" value="dogru">Beyaz  </li>' +
        '               <li><input type="radio" name="cevap11" value="yanlis">Gri</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s12">' +
        '   <div class="ust">' +
        '       <p> Bir çiftçinin 17 koyunu vardı. Sürüde salgın hastalık oldu, dokuzu ağır hastalandı, diğerleri öldü. Çiftçinin kaç koyunu var? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form12" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap12" value="dogru"> 9  </li>' +
        '               <li><input type="radio" name="cevap12" value="yanlis">  8   </li>' +
        '               <li><input type="radio" name="cevap12" value="yanlis"> 0  </li>' +
        '               <li><input type="radio" name="cevap12" value="yanlis"> 7 </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s13">' +
        '   <div class="ust">' +
        '       <p> Aşağıdakilerden hangisi doğrudur? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form13" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap13" value="yanlis">Aşağıdakilerin hepsi doğrudur. </li>' +
        '               <li><input type="radio" name="cevap13" value="dogru"> Yukarıdakilerin hepsi yanlıştır.  </li>' +
        '               <li><input type="radio" name="cevap13" value="yanlis">A şıkkı doğrudur.  </li>' +
        '               <li><input type="radio" name="cevap13" value="yanlis">Tüm şıklar yanlıştır</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s14">' +
        '   <div class="ust">' +
        '       <p><b>3 8 11 19 30 49 ?</b> <br>Dizide soru işareti yerine hangi sayı gelmelidir? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form14" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap14" value="yanlis">76 </li>' +
        '               <li><input type="radio" name="cevap14" value="yanlis"> 77  </li>' +
        '               <li><input type="radio" name="cevap14" value="yanlis">78  </li>' +
        '               <li><input type="radio" name="cevap14" value="dogru">79</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s15">' +
        '   <div class="ust">' +
        '       <p>2-5x4+7=?  </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form15" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap15" value="yanlis">13 </li>' +
        '               <li><input type="radio" name="cevap15" value="yanlis"> -13  </li>' +
        '               <li><input type="radio" name="cevap15" value="yanlis">11  </li>' +
        '               <li><input type="radio" name="cevap15" value="dogru">-11</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s16">' +
        '   <div class="ust">' +
        '       <p> Uzadıkça kısalan şey nedir?  </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form16" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap16" value="yanlis">Lastik </li>' +
        '               <li><input type="radio" name="cevap16" value="dogru"> Hayat </li>' +
        '               <li><input type="radio" name="cevap16" value="yanlis">Sakız  </li>' +
        '               <li><input type="radio" name="cevap16" value="yanlis">Işık </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s17">' +
        '   <div class="ust">' +
        '       <p> Duvarın üzerinde 5 adet kuş duruyor. O sırada oradan geçmekte olan bir avcı, tüfeğini ateşleyip ikisini vuruyor.Orada kaç kuş kalır </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form17" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap17" value="yanlis">3  </li>' +
        '               <li><input type="radio" name="cevap17" value="dogru"> 5  </li>' +
        '               <li><input type="radio" name="cevap17" value="yanlis">2  </li>' +
        '               <li><input type="radio" name="cevap17" value="yanlis">0 </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s18">' +
        '   <div class="ust">' +
        '       <p> Yılın kaç ayında ‘otuz’ gün vardır? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form18" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap18" value="yanlis">6  </li>' +
        '               <li><input type="radio" name="cevap18" value="yanlis">12  </li>' +
        '               <li><input type="radio" name="cevap18" value="dogru">11  </li>' +
        '               <li><input type="radio" name="cevap18" value="yanlis">5 </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s19">' +
        '   <div class="ust">' +
        '       <p> Bir çocuk, 7 elmanın ikisi hariç hepsini yerse, kaç elma kalır?</p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form19" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap19" value="yanlis">1  </li>' +
        '               <li><input type="radio" name="cevap19" value="dogru"> 2  </li>' +
        '               <li><input type="radio" name="cevap19" value="yanlis">3  </li>' +
        '               <li><input type="radio" name="cevap19" value="yanlis">5 </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s20">' +
        '   <div class="ust">' +
        '       <p> Üç kedi, üç fareyi üç dakikada yakalarsa dokuz kedi, dokuz fareyi kaç dakikada yakalar? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form20" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap20" value="yanlis">9  </li>' +
        '               <li><input type="radio" name="cevap20" value="yanlis"> 6  </li>' +
        '               <li><input type="radio" name="cevap20" value="dogru">3  </li>' +
        '               <li><input type="radio" name="cevap20" value="yanlis">1 </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s21">' +
        '   <div class="ust">' +
        '       <p> B – İ – Ü – D – ? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form21" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap21" value="dogru">B</li>' +
        '               <li><input type="radio" name="cevap21" value="yanlis">A</li>' +
        '               <li><input type="radio" name="cevap21" value="yanlis">S</li>' +
        '               <li><input type="radio" name="cevap21" value="yanlis">R</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s22">' +
        '   <div class="ust">' +
        '       <p> Dört adet 1 kullanılarak yazılabilecek en büyük sayı hangisidir? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form22" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap22" value="dogru">11<sup>11</sup> </li>' +
        '               <li><input type="radio" name="cevap22" value="yanlis">1111  </li>' +
        '               <li><input type="radio" name="cevap22" value="yanlis">1 <sup>111</sup> </li>' +
        '               <li><input type="radio" name="cevap22" value="yanlis"> 111<sup>1</sup> </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s23">' +
        '   <div class="ust">' +
        '       <p> Şıklardaki ölçü birimlerinden hangisi farklıdır? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form23" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap23" value="yanlis">Sene  </li>' +
        '               <li><input type="radio" name="cevap23" value="yanlis">Işık yılı </li>' +
        '               <li><input type="radio" name="cevap23" value="dogru">Metre </li>' +
        '               <li><input type="radio" name="cevap23" value="yanlis"> Deniz Mili </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s24">' +
        '   <div class="ust">' +
        '       <p> Faruk\'un babasının 5 oğlu var. 4\'ünün isimleri sırasıyla Fefe, Fifi, Föfö, Fufu ise 5.çocuğun adı nedir? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form24" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap24" value="yanlis">Füfü</li>' +
        '               <li><input type="radio" name="cevap24" value="yanlis">Fofo</li>' +
        '               <li><input type="radio" name="cevap24" value="yanlis">Fafa</li>' +
        '               <li><input type="radio" name="cevap24" value="dogru">Faruk</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s25">' +
        '   <div class="ust">' +
        '       <p> Musa gemisine her hayvandan kaçar adet aldı?</p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form25" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap25" value="yanlis">1</li>' +
        '               <li><input type="radio" name="cevap25" value="yanlis">10</li>' +
        '               <li><input type="radio" name="cevap25" value="yanlis">2</li>' +
        '               <li><input type="radio" name="cevap25" value="dogru">0 </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s26">' +
        '   <div class="ust">' +
        '       <p> Dört elmam vardı ikisini aldım. Kaç elmam var?</p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form26" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap26" value="yanlis">1    </li>' +
        '               <li><input type="radio" name="cevap26" value="dogru">2 </li>' +
        '               <li><input type="radio" name="cevap26" value="yanlis">3 </li>' +
        '               <li><input type="radio" name="cevap26" value="yanlis"> 4 </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s27">' +
        '   <div class="ust">' +
        '       <p> Gece saat 8\'de yatıyorum ve yatarken guguklu saatimi sabah 9\'a kuruyorum kaç saat uyurum ?</p>' +
        '   </div>'+
        '   <div class="alt">' +
        '       <form id="form27" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap27" value="dogru">1</li>' +
        '               <li><input type="radio" name="cevap27" value="yanlis">2</li>' +
        '               <li><input type="radio" name="cevap27" value="yanlis">3</li>' +
        '               <li><input type="radio" name="cevap27" value="yanlis">4</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s28">' +
        '   <div class="ust">' +
        '       <p> Aşağıdaki çiçeklerden hangisi diğerlerinden farklıdır?</p>' +
        '   </div>'+
        '   <div class="alt">' +
        '       <form id="form28" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap28" value="yanlis">Açelya</li>' +
        '               <li><input type="radio" name="cevap28" value="yanlis">Akasya</li>' +
        '               <li><input type="radio" name="cevap28" value="yanlis">Azelya</li>' +
        '               <li><input type="radio" name="cevap28" value="dogru">Adaçayı</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s29">' +
        '   <div class="ust">' +
        '       <p> Saat kulesindeki çanların çalışı saat 7 de 7 saniye sürüyor. Saat 11 de ne kadar sürer?   </p>' +
        '   </div>'+
        '   <div class="alt">' +
        '       <form id="form29" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap29" value="yanlis">4</li>' +
        '               <li><input type="radio" name="cevap29" value="yanlis">7</li>' +
        '               <li><input type="radio" name="cevap29" value="yanlis">9</li>' +
        '               <li><input type="radio" name="cevap29" value="dogru">11</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s30">' +
        '   <div class="ust">' +
        '       <p> A - C - G - N   harf dizisinde hangi harf diğerlerinden farklıdır?   </p>' +
        '   </div>'+
        '   <div class="alt">' +
        '       <form id="form30" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap30" value="dogru">A  </li>' +
        '               <li><input type="radio" name="cevap30" value="yanlis">C   </li>' +
        '               <li><input type="radio" name="cevap30" value="yanlis">G  </li>' +
        '               <li><input type="radio" name="cevap30" value="yanlis"> N </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s31">' +
        '   <div class="ust">' +
        '       <p> 2-5x4+7 kaç eder?   </p>' +
        '   </div>'+
        '   <div class="alt">' +
        '       <form id="form31" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap31" value="dogru">-11    </li>' +
        '               <li><input type="radio" name="cevap31" value="yanlis">-5   </li>' +
        '               <li><input type="radio" name="cevap31" value="yanlis">13   </li>' +
        '               <li><input type="radio" name="cevap31" value="yanlis"> 25 </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s32">' +
        '   <div class="ust">' +
        '       <p> Bir tepede 2 tane kızıl derili var biri diğerinin oğlunun babasıdır bunların akrabalık derecesi nedir?   </p>' +
        '   </div>'+
        '   <div class="alt">' +
        '       <form id="form32" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap32" value="yanlis">Amca, Dayı </li>' +
        '               <li><input type="radio" name="cevap32" value="yanlis">Hala, Teyze  </li>' +
        '               <li><input type="radio" name="cevap32" value="dogru">Karı, Koca</li>' +
        '               <li><input type="radio" name="cevap32" value="yanlis">Baba, Çocuk</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s33">' +
        '   <div class="ust">' +
        '       <p> 8 kişilik yarıştaki son kişiyi sollarsanız kaçıncı olursunuz?</p>' +
        '   </div>'+
        '   <div class="alt">' +
        '       <form id="form33" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap33" value="yanlis">Sondan Bir Önceki </li>' +
        '               <li><input type="radio" name="cevap33" value="yanlis">Sonuncu </li>' +
        '               <li><input type="radio" name="cevap33" value="dogru">Birinci</li>' +
        '               <li><input type="radio" name="cevap33" value="yanlis">Yedinci</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s34">' +
        '   <div class="ust">' +
        '       <p> Masada 1 bardak su ve 1 bardak süt var 1 çay kaşığı ile, süt bardağından 1 kaşık süt alıp su bardağına döküyoruz Sonra da su bardağından 1 kaşık su alıp süt bardağına döküyoruz Son durumda, sütün içindeki su mu daha fazladır, yoksa suyun içindeki süt mü? </p>' +
        '   </div>'+
        '   <div class="alt">' +
        '       <form id="form34" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap34" value="dogru">Suyun içindeki süt  </li>' +
        '               <li><input type="radio" name="cevap34" value="yanlis">Sütün içindeki su  </li>' +
        '               <li><input type="radio" name="cevap34" value="yanlis">Her ikisi de doğru </li>' +
        '               <li><input type="radio" name="cevap34" value="yanlis"> Her ikisi de yanlış</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s35">' +
        '   <div class="ust">' +
        '       <p> Bir  çocuk eşit adımlarla ilk önce 19 adım ileri daha sonra 21 adım geriye  yürümektedir.Bu şekilde toplam 380 adım atarsa bulunduğu noktadan kaç  adım uzaklaşır?  </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form35" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap35" value="dogru"> 0 adım </li>' +
        '               <li><input type="radio" name="cevap35" value="yanlis">3 adım </li>' +
        '               <li><input type="radio" name="cevap35" value="yanlis">320 adım </li>' +
        '               <li><input type="radio" name="cevap35" value="yanlis"> 21 adım </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s36">' +
        '   <div class="ust">' +
        '       <p> Bir sınıftaki öğrenciler; üçer üçer gruplandırılırsa 1 öğrenci,  dörder dörder gruplandırılırsa 2 öğrenci, beşer beşer gruplandırılırsa 3  öğrenci altışar altışar gruplandırılırsa 4 öğrenci dışarıda kalıyor.Buna göre bu sınıfta kaç tane öğrenci vardır? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form36" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap36" value="yanlis"> 60 </li>' +
        '               <li><input type="radio" name="cevap36" value="dogru">58 </li>' +
        '               <li><input type="radio" name="cevap36" value="yanlis">56 </li>' +
        '               <li><input type="radio" name="cevap36" value="yanlis"> 54 </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s37">' +
        '   <div class="ust">' +
        '       <p> Necmi\'nin doğum gününden üç gün sonrası olan cuma günü Cem\'in  evlilik yıldönümüdür. Necmi\'nin doğum günüyse sekizinci günden altı gün  sonrasıdır. Yarın dördüncü günse dün hangi gündür?</p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form37" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap37" value="yanlis">Salı </li>' +
        '               <li><input type="radio" name="cevap37" value="yanlis">Cumartesi  </li>' +
        '               <li><input type="radio" name="cevap37" value="yanlis">Çarşamba       </li>' +
        '               <li><input type="radio" name="cevap37" value="dogru">   Perşembe  </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s38">' +
        '   <div class="ust">' +
        '       <p> Elimdeki çiçeklerin ikisi hariç hepsi papatya, ikisi hariç hepsi gül ve ikisi hariç hepsi karanfil olduğuna göre elimde   kaç tane çiçek bulunmaktadır? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form38" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap38" value="dogru"> 3 </li>' +
        '               <li><input type="radio" name="cevap38" value="yanlis"> 4  </li>' +
        '               <li><input type="radio" name="cevap38" value="yanlis">  5   </li>' +
        '               <li><input type="radio" name="cevap38" value="yanlis"> 6  </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s39">' +
        '   <div class="ust">' +
        '       <p> 2 doğru parçası ile bir simiti kac parçaya bölebilirsiniz? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form39" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap39" value="yanlis"> 3 </li>' +
        '               <li><input type="radio" name="cevap39" value="yanlis"> 4  </li>' +
        '               <li><input type="radio" name="cevap39" value="dogru">  5   </li>' +
        '               <li><input type="radio" name="cevap39" value="yanlis"> 6  </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s40">' +
        '   <div class="ust">' +
        '       <p> Cep telefonumda mesaj yazarken "3" tuşuna basarsam önce D yi, sonra E yi, sonra da F yi seçmiş olurum. DEDE yazabilmek için "3"tuşuna kaç defa basmam gerekir.</p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form40" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap40" value="yanlis"> 3 </li>' +
        '               <li><input type="radio" name="cevap40" value="dogru"> 6  </li>' +
        '               <li><input type="radio" name="cevap40" value="yanlis">  9   </li>' +
        '               <li><input type="radio" name="cevap40" value="yanlis"> 12  </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s41">' +
        '   <div class="ust">' +
        '       <p> Her saatte 20 dakika geri kalan bir saatim var. Saatim şu an 4.00 ü  gösteriyor. Saatimi tam gece yarısı ayarlamıştım ve saatimin tam 4 saat  önce durduğunu biliyorum. O halde şimdi saat tam kaçtır. </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form41" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap41" value="yanlis"> 22:00 </li>' +
        '               <li><input type="radio" name="cevap41" value="dogru"> 10:00 </li>' +
        '               <li><input type="radio" name="cevap41" value="yanlis">  13:00  </li>' +
        '               <li><input type="radio" name="cevap41" value="yanlis"> 00.00 </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s42">' +
        '   <div class="ust">' +
        '       <p> Ali\'nin 3 çocuğu var.Birincisi benim yaşımın ilk rakamı yasındadır.İkincisi  benim yaşımın ikinci rakamı yasındadır. Üçüncüsü bu iki rakamın toplamı  yaşındadır. Hiçbirinin yaşı aynı olmadığına göre ve hepimizin yaşları  toplamı 45 ise benim yaşım kaçtır? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form42" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap42" value="dogru"> 27  </li>' +
        '               <li><input type="radio" name="cevap42" value="yanlis"> 33  </li>' +
        '               <li><input type="radio" name="cevap42" value="yanlis">  45   </li>' +
        '               <li><input type="radio" name="cevap42" value="yanlis"> 28  </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s43">' +
        '   <div class="ust">' +
        '       <p><b>7 - 5 - 31 - 63 - 126 - 255</b> <br> Yukarıdaki sayı dizisini bozan sayı hangisidir? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form43" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap43" value="dogru"> 126   </li>' +
        '               <li><input type="radio" name="cevap43" value="yanlis"> 63  </li>' +
        '               <li><input type="radio" name="cevap43" value="yanlis">  31  </li>' +
        '               <li><input type="radio" name="cevap43" value="yanlis"> 15  </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s44">' +
        '   <div class="ust">' +
        '       <p class="soru-img"><img src="img/sorular/44.jpg" alt=""></p><p><br>Yukarıda gördüğünüz sayıların toplamı kaçtır?  </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form44" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap44" value="yanlis"> 33  </li>' +
        '               <li><input type="radio" name="cevap44" value="yanlis"> 26  </li>' +
        '               <li><input type="radio" name="cevap44" value="dogru">  30  </li>' +
        '               <li><input type="radio" name="cevap44" value="yanlis"> 18  </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s45">' +
        '   <div class="ust">' +
        '       <p> Aşağıdaki fiillerden hangisi diğerlerinden farklıdır? <br> GÜLMEK, KOŞMAK, YÜRÜMEK, ISLANMAK </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form45" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap45" value="yanlis"> GÜLMEK   </li>' +
        '               <li><input type="radio" name="cevap45" value="yanlis"> KOŞMAK  </li>' +
        '               <li><input type="radio" name="cevap45" value="yanlis">  YÜRÜMEK  </li>' +
        '               <li><input type="radio" name="cevap45" value="dogru"> ISLANMAK  </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s46">' +
        '   <div class="ust">' +
        '       <p> Eğer bir çitte, bir metrede bir direk varsa ve çit 25 metre uzunluğundaysa, toplam kaç direk vardır?  </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form46" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap46" value="yanlis"> 15   </li>' +
        '               <li><input type="radio" name="cevap46" value="yanlis"> 16  </li>' +
        '               <li><input type="radio" name="cevap46" value="yanlis">  25  </li>' +
        '               <li><input type="radio" name="cevap46" value="dogru"> 26  </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s47">' +
        '   <div class="ust">' +
        '       <p> DENİZ-BOĞAZ kelimeleri arasındaki ilişki aşağıdaki kelimelerden hangisinde vardır?  </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form47" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap47" value="yanlis"> PINAR-MUSLUK   </li>' +
        '               <li><input type="radio" name="cevap47" value="dogru"> DAĞ-GEÇİT  </li>' +
        '               <li><input type="radio" name="cevap47" value="yanlis">  IRMAK-YATAK  </li>' +
        '               <li><input type="radio" name="cevap47" value="yanlis"> DENİZ-KIYI  </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s48">' +
        '   <div class="ust">' +
        '       <p>Çarpımları tek basamaklı, toplamları ise iki basamaklı olan iki doğal sayı hangisidir? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form48" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap48" value="yanlis"> 1-3   </li>' +
        '               <li><input type="radio" name="cevap48" value="yanlis"> 5-6  </li>' +
        '               <li><input type="radio" name="cevap48" value="dogru">  9-1  </li>' +
        '               <li><input type="radio" name="cevap48" value="yanlis"> 10-5    </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s49">' +
        '   <div class="ust">' +
        '       <p>Saat 15.30 iken akreple yelkovan arasındaki açı kaç derecedir?</p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form49" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap49" value="yanlis"> 15  </li>' +
        '               <li><input type="radio" name="cevap49" value="dogru"> 75 </li>' +
        '               <li><input type="radio" name="cevap49" value="yanlis">  90 </li>' +
        '               <li><input type="radio" name="cevap49" value="yanlis"> 120   </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s50">' +
        '   <div class="ust">' +
        '       <p> Dört adet 2 kullanılarak yazılabilecek en büyük sayı hangisidir? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form50" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap50" value="yanlış">2222</sup>  </li>' +
        '               <li><input type="radio" name="cevap50" value="yanlis"> 222<sup>2</sup> </li>' +
        '               <li><input type="radio" name="cevap50" value="dogru"> 22<sup>22</sup> </li>' +
        '               <li><input type="radio" name="cevap50" value="yanlis"> 2<sup>222</sup> </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s51">' +
        '   <div class="ust">' +
        '       <p>Bir çemberin üstünde sıralanan çocuklardan beşincisi ile ondokuzuncusu tam karşı karşıya denk gelmiştir. Bu çemberde toplam kaç çocuk sıralanmıştır?</p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form51" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap51" value="yanlis">20 </li>' +
        '               <li><input type="radio" name="cevap51" value="yanlis">23</li>' +
        '               <li><input type="radio" name="cevap51" value="yanlis"> 19 </li>' +
        '               <li><input type="radio" name="cevap51" value="dogru"> 24   </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s52">' +
        '   <div class="ust">' +
        '       <p> "Orta Asyanın bozkır şehirlerinden birinde yaşamanın sevincini duyuyordu içinde." cümlesinde bir ilimizin adı gizlidir? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form52" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap52" value="yanlis"> Adıyaman  </li>' +
        '               <li><input type="radio" name="cevap52" value="yanlis"> Bursa </li>' +
        '               <li><input type="radio" name="cevap52" value="dogru">  Kırşehir </li>' +
        '               <li><input type="radio" name="cevap52" value="yanlis"> Muş   </li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s53">' +
        '   <div class="ust">' +
        '       <p>Dörtnala giden ve dört nalından biri altın olan altı altın nallı atın kaç nalı altındır?</p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form53" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap53" value="yanlis">4</li>' +
        '               <li><input type="radio" name="cevap53" value="yanlis">24</li>' +
        '               <li><input type="radio" name="cevap53" value="dogru">6</li>' +
        '               <li><input type="radio" name="cevap53" value="yanlis"> 12</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>',
        '<div class="soru" id="s54">' +
        '   <div class="ust">' +
        '       <p>Dün yarın olsaydı bugün günlerden perşembe olurdu diyen adam bunu hangi gün söylemiştir? </p>' +
        '   </div>' +
        '   <div class="alt">' +
        '       <form id="form54" method="post">' +
        '           <ul>' +
        '               <li><input type="radio" name="cevap54" value="yanlis">Çarşamba</li>' +
        '               <li><input type="radio" name="cevap54" value="yanlis">Perşembe</li>' +
        '               <li><input type="radio" name="cevap54" value="dogru">Cumartesi</li>' +
        '               <li><input type="radio" name="cevap54" value="yanlis"> Cuma</li>' +
        '           </ul>' +
        '           <input type="submit" value="CEVAPLA">' +
        '       </form>' +
        '   </div>' +
        '</div>'];






    var sayilar = new Array();

    for (var i = 0; i < 15; i++) {
        var randomnumber = Math.floor(Math.random() * 50);
        if (sayilar.indexOf(randomnumber)==-1) {

            sayilar.push(randomnumber);
            $(".sorular").append(sorular[randomnumber]);
        }
        else { //varsa i'yi 1 düşürüp başa döndüp yine rakam üretiyorum.. böylece aynı rakam gelse bile başa dönüp yine rakam üretecek!
            i--;
        }

    }

    $("form ul li").click(function(){
        $hclass= $(this).hasClass('active');
        if(!$hclass){
            $(".soru ul li").removeClass('active');
            $(this).addClass('active');
        }else{
            $(".soru ul li").removeClass('active');
        }
    });

    $(".sorular .soru:nth-child(1)").css('display','block');

});


$dogrusay = 0;
$soruSay = 1;
function inputClick() {
    $("input[type='submit']").click(function(){
        $soruSay++;
        $form = $(this).parent('form').attr('id');
        $val =$("#"+$form+" input:checked").val();
        console.log($val);
        if($val == "dogru"){
            //alert("doğru");
            $dogrusay++;
        }else if($val == null){
            alert("Lütfen seçeneklerden birini işaretleyiniz.");
            $soruSay--;
        }
        $(".sorular").children().hide();
        $(".sorular .soru:nth-child("+$soruSay+")").css('display','block');
        if($soruSay > 15){
            $('.sorular').hide();
            $('.footer').show();
            if($dogrusay <= 3){
                $(".footer h1 .sonuc").append("ORTALAMANIN ALTI <br>70 - 84");
            }
            else if($dogrusay <=7){
                $(".footer h1 .sonuc").append("ORTALAMA<br>85 - 114");
            }
            else if($dogrusay <=11){
                $(".footer h1 .sonuc").append("ORTALAMANIN ÜSTÜ<br>115 - 129");
            }
            else{
                $(".footer h1 .sonuc").append("DAHİ<br>130 - 144");
            }

        }
        $val=null;$form=null;
        event.preventDefault();
    });
}
