class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background(rgb(147,191,240));
    //write code to show a heading for showing the result of Quiz
    
    //call getContestantInfo( ) here
    if(allContestants !== undefined){

      fill(rgb(102,153,102));
      textSize(20);
      text("The contestant who answered the question correctly is highlighted in yellow colour :)",130,230);

    }

    for(var plr in allContestants){

      var correctAns = "2";
      if (correctAns === allContestants[plr].answer)
      fill(rgb(255,204,0));
      else
      fill(rgb(194,24,7));
    }
    
  }

}
