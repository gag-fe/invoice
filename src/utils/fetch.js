import $ from 'jquery';

const defaultOptions = {
  url: '',
  type: 'POST',
  dataType: 'json',
  async: true,
  data: '',
  xhrFields: {
    withCredentials: true
  },
  crossDomain: true,
  alertError: true,
  isSuccess: (back) => {
    return back.status === 'S';
  },
  isAccessDeny: (back) => {
    back.status==='D' ? window.location.href=window.location.host+'/#/404' : '';
  },
  isLogin: (back) => {
    return back.status === 'NO_LOGIN' || back.status === 'T' || back.status === 'timeout';
  }
}

const goLogin = (parameter) => {
  $.removeCookie('user_data', { path: '/' });
  $.removeCookie('com.gooagoo.passpart.sso.token.name', { path: '/', domain:window.gooagoodomain });
  if( parameter == 'out' ){
      window.location.href = 'https://passport' + window.gooagoodomain + '/index.html';
  }else{
      window.location.href = 'https://passport' + window.gooagoodomain + '/index.html?service=' + window.location.host;
  }
}

const Fetch = (options) => {
  options = Object.assign({}, defaultOptions, options);

  return new Promise((resolve, reject) => {
    $.ajax(options)
    .done((back) => {
      if (typeof back == 'string' && (options.type === 'json' || options.type === 'jsonp')) {
        back = $.parseJSON('back');
      }

      if (options.isSuccess(back)) {
        resolve(back);
      } else {
        options.isAccessDeny(back);
        if (options.isLogin(back)) {
          goLogin(back);
        } else {
          // options.alertError && snackMsg(back);
          reject(back);
        }
      }
    })
    .fail((back) => {
      reject(back)
    })
  })
}

export default Fetch
