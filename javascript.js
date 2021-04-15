document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#page_view").onclick = (e) => {
    
    select_quiz(e);
  };
});



function select_quiz(e) {
  
  let user_name = document.querySelector('#user_name').value;
  
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
    
    let answer = model.quiz1[question_num].answer;
    
    document.querySelector("#page_view").onclick = (e) => {
      mc_tf_check(quiz_num, question_num, e, answer);
    }


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

function mc_tf_check(quiz_num, question_num, e, answer) {

  if (e.target.value != answer) {
    alert("Answer is correct");
    display_quiz(quiz_num,question_num+1);
  }
}
