function sleep(ms) {
  return new Promise(resolve =>
    setTimeout(resolve, ms)
  )
};

let baozhangTool={
  setYingyinzhangshu(value){
    $("#query-form>.row:nth-child(1)>div:nth-child(12) .k-formatted-value.k-input").val(value).trigger('input').trigger('blur');
  },
  async setYewuchangjing(value){
    $("#query-form>.row:nth-child(1)>div:nth-child(13) .k-select").click();
    await sleep(100);
    // $(".col-sm-9.k-lov-input input[name='typeName']").bind('input',function(e){console.log('输入',e)})
    // $(".col-sm-9.k-lov-input input[name='typeName']").bind('blur',function(e){console.log('失去焦点',e)})
    $(".col-sm-9.k-lov-input input[name='typeName']").val(value).trigger('input').trigger('blur');
    await sleep(50);
    $('.col-sm-3 .btn.btn-primary.k-btn-query.btn-sm').click()
    await sleep(500);
    $('.k-grid-content tr:nth-child(1)').dblclick()
  },
  setYusuanriqi(value){
    $("#claimDate").val(value).trigger('input').trigger('blur');
  },
  setZhaiyao(value){
    $("#summaryDesc").val(value).trigger('input').trigger('blur');
  },
  setBeizhu(value){
    $("#description").val(value).trigger('input').trigger('blur');
  },
  async setZhifuXinxi(){
  
  },
  async setFeiyongmingxi(json){
    $('#cmfClmClaimNpcexpLineList_create').click()
    
    //1 供应商
    $('#cmfClmClaimNpcexpLineList .k-grid-content table td:nth-child(3)').click();
    $('#cmfClmClaimNpcexpLineList .k-grid-content table td:nth-child(3) .k-select').click()
    await sleep(10000);
    $(".panel-body input[name='objectName']").val('李金锋').trigger('input').trigger('blur');
    $('.col-sm-3 .btn.btn-primary.k-btn-query.btn-sm').click()
    await sleep(5000);
    $('.k-grid-content tr:nth-child(1)').dblclick()
    
    //2 业务大类
    $('#cmfClmClaimNpcexpLineList .k-grid-content table td:nth-child(6)').click();
    $('#cmfClmClaimNpcexpLineList .k-grid-content table td:nth-child(6) .k-select').click()
    await sleep(1000);
    $(".panel-body input[name='className']").val('通用日常管理支出').trigger('input').trigger('blur');
    $('.col-sm-3 .btn.btn-primary.k-btn-query.btn-sm').click()
    await sleep(1000);
    $('.k-grid-content tr:nth-child(1)').dblclick()
  
    //2 业务小类
    $('#cmfClmClaimNpcexpLineList .k-grid-content table td:nth-child(7)').click();
    $('#cmfClmClaimNpcexpLineList .k-grid-content table td:nth-child(7) .k-select').click()
    await sleep(1000);
    $(".panel-body input[name='className']").val('车辆运行').trigger('input').trigger('blur');
    $('.col-sm-3 .btn.btn-primary.k-btn-query.btn-sm').click()
    await sleep(1000);
    $('.k-grid-content tr:nth-child(1)').dblclick()
  
    //3 业务活动
    $('#cmfClmClaimNpcexpLineList .k-grid-content table td:nth-child(8)').click();
    $('#cmfClmClaimNpcexpLineList .k-grid-content table td:nth-child(8) .k-select').click()
    await sleep(1000);
    $(".panel-body input[name='activityName']").val('车辆运行费-公共交通-生产部门').trigger('input').trigger('blur');
    $('.col-sm-3 .btn.btn-primary.k-btn-query.btn-sm').click()
    await sleep(1000);
    $('.k-grid-content tr:nth-child(1)').dblclick()
    
    //4 成本中心
    $('#cmfClmClaimNpcexpLineList .k-grid-content table td:nth-child(10)').click();
    $('#cmfClmClaimNpcexpLineList .k-grid-content table td:nth-child(10) .k-select').click()
    await sleep(1000);
    $(".panel-body input[name='costCenterName']").val('开发运营中心（南方）').trigger('input').trigger('blur');
    $('.col-sm-3 .btn.btn-primary.k-btn-query.btn-sm').click()
    await sleep(1000);
    $('.k-grid-content tr:nth-child(1)').dblclick();
  
    //5 是否可抵扣
    // $('#cmfClmClaimNpcexpLineList .k-grid-content table td:nth-child(11)').click();
    // $('#cmfClmClaimNpcexpLineList .k-grid-content table td:nth-child(11) .k-select').click();
    
    //6报账金额
    $('#cmfClmClaimNpcexpLineList .k-grid-content table td:nth-child(12)').click();
    $('#cmfClmClaimNpcexpLineList .k-grid-content table td:nth-child(12) input').val('27800').trigger('input').trigger('blur');
    
    //7 摘要
    $('#cmfClmClaimNpcexpLineList .k-grid-content table td:nth-child(26)').click();
    $('#cmfClmClaimNpcexpLineList .k-grid-content table td:nth-child(26) input').val('报开发运营中心（南方）第三季度公务交通费').trigger('input').trigger('blur');
  },
  async setZhifumingxi(json){//cmfClmClaimRemPaymentLineList
    $('#cmfClmClaimRemPaymentLineList_create').click();
    //1 供应商
    $('#cmfClmClaimRemPaymentLineList .k-grid-content table td:nth-child(3)').click();
    $('#cmfClmClaimRemPaymentLineList .k-grid-content table td:nth-child(3) .k-select').click()
    // await sleep(1000);
    // $(".panel-body input[name='objectName']").val('李金锋').trigger('input').trigger('blur');
    // $('.col-sm-3 .btn.btn-primary.k-btn-query.btn-sm').click()
    await sleep(1000);
    $('.k-grid-content tr:nth-child(1)').dblclick()
  
    //2 业务大类
    $('#cmfClmClaimRemPaymentLineList .k-grid-content table td:nth-child(5)').click();
    $('#cmfClmClaimRemPaymentLineList .k-grid-content table td:nth-child(5) .k-select').click()
    // await sleep(1000);
    // $(".panel-body input[name='className']").val('通用日常管理支出').trigger('input').trigger('blur');
    // $('.col-sm-3 .btn.btn-primary.k-btn-query.btn-sm').click()
    await sleep(1000);
    $('.k-grid-content tr:nth-child(1)').dblclick()
  
    //2 收款对象
    // $('#cmfClmClaimRemPaymentLineList .k-grid-content table td:nth-child(6)').click();
    // $('#cmfClmClaimRemPaymentLineList .k-grid-content table td:nth-child(6) .k-select').click()
    // await sleep(1000);
    // $(".panel-body input[name='className']").val('通用日常管理支出').trigger('input').trigger('blur');
    // $('.col-sm-3 .btn.btn-primary.k-btn-query.btn-sm').click()
    // await sleep(1000);
    // $('.k-grid-content tr:nth-child(1)').dblclick()
  
    //2 收款账户
    $('#cmfClmClaimRemPaymentLineList .k-grid-content table td:nth-child(7)').click();
    $('#cmfClmClaimRemPaymentLineList .k-grid-content table td:nth-child(7) .k-select').click()
    // await sleep(1000);
    // $(".panel-body input[name='className']").val('通用日常管理支出').trigger('input').trigger('blur');
    // $('.col-sm-3 .btn.btn-primary.k-btn-query.btn-sm').click()
    await sleep(1000);
    $('.k-grid-content tr:nth-child(1)').dblclick()
    
    //4 报账金额
    $('#cmfClmClaimRemPaymentLineList .k-grid-content table td:nth-child(9)').click();
    $('#cmfClmClaimRemPaymentLineList .k-grid-content table td:nth-child(9) input').val('27800').trigger('input').trigger('blur');
  
  }
}

window.baozhangTool = baozhangTool;