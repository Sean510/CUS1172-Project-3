document.addEventListener("DOMContentLoaded", () => {
  
  document.querySelector("#page_view").onclick = (e) => {
    
    handle_app_page_event(e);
    let user_name = document.querySelector('#user_name').value;
    
    
  };
  
});

const display_quiz = async (quiz_num, question_num) => {
  
  if (quiz_num == 1) {
    
    const data = await fetch("https://my-json-server.typicode.com/sean510/cus1172-project-3/quiz1")
    const model = await data.json()
    const html_element = display_question(model.question_num,model.type)
    document.querySelector("page_view").innerHTML = html_element;


  } else if (quiz_num == 2) {

    const data = await fetch("https://my-json-server.typicode.com/sean510/cus1172-project-3/quiz2")
    const model = await data.json()
    const html_element = display_question(model, 0, model.type)
    document.querySelector("page_view").innerHTML = html_element;

  }
}



function handle_app_page_event(e) {
  
  console.log(e.target.value);
  
  if (e.target.value == "quiz1") {
  
    display_quiz(1,0)
    
  } else if (e.target.value == "quiz2") {
  
    display_quiz(2,0);
  }
  
};

const display_question = (model, question_number, view) => {
  template_source = document.querySelector(view).innerHTML

  var template = Handlebars.compile(template_source);

  var html_widget_element = template(model.question_number)

  return html_widget_element
}
