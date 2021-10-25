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
      font-size:18px;
	  color:#ffffff;
	  text-decoration: none;
    }
	a:hover{
		text-decoration: underline;
	}
    img{
      width:18px;
      height:18px;
      line-height:18px;
      margin-right:6px;
    }
	html,body {
		-ms-overflow-style: none;
		overflow: -moz-scrollbars-none;
		color: #fff;
	}
	html::-webkit-scrollbar {
	  width: 0 !important;
	}
	body::-webkit-scrollbar {
	  width: 0 !important;
	}
	pre{
		font-size: 18px;
		color: #fff;
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
	<div style="display: none;">已选目录：<span id="userSeDir">{{selectFileUrl}}</span><div>
	console.log(selectFileUrl)
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
