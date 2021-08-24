<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
     <link rel="shortcut icon" href="src/assets/icons/favicon.ico" />
    <title>{{title}}</title>
    <style>
    body{
      margin:30px;
    }
    a{
      display:block;
      font-size:30px;
    }
    img{
      width:22px;
      height:22px;
      line-height:22px;
      margin-right:6px;
    }
    </style>
</head>
<body>
    {{#each files}}
      <a href="{{../dir}}/{{file}}">
      {{#icon}}
      <img src="{{this}}"/>
      {{/icon}}
      {{file}}</a>
    {{/each}}
	<div>已选目录：<span id="userSeDir">{{selectFileUrl}}</span><div>
	
	<script>
		// 向父vue页面发送信息
        window.parent.postMessage({
            cmd: document.getElementById('userSeDir').innerHTML,
            params: {
              success: true,
              data: document.body.scrollHeight + 'px'
            }
        }, '*');
	</script>
</body>
</html>
