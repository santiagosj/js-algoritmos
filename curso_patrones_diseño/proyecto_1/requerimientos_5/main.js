var ViewModel = function(){
    this.name = ko.observable("Felix")
    this.count = ko.observable(0)
    this.img = ko.observable('../assets/felix.gif')
    this.incrementar = function(){
        this.count(this.count() + 1)
    } 
    this.listOfCats = (function(){
        
    })();
}

ko.applyBindings(new ViewModel() )