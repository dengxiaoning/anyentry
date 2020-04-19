<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
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
      <a href="{{../dir}}/{{file}}"><img src="{{icon}}"/>{{file}}</a>
    {{/each}}
</body>
</html>
