document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelector("#page_view").onclick = (e) => {
    
    handle_app_page_event(e);
    //let user_name = document.querySelector('#user_name').value;
    
    
  };
  
});



function handle_app_page_event(e) {
  
  console.log(e.target.value);
  
  if (e.target.value == "quiz1") {
  
    display_quiz(1,0)
    
  } else if (e.target.value == "quiz2") {
  
    display_quiz(2,0);
  }
  
};



const display_quiz = async (quiz_num, question_num) => {
  
  if (quiz_num == 1) {
    
    const data = await fetch("https://my-json-server.typicode.com/sean510/cus1172-project-3/db")
    const model = await data.json()
    const html_element = display_question(model,`#${model.quiz1[question_num].type}`)
    document.querySelector("#page_view").innerHTML = html_element;


  } else if (quiz_num == 2) {

    const data = await fetch("https://my-json-server.typicode.com/sean510/cus1172-project-3/db")
    const model = await data.json()
    const html_element = display_question(model, `#${model.quiz2[question_num].type}`)
    document.querySelector("#page_view").innerHTML = html_element;

  }
}



const display_question = (model, view) => {
  template_source = document.querySelector(view).innerHTML

  var template = Handlebars.compile(template_source);

  var html_widget_element = template(model)

  return html_widget_element
}
