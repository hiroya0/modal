const open = document.getElementById('openModalBtn');
const myModal = document.getElementById('myModal');
const close = document.getElementById('colseModalBtn');

open.addEventListener('click', function(){
    myModal.style.display = 'block';
});

//#myModal {
//    display: none; /* 最初は隠しておく */
//}

// モーダルを出す流れ

// JavaScriptが myModal というHTML要素を特定します。

// myModal.style を通じて、その要素のCSSスタイルにアクセスします。

// .display を指定することで、CSSの display プロパティをターゲットにします。

// = 'block' とすることで、display プロパティの値を 'block' に「設定」します。




