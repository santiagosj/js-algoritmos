$(function(){
    //modelo 
    /*
      El modelo es un objeto con tres valores:
      1-la funcion init()
      2-la funcion add()
      3-la funcion getAllNotes()
    */ 
    var model = {
        init: function() {
            if (!localStorage.notes) {
                localStorage.notes = JSON.stringify([]);
            }
        },
        add: function(obj) {
            var data = JSON.parse(localStorage.notes);
            data.push(obj);
            localStorage.notes = JSON.stringify(data);
        },
        getAllNotes: function() {
            return JSON.parse(localStorage.notes);
        }
    };

   //controlador
   /*
   El controlador es en este caso un objeto con tres valores:
   1-la funcion addNewNote()
   2-la funcion getNotes()
   3-la funcion init()
   */
    var octopus = {
        addNewNote: function(noteStr) {
            model.add({
                content: noteStr,
                date: new Date()
            });
            view.render();
        },

        getNotes: function() {
            return model.getAllNotes().reverse();
        },

        init: function() {
            model.init();
            view.init();
        }
    };

    //vista
    /*
     La vista tambien es un objeto que cuenta con dos valores:
     1-la funcion init()
     2-la funcion render()
    */
    var view = {
        init: function() {
            this.noteList = $('#notes');
            var newNoteForm = $('#new-note-form');
            var newNoteContent = $('#new-note-content');
            newNoteForm.submit(function(e){
                octopus.addNewNote(newNoteContent.val());
                newNoteContent.val('');
                e.preventDefault();
            });
            view.render();
        },
        render: function(){
            var htmlStr = '';
            octopus.getNotes().forEach(function(note){
                htmlStr += '<li class="note">'+
                        note.content + '</br>' + 'Date: ' + new Date(note.date)
                    '</li>';
            });
            this.noteList.html( htmlStr );
        }
    };

    octopus.init();//llamada a la funcion del controlador init.
});