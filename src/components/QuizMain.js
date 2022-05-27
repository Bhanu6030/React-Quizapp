import React, { Component } from 'react';
import Question from './question/Question'; 
import Answer from './answer/Answer';
import './QuizMain.css';
import fire from '../config/fire';
class QuizMan extends Component
{
    state={
        questions:{
            1:'1.Recently, Ministry of Information and Broadcasting has launched its account in which social media platform to counter fake news?',
            2:'2.Super Follows” feature has been introduced by which social media giant?',
            3:'3.Which country is set to create its own social media platform called ‘Jogajog’?' ,
            4:'4.What is the largest global social network (by total active users)?',
            5:'5. Which social network does not allow you to post photos via a desktop computer?',
            6:'6.How many people worldwide are using Instagram nearly?',
            7:'7:Which is the most popular social media platform in 2021?'
        },
        answers:
        {
                1:{
                    1: 'WhatsApp',
                    2:'Telegram',
                    3:'Instagram',
                    4:'Twitter'
                } ,
                2:{
                    1:'Twitter',
                    2:'Facebook',
                    3:'Google',
                    4:'Watsapp'
                },
                3:{
                    1:'SriLanka',
                    2: 'India',
                    3:'Bangladesh',
                    4:'Nepal'
                },
                4:{
                 1:'watsapp',
                 2:'telegram',
                 3:'Hangouts',
                 4:'Facebook'
                },
                5:{
                    1:'Instagram',
                    2:'Telegram',
                    3:'Twitter',
                    4:'Facebook'
                },
                6:{
                    1:'1 billion',
                    2:'10billion',
                    3:'20billion',
                    4:'30billion'
                },
                7:{
                    1:'Twitter',
                    2:'Facebook',
                    3:'Watsapp',
                    4:'Instagram'
                }
        },
        correctAnswers:{
            1:'2',
            2:'1',
            3:'3',
            4:'4',
            5:'1',
            6:'1',
            7:'2'
        },
        correctAnswer:0,
        clickedAnswer:0,
        step:1,
        score:0
    }

    checkAnswer= answer =>{
       const {correctAnswers,step,score } = this.state;
       if(answer === correctAnswers[step]){
           this.setState({
               score : score+1,
               correctAnswer:correctAnswers[step],
               clickedAnswer:answer
           });
       }
       else{
          this.setState({
           correctAnswer:0,
           clickedAnswer:answer
          }); 
       }
    }
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    Logout()
    {
        fire.auth().signOut();
    }

    render()
    {
        let {questions,answers,correctAnswer,clickedAnswer,score,step}=this.state
        return(
            <div className="Content">
                <button className="Logout" onClick={this.Logout}>Logut</button>
                {step <= Object.keys(questions).length ? 
                    (<> 
                        <Question
                            question={questions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(questions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                        <img className="initial" src="https://i.pinimg.com/originals/f1/03/a7/f103a759bbf1b5b240b5da2b1936a352.gif"></img>
                    </>
                    ) : (
                        <div className="finalPage">
                            <img  className="final" src="https://c.tenor.com/RP_V2TbzwuYAAAAM/cheer-smile.gif"></img>
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(questions).length}</p>
                            <p>Thank you!</p>
                        </div>
                    )
                }
            </div>
        );
    }
}
export default QuizMan;