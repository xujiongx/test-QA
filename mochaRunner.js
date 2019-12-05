const Mocha=require('mocha')

var mocha = new Mocha({
    reporter: 'mochawesome',
    reporterOptions:{
        reportDir:'./docs/customReportFilename',
        quit:true
    }
  });

mocha.addFile("./tests/service/router.spec.js");
mocha.run(function(){
    process.exit();
})