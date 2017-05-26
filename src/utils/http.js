import axios from "axios";
// import 'whatwg-fetch';

export default class {
    
    //make http requests using axios (see config fields here https://github.com/mzabriskie/axios)
    static axios(config){
        return Http._axiosRequest(config);
    }

    static _axiosRequest(config){
        if(!config || !config.url){
            throw {
                message: "Http request error: config required"
            };
        }

        config.method = config.method || 'get';

        if(config.url && config.url.indexOf('http') === -1 && config.url.indexOf('https') === -1 && config.url[0] != '/')
            config.url = '/' + config.url

        return axios(config).then((response)=>{
            //console.log("HTTP response received: ",response);
            return response.data;
        }).catch((error)=>{
            console.error("HTTP request error: ", error);
            if(error && error.response && error.response.status === 401){
                window.OidcUserManager.signinRedirect(); //Login Using IdentityServer4
            }
            return {};
        })
    }

    //make hhtp request using whatwg-fetch
    // static fetch(url, options){
    //     if(!options){
    //         options = {};
    //     }
    //     options.method = options.method || 'GET';

    //     let params = {
    //         method: options.method,
    //         credentials: 'include',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //             'cache-control': 'no-cache',
    //             'pragma': 'no-cache'
    //             //'X-XSRF-TOKEN': Cookie.get('XSRF-TOKEN') //Set Anti Forgery Token
    //         }
    //     }

    //     if (options.method !== 'HEAD' && options.method !== 'GET'){
    //         params['body'] = JSON.stringify(options.body) || {}
    //     }

    //     if(url && url.indexOf('http') == -1 && url[0] != '/')
    //         url = '/'+url

    //     if (options.method == 'GET') {
    //         return fetch(url, params)
    //             .then((r) => {
    //                 if (r.status === 401) {
    //                     console.log('UNAUTHORIZED - ', r.status);
    //                     //window.location = 'api/v1/Account/SignOut';
    //                 } 
    //                 return r;
    //             })
    //             .then((r) => {
    //                 return r.json();
    //             })
    //             .catch((r)=> {
    //                 return {};
    //             });
    //     } else {
    //         return fetch(url, params)
    //             .then((r) => {
    //                 if (r.status === 401) {
    //                     console.log('UNAUTHORIZED - ', r.status);
    //                     //window.location = 'api/v1/Account/SignOut';
    //                 } 

    //                 return r
    //             })
    //             .then((r) => r.json())
    //             .catch((r)=> {
    //                 return {};
    //         });

    //     }
    // }
}