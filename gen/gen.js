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

window.onload=function(){
	document.getElementById('btn').addEventListener('click',function(){
		document.getElementById('result').innerHTML=getRandomHashtags();
	})
}
