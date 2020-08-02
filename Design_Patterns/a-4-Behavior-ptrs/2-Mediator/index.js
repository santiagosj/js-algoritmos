/**
 * Mediator
 */

 const emitter = (()=>{
     const topics = {};
     const hasOP = topics.hasOwnProperty;

     return {
         on:(topic, listener)=>{
             if(!hasOP.call(topics,topic)){
                 topics[topic] = []
             }
             topics[topic].push(listener)
         },

         emit:(topic,info) => {
             if(!hasOP.call(topics, topic)){
                 return;
             }
             topics[topic].forEach(item =>{
                 item(info !== undefined ? info : {})
             })
         }
     }
 })(); //IFIE

/**
* Use case
*/

// Subscriptor
emitter.on('power', num => console.log('power:', num * num));

// Dispatcher
emitter.emit('power', 3);
