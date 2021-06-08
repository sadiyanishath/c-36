class Form{
    constructor(){

    }
 display(){
     var title = createElement("h1")
     title.html("Car Racing Game")
     title.position(130,20)

     var input = createInput("Enter Your Name")
     input.position(130,60)

     var button = createButton("PLAY")
     button.position(250,200)

     button.mousePressed(function(){
         input.hide()
         button.hide()
         var name = input.value()
         var griting = createElement("h3")
         griting.html("Hello"+name)
         griting.position(130,160)
     })
 }


}