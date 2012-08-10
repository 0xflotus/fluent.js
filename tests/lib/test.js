var obj = [];
var asts = {
  'path1': "import('path3') <foo 'value'>",
  'path2': "",
  'path3': "<foo2 'value'>"
}

var ctx = L20n.getContext();

ctx.addResource('/l20n/l20n.js/tests/lib/data/example1.lol')

ctx.addResource('/l20n/l20n.js/tests/lib/data/example2.lol')

//ctx.__addResourceAST('path1')

ctx.onReady = function() {
  console.log('-- ready!')
  console.log(ctx.getAST());
  console.log(ctx.get('foo'))
  console.log(ctx.get('foo2'))
  console.log(ctx.get('foo3'))
}

//console.log('01 Firefox', obj['brandName1'].get(obj));
