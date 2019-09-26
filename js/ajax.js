 $(function() {
            $(".nav2").on("click", "span", function() {
                var sId = $(this).attr("title"); //获取data-id的值
               alert(sId)
               window.location.hash = sId; //设置锚点
                loadInner(sId);
            });
 
            function loadInner(sId) {
                var sId = window.location.hash;
                var pathn, i;
                switch(sId) {
                    case "1":
                        pathn = "chanpingjiesao.html";
                        i = 0;
                        break;　　　　　　　
                    case "2":
                        pathn = "user_account.html";
                        i = 1;
                        break;
                    case "3":
                        pathn = "user_trade.html";
                        i = 2;
                        break;
                    case "4":
                        pathn = "user_info.html";
                        i = 3;
                        break;　　　　　　
//                  default:
//                      pathn = "chanpingjiesao.html";
//                      i = 0;
//                      break;
                }
                $("#xiyijixq-neiron").load(pathn); //加载相对应的内容
                $(".nav2 span").eq(i).addClass("current").siblings().removeClass("current"); //当前列表高亮
            }
            var sId = window.location.hash;
            loadInner(sId);
        });