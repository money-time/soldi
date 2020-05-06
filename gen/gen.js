function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

var loobsize = 5;
var global_tags = {
	biggest:['#Catscatscats','#Cat','#Cat_features','#Cats','#Catsofworld','#Catworld','#Catsgram','#Catsrule','#Catloversclub','#Catgram','#Catsofinstagram','#Cat_of_instagram','#Meow','#Instacat','#Catlife','#Catlover','#Ilovecats','#Catstagram','#Catlove','#Catoftheday','#Cats_of_instagram','#Catscatscats','#Catsoftheworld','#Catsofday','#Catlovers','#Instameow','#Caturday','#Meowstagram','#Catsagram','#Kitty','#Kittycat','#Kittens','#Kittensofinstagram','#Kittenlove','#Catsofinsta','#Kittenlove','#Meowdel','#Kittiesofinstagram','#Funnycat','#Funnycats','#Bestmeow','#Catloversclub','#Instacat_meows','#Catsrule','#Instacat_meows','#Bestmeow','#Meowbox'],
	up_to_million:['#Meowfeature','#Catasticworld','#Cat_delight','#catsogram','#Kittens_today','#Fluffycats','#Themeowlife','#Bestcatsclub','#Kittens_of_instagram','#Catworld','#Beautifulcat','#Catlifestyle','#Meowdel','#Kittenoftheday','#Catsinstagram','#Catoftheworld','#Catworldwide','#Bestcat','#Yourcatphoto','#Cats_of_instworld','#Catsareawesome','#instameow','#Sweetcat','#Catsofday'],
	up_to_250k:['#Bestmeow10k','#Topcatsclub','#Caturdaycuties','#Cats_of_ig','#Cutecats_oftheworld','#Cutecats_oftheworld','#Purrpurrpurr','#Purrfection','#Allcatphotos300','#Instacats_meow'],
	up_to_50k:[]
}

