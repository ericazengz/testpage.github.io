if (!window.bhAsyncInit) {
    window.bhAsyncInit = [];
}
else if (!Array.isArray(window.bhAsyncInit)) {
    window.bhAsyncInit = [window.bhAsyncInit];
}

window.bhAsyncInit.push(function() {
    window.BH.init({
        debug: false,
        language: "en_US",
        renderImmediately: true,
        pageId: '491227725017609',
        widgets: [{id:'bothub-widget-j7y', type:'MessageUs', color:'blue', size:'large'},{id:'bothub-widget-j82', type:'Customerchat', themeColor:'#FF0055', loggedInGreeting:'', loggedOutGreeting:'', greetingDialogDisplay:'hide', greetingDialogDelay:'0'},{id:'bothub-widget-j88', title:'Get 5% off from your order', subtitle : 'Reveal discount to our Messenger list:', type:'Discount', discountText:'Your discount code:', discountCode : 'GET5', showCodeBtnText : 'Get Discount Now', copyCodeBtnText:'Copy the Code', hideAfterChecked:0, origin:'https://fashion.bothub.ai', discount : '5%', align:'center'},{id:'bothub-widget-j89', type:'SendToMessenger', color:'blue', size:'xlarge', enforceLogin : false, ctaText:''},{id:'bothub-widget-jad', type:'SendToMessenger', color:'blue', size:'large', enforceLogin : false, ctaText:''},{id:'bothub-widget-jhk', type:'Checkbox', size:'standard', centerAlign : false, skin : 'light', hideAfterChecked:0, allowLogin:true, origin:'https://bothub-ai.github.io'},{id:'bothub-widget-jhl', title:'Get 15% off from your order', subtitle : 'Reveal discount to our Messenger list:', type:'Discount', discountText:'Your discount code:', discountCode : 'TEST', showCodeBtnText : 'Get Discount Now', copyCodeBtnText:'Copy the Code', hideAfterChecked:0, origin:'https://bothub-ai.github.io', discount : '15%', align:'center'},{id:'bothub-widget-jhm', type:'SendToMessenger', color:'blue', size:'large', enforceLogin : false, ctaText:''},{id:'bothub-widget-jho', type:'Checkbox', size:'standard', centerAlign : false, skin : 'light', hideAfterChecked:0, allowLogin:true, origin:'https://bothub-ai.github.io'},{id:'bothub-widget-k42', type:'Checkbox', size:'standard', centerAlign : false, skin : 'light', hideAfterChecked:0, allowLogin:true, origin:''}]
    });
});

(function(d){
    var js, id = 'bothub-jssdk'; if (d.getElementById(id)) {return;}
    js = d.createElement('script'); js.id = id;
    js.async = true; js.src = "https://sdk.bothub.ai/dist/sdk-2-latest.js";
    d.getElementsByTagName('head')[0].appendChild(js);
}(document));