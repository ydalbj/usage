function ajax(url, cateId, callback)         {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET",url,false);
    xmlhttp.send();
    var text=xmlhttp.responseText.trim();
    var data = JSON.parse(text);
    if (data.content.data) {
        if (data.content.data.list.length > 0) {
            var str = cateId+',';
            for (var i = 0; i < data.content.data.list.length; i++) {
                if (i<data.content.data.list.length - 1) {
                    str = str + data.content.data.list[i]['name'] + '|';
                }else {
                    str = str + data.content.data.list[i]['name'];
                };
            };
            console.log(str);
        };
    };
}


var catelist = [1622,1623,1624,1629,162103,162104];
for (var i=0;i<catelist.length;i++)
{
    var url='https://sycm.taobao.com/mq/brandDetail/getNinetyDaysAmt.json?brandId=107380&cateId='+catelist[i]+'&dateRange=2018-12-20%7C2018-12-20&dateType=recent1&device=0&seller=-1&token=b1448ef29&_=1545382235942';
    ajax(url,catelist[i]);
}
