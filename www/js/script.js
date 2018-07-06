// This is a JavaScript file
       var apikey="55cbf24145fecb90e4af8644460ef3ad4e46af0d21aa77e672eb4b5918702091";
       var clientkey="f39aaf8226e7e5e2c644ade99f4161adb3960fe46e6bf86448a004d123adf13f";
       var ncmb = new NCMB(apikey,clientkey);
       
      function oncall(ele){
        var questionone,questiontwo,questionthree,questionfour,questionfive,questionsix,questionseven;
        var id=ele.id;
        var value=ele.value;
        console.log(id);
        console.log(value);
        if(id=="questionone"){
          questionone=value;
          sessionStorage.setItem("questionone",questionone);
        }else{
          if(id=="questiontwo"){
            questiontwo=value;
            sessionStorage.setItem("questiontwo",questiontwo);
        }else{
           if(id=="questionthree"){
            questionthree=value;
            sessionStorage.setItem("questionthree",questionthree);
        }else{
           if(id=="questionfour"){
            questionfour=value;
            sessionStorage.setItem("questionfour",questionfour);
        }else{
           if(id=="questionfive"){
            questionfive=value;
            sessionStorage.setItem("questionfive",questionfive);
        }else{
           if(id=="questionsix"){
            questionsix=value;
           sessionStorage.setItem("questionsix",questionsix);
        }else{
          questionseven=value;
          sessionStorage.setItem("questionseven",questionseven);
        }
        }
        }
        }
        }
        } 
       }
       
       //[「結果を見るボタン」をクリックするとsend()
       function dojob(){
         var one=sessionStorage.getItem("questionone");
        var two=sessionStorage.getItem("questiontwo");
        var three=sessionStorage.getItem("questionthree");
        var four=sessionStorage.getItem("questionfour");
        var five=sessionStorage.getItem("questionfive");
        var six=sessionStorage.getItem("questionsix");
        var seven=sessionStorage.getItem("questionseven");
        var resu=[one,two,three,four,five,six,seven];
       console.log(resu);
       
           var nekoneko = ncmb.DataStore("nekoneko");
            nekoneko.fetchAll()
            .then(function(results){
            for (var i=0; i<results.length;i++) {
                 var object = results[i];
              console.log(object.name);
              var rone=object.get("questionone");
              var rtwo=object.get("questiontwo");
              var rthree=object.get("questionthree");
              var rfour=object.get("questionfour");
              var rfive=object.get("questionfive");
              var rsix=object.get("questionsix");
              var rseven=object.get("questionseven");
              var ressheet=[rone,rtwo,rthree,rfour,rfive,rsix,rseven];
             console.log(ressheet);

              var count=[0,0,0,0,0,0,0];
             var j=0;
              while(j<7){
                 if(resu[j] ==ressheet[j]){
                  count[i]++;
                  j++;
                }else{
                  j++;
                }
              }
               console.log(i+"の値は"+count[i]);
                if(i==0){
                sessionStorage.setItem("トラ柄",count[0]);
              }
                 if(i==1){
                sessionStorage.setItem("黒",count[1]);
              }
                if(i==2){
                sessionStorage.setItem("白",count[2]);
              }
                 if(i==3){
                sessionStorage.setItem("三毛",count[3]);
              }
                if(i==4){
               sessionStorage.setItem("グレー",count[4]);
              }
               if(i==5){
                sessionStorage.setItem("白黒",count[5]);
              }
              if(i==6){
                 sessionStorage.setItem("その他",count[6]);
              }
              count[0]=sessionStorage.getItem("トラ柄");
              count[1]=sessionStorage.getItem("黒");
              count[2]=sessionStorage.getItem("白");
              count[3]=sessionStorage.getItem("三毛");
               count[4]=sessionStorage.getItem("グレー");
               count[5]=sessionStorage.getItem("白黒");
               count[6]=sessionStorage.getItem("その他");
                console.log(count);
              }
             })
         .catch(function(err){
            console.log(err);
          });
          
          count.sort(sortNumber);

            var UserTable=ncmb.DataStore("UserTable");
             var user=new UserTable();
            user.set("questionone",one)
                 .set("questiontwo",two)
                 .set("questionthree",three)
                 .set("questionfour",four)
                 .set("questionfive",five)
                 .set("questionsix",six)
                 .set("questionseven",seven)
                 .set("keka",keka)
                 .save()
                 .then(function(user){
                 })
                 .catch(function(err){
                 });
          }