var zerkala_tags = {
	biggest:["#украина","#днепр","#белаяцерковь","#херсон","#харьков","#житомир","#украинакупить","#украинцы","#одесса7км","#мукачево","#жінка","#черкасы","#белгородднестровский","#подол","#украинаобувь","#постельноебельеукраина","#купальникиукраина","#украинасегодня","#сумкиукраина","#вязаниеукраина","#платьяукраина","#мужскаяодеждаукраина","#детскаяобувьукраина","#мамаукраина","#детскаяодеждаукраина","#всяукраина","#маникюрукраина","#сексшопукраина","#одеждаукраина","#работаукраина","#украина🇺🇦","#пижамаукраина","#львов","#вінниця","#чернівці","#запоріжжя","#ужгород","#хмельницкий","#винница","#8березня","#івано_франківськ","#гарнийнастрій","#новаяпочта","#харьковчанки","#коростень","#харьковкупить","#оушенплаза","#instavinnitsa","#upgradekh","#dner","#полтава","#хортица","#харьковский","#киев","#odessafood","#одессамама","#kiev🇺🇦","#dneprgramp","#dneprgramм","#dneprgram👄","#dneprgram👏","#dneprgramл","#dneprgramtanysanjara","#dneprgram8","#dneprgram💕","#dneprgramасумки","#dneprgram1","#dneprgramмаршрутка","#dneprgramy","#dneprgramsз","#dneprgramж","#dneprgramkeygram","#dneprgramс","#dneprgramm","#dneprgrams","#dneprgram◾️▪️⬛️⚪️","#dneprgram✖️","#podol","#одесса","#дніпро","#lviv❤️","#kyivmodel","#kyivcoffeefestival","#kyiv_love","#kyivfood","#kyivstyle","#kyivdennoch","#kyivphotographer","#kyivart","#kyivtattoo","#kyivinsta","#kyivoperativ","#kyivfashion","#dynamokyiv","#kyivstoner","#kyivgroup","#вирусукраина","#подарокукраина","#новапошта","#чернигов","#запорожье","#бердянск","#clothesukraine","#showroomodessa","#madeinodessa","#kievshop","#lvivshop","#купитьукраина","#купитьукраїна","#купитьукрашенияизбисера","#купитьукрашениевмоскве","#купитьукрашениеминск","#купитьукранскийаппаратдлядепиляции","#купитьукраинанедорого","#купитьукрашениячеркассы","#іванофранківськ","#кременчуг","#ирпень","#мелитополь","#бровары","#борщаговка","#поскот","#волинь","#кирилловка","#киевграм","#обувькиев","#работакиев","#одеждакиев","#киевская","#свадьбакиев","#киев💙💛","#дизайнкиев","#сумкикиев","#цветыкиев","#макияжкиев","#киевброви","#киевманикюр","#торткиев","#мебелькиев","#прическикиев","#киеводежда","#татукиев","#маникюркиев","#миколаїв","#odessa⚓️","#topukraine","#bilichgroup","#lvivfood","#lvivtoday","#lvivcars","#lvivlife","#lvivlove","#lvivcroissants","#lviv1256","#weddinglviv","#lvivfashionweek","#mylviv","#киевднеминочью","#kharkivgirl","#ukrainianmodel","#maidannezalezhnosti","#kievpoint","#news_kiev","#kharkovlife","#kyiv🇺🇦","#lvivgirls❤","#kharkov_photo","#lvivukraine","#instakharkov","#ukraine_ph","#lvivlife😎","#lvivlife2019","#lvivlife💜","#lvivlifenosofatravels","#lvi̇vlife","#lvivlife🍁","#lifeinlviv","#lvivmylife","#lvivlife😻","#lvivlifeu","#lvivlifemusic","#mylifeinlviv","#lvivlife8","#lvivlife🍂💋","#lvivlifes","#lvivlife💖","#lvivlife📆🌞","#lvivstateuniversityoflifesafety","#lvivlifemuzic","#lvivlifel","#харьківкиїв","#харьківпрайд","#харьківоперація","#харьківськийрайон","#харьківпрайд2019","#харьківконтурнапластика","#харьківськиймасив","#харьківновини","#харьків❤️","#харьківтурист","#харьківіграшки","#харьківробота","#харьків✌","#харьківськийтеатріменіпушкіна","#харьківчемпіонатукраїни","#харьківськійаероклуб","#харьківмезотерапія","#харьківюнайс","#харьківліпосакція","#харьківчаниприїхали","#харьків","#львів","#zigazaga_shop","#хмельницк","#борисполь","#каменское","#типоверівне","#закарпатье","#умань","#кривойрог","#львовфото","#львовское","#львовафиша","#львові","#львовскаямастерскаяшоколада","#львовская","#львова","#львовскийсырник","#львов2019","#львове","#львов_альтамар","#львовскиймаеток","#львовобувь","#львов2018","#львовский","#львовтату","#львовдевушки","#львовка","#львовскаякофейня","#львов"],
	up_to_million:["#зеркало","#зеркалодлядома","#зеркалосподсветкой","#зеркалосолнце","#зеркалослампами","#зеркалоназаказ","#зеркаловинтерьере","#зеркалолук","#зеркаловраме","#зеркалослампочками","#зеркаловизажиста","#зеркаловбагете","#зеркалокиев","#зеркалоукраина","#зеркалодлямакияжа","#зеркалохарьков","#журнальныйстолик","#виница","#мебелькиев","#дизайнинтерьер","#освещениедома","#будинок","#підсвічник","#затишок","#уютнаяквартира","#дім","#львів","#життя","#щастя","#настрій","#краса","#фотосесія","#інтерєр"],
	up_to_250k:["#dneprgram","#kievblog","#ivanofrankivsk","#khmelnitsky","#подаркиукраина","#zhytomir","#chernigov","#zaporozhye","#dnipro","#zaporizhia","#kharkiv","#poltava","#instakharkiv","#kharkivgram","#kh","#dnepr_town","#kievphoto","#instakiev","#kharkiv_insta","#dneprcity","#dneprblog","#dneprlife","#dnepropetrovsk","#ukrainogram","#uzhgorod","#chernihiv","#zhytomyrgram","#zhytomyr","#kyivphoto","#kyivgirls","#kyivblog","#kyivtoday","#shopukraine","#ukraineshop","#kievlife","#киевфотограф","#odessalife","#odessamama","#odessa_photo","#odessacity","#odessa_ukraine","#odessa_foto","#odessagram","#odessa_instacity","#odessaphotographer","#tattooodessa","#odessatx","#odessa_gram","#odessa_wow","#nailsodessa","#odessablog","#odessaworlds","#odessalove","#odessa_today","#instalviv","#lvivgram","#rivne","#cherkasy","#lvivphotographer","#nailslviv","#manicurelviv","#lvivtopface","#lvivinsta","#lvivnails","#vscolviv","#lvivgroup","#tattoolviv","#kievpics","#visualukraine","#dneprlive","#melitopolgram","#kharkovblog","#kharkovgram","#lvivblog","#lvivfriends","#lvivgirls","#lvivcity","#ukrainestyle","#uzhhorod","#ternopil","#kyivcity","#kievcity","#chernivtsi","#lvivphot"],
	up_to_50k:["#ukraine","#kharkov","#dnepr","#kyiv","#kiev","#odessa","#kievgram","#lviv"]
}



var str_to_prnt = '';

function getRandomItemsStr(arr,number,separator){
	str = '';
	var temp_arr = [];
	for(j=0;j<arr.length;j++){
		temp_arr.push(arr[j]);
	}
	for(var i=0; i<number;i++){
		str+=temp_arr.splice(randomInteger(0,temp_arr.length-1),1);
		str+=separator;
	}
	return str;
}
function getRandomHashtags(){
var caption = 	getRandomItemsStr(global_tags.biggest,5,' ') + 
				getRandomItemsStr(global_tags.up_to_million,5,' ') + 
				getRandomItemsStr(global_tags.up_to_250k,5,' ');
				console.log(caption)
				return caption;
}
function getRandomForMirror(){
var caption = 	getRandomItemsStr(zerkala_tags.biggest,5,' ') +
				getRandomItemsStr(zerkala_tags.up_to_million,10,' ') +
				getRandomItemsStr(zerkala_tags.up_to_250k,5,' ') +
				getRandomItemsStr(zerkala_tags.up_to_50k,3,' ') 
				return caption;
}
// 
