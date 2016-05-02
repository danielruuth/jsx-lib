if (app.documents.length == 0 ||  app.selection.length == 0){  
  alert ('Please make sure to have some text frames selected first!')  
  exit();  
} 

var font = [];

for(i=0; i < textFonts.length; i++){
  font.push( textFonts[i].name )
}


for (sel=0; sel<app.selection.length; sel++){  
  if (app.selection[sel] instanceof TextFrame){  
    for (par=0; par<app.selection[sel].words.length; par++){ 
      var fontName = font[Math.floor(Math.random()*font.length)];
      app.selection[sel].words[par].characterAttributes.textFont = textFonts.getByName( fontName );   
    }  
  }  
}  