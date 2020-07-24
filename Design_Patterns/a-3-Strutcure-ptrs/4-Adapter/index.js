/**
 * Adapter
 */

// Example: An API which has performance issues...

class SomeAPI_OldVersion {
    constructor(){
        this.operations = function(url,options,method){
            switch(method){
                case 'get':
                    //return fetch...
                  break;
                case 'post':
                    //return fetch...
                  break;
                default:
                    return;
            }
        }
    }
}

// Example: The new version to solve the issues
class SomeAPI_NewVersion{
    constructor(){
        this.get = function(url, options){
            // return some get method.. ex axios.get
        }

        this.post = function(url, options){
            //return something with axios.post
        }
    }
}

//Adapter class
class Adapter {
    constructor(){
        const newApi = new SomeAPI_NewVersion();

        this.operations = function(url,options,method){
            switch(method){
                case 'get':
                    newApi.get(url, options);
                    break;
                case 'post':
                    newApi.post(url, options);
                    break;
                default:
                    return;
            }
        }
    }
}

/**
 * Use case: Old version
 */
 const api1 = new SomeAPI_OldVersion();
 api1.operations('www.google.com',{q: 1},'get'); 

/**
* Use case: New version
*/
const api2 = new SomeAPI_NewVersion();
api2.get('www.google.com',{q:1});

/**
 * Use case: Adapter version
 */
const adapter = new Adapter()
adapter.operations('wwww.google.com',{q:1},'get')