document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelector("#page_view").onclick = (e) => {
    
    handle_app_page_event(e);
    
  };
  
});

function handle_app_page_event(e) {
  
  console.log(e.target.value);
  
  if (e.target.id == "quiz1") {
  
    alert("quiz 1 pressed");
    //display_quiz("#first_quiz");
    
  } else if (e.target.id == "quiz2") {
  
    alert("quiz 2 pressed")
    //display_quiz("#second_quiz");
  }
  
};
