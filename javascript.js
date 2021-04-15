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
    let question_type = model.quiz1[question_num].type;
    let explanation = model.quiz1[question_num].explanation;
    
    if (question_type == "multiple_choice") {
      
      document.querySelector("#page_view").onclick = (e) => {
        mc_check(quiz_num, question_num, e, answer, explanation);
      }
    } else if (question_type == "true_false") {

      document.querySelector("#page_view").onclick = (e) => {
        tf_check(quiz_num, question_num, e, answer, explanation);
      }
    } else if (question_type == "short_answer") {

      document.querySelector("#page_view").onsubmit = function () {
        let answer_text = document.querySelector('#question_answer');
        short_answer_check(quiz_num, question_num, answer_text, answer, explanation);
        return false;
      }
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

function mc_check(quiz_num, question_num, e, answer, explanation) {

  if (answer == "A") {
    
    if (e.target.value == answer) {
      //display_correct()
    } else if (e.taget.value == "B" || e.target.value == "C") {
      alert(explanation);
      display_quiz(quiz_num,question_num+1);
    }
  
  }else if (answer == "B") {
    
    if (e.target.value == answer) {
      //display_correct()
    } else if (e.taget.value == "A" || e.target.value == "C") {
      alert(explanation);
      display_quiz(quiz_num,question_num+1);
    }
  
  } else if (answer == "C") {
      
    if (e.target.value == answer) {
        //display_correct()
      } else if (e.target.value == "A" || e.target.value == "B") {
        alert(explanation);
        display_quiz(quiz_num,question_num+1);
      }
  }
  
}

function tf_check(quiz_num, question_num, e, answer, explanation) {

  if (answer == "True") {
    
    if (e.target.value == answer) {
      //display_correct()
    } else if (e.target.value == "False") {
      alert(explanation);
      display_quiz(quiz_num, question_num+1);
    }
  
  } else if (answer == "False") {
    
    if (e.target.value == answer) {
      //display_correct
    } else if (e.target.value == "True") {
      alert(explanation);
      display_quiz(quiz_num,question_num+1);
    }
  }
}

function short_answer_check(quiz_num, question_num, answer_text, answer, explanation) {
  
  if(answer_text == answer) {
    //display_correct()
  } else {
    alert(explanation);
    display_quiz(quiz_num, question_num+1);
  }
}
