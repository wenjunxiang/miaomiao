// This is a JavaScript file

var APIKEY = '55cbf24145fecb90e4af8644460ef3ad4e46af0d21aa77e672eb4b5918702091';
var CLIENTKEY = 'f39aaf8226e7e5e2c644ade99f4161adb3960fe46e6bf86448a004d123adf13f';
 
// データストアを使う準備
var ncmb = new NCMB(APIKEY, CLIENTKEY);
var TestData = ncmb.DataStore('TestData');
 
function addData() {
    var addText = document.getElementById('add').value;
    if(addText != '') {
        var testData = new TestData();
        testData.set('dataName', addText)
        .save()
        .then(function(data) {
            // 保存後の処理
            alert('保存しました。');
         })
         .catch(function(err) {
            // エラー処理
            alert('保存に失敗しました。');
         });
    }
}