module.exports = {
    options:{
        url:'http://epub.cnki.net/kns/brief/brief.aspx?curpage=2&RecordsPerPage=50&QueryID=11&ID=&turnpage=1&tpagemode=L&dbPrefix=SCDB&Fields=&DisplayMode=listmode&PageName=ASP.brief_result_aspx#J_ORDER',
        method: 'GET',
        charset: "utf-8",
        headers: {
            "Host": 'epub.cnki.net',
            "User-Agent": " Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.59 Safari/537.36",
            "cookie": 'ASP.NET_SessionId=5aqj1k2glumlcv55n30vy3ro; kc_cnki_net_uid=5460266b-635a-1f58-b784-0b69c140a3cf; SID_grid=120114; AutoIpLogin=; cnkiUserKey=5a5f0a69-3d93-6aa8-5ee9-04ac40638785; Ecp_session=1; Ecp_ClientId=4160926122202023121; RsPerPage=50; LID=WEEvREcwSlJHSldRa1FhcEE0L01SbTRISEtVMHBqMnpWODFmUWp3V0d4dz0=$9A4hF_YAuvQ5obgVAqNKPCYcEjKensW4ggI8Fm4gTkoUKaID8j8gFw!!'
        }
    },
    fileName:"测试",
    startPage:30,
    endPage:100,
    delay:0,
    asyncLimit:1
}
