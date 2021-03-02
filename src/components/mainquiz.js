import React from "react"
import { quizData } from "./quizData"
import { Heading, Text, Box, Button, List, ListItem } from "@chakra-ui/core"

class MainQuiz extends React.Component {
  state = {
    currentQuestion: 0,
    myAnswer: null,
    options: [],
    score: 0,
    disabled: true,
    isEnd: false,
  }

  loadQuizData = () => {
    // console.log(quizData[0].question)
    this.setState(() => {
      return {
        questions: quizData[this.state.currentQuestion].question,
        answer: quizData[this.state.currentQuestion].answer,
        options: quizData[this.state.currentQuestion].options,
      }
    })
  }

  componentDidMount() {
    this.loadQuizData()
  }
  nextQuestionHandler = () => {
    // console.log('test')
    const { myAnswer, answer, score } = this.state

    if (myAnswer === answer) {
      this.setState({
        score: score + 1,
      })
    }

    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      myAnswer: null,
    })
    console.log(this.state.currentQuestion)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: quizData[this.state.currentQuestion].question,
          options: quizData[this.state.currentQuestion].options,
          answer: quizData[this.state.currentQuestion].answer,
        }
      })
    }
  }
  //check answer
  checkAnswer = answer => {
    this.setState({ myAnswer: answer, disabled: false })
  }
  finishHandler = () => {
    if (this.state.currentQuestion === quizData.length - 1) {
      this.setState({
        isEnd: true,
      })
    }
  }

  //play again
  playAgain = () => {
    this.setState({
      currentQuestion: 0,
      myAnswer: null,
      options: [],
      score: 0,
      disabled: true,
      isEnd: false,
    })
  }

  render() {
    const { options, myAnswer, currentQuestion, isEnd } = this.state

    if (isEnd) {
      return (
        <Box>
          <Heading>
            Thanks for playing! You answered {this.state.score + 1}/4 questions
            correct.
          </Heading>
          <Text>The correct answer's for the questions was</Text>
          <List styleType="disc">
            {quizData.map((item, index) => (
              <ListItem className="ui floating message options" key={index}>
                {item.answer}
              </ListItem>
            ))}
          </List>
          <Button variantColor="green" onClick={() => this.playAgain()}>
            Play Again!
          </Button>
        </Box>
      )
    } else {
      return (
        <Box>
          <Heading>{this.state.questions} </Heading>
          <Text as="i">{`Questions ${
            quizData.length - currentQuestion
          }  out of ${quizData.length} remaining `}</Text>
          {options.map(option => (
            <Box
              borderWidth="2px"
              bg="gray.600"
              borderColor="black"
              borderRadius="2px"
              m="4"
              p="2"
              color="white"
            >
              <Text key={option.id} onClick={() => this.checkAnswer(option)}>
                {option}
              </Text>
            </Box>
          ))}

          <Text>You selected: {myAnswer} </Text>

          {currentQuestion < quizData.length - 1 && (
            <Button
              isDisabled={this.state.disabled}
              onClick={this.nextQuestionHandler}
              m="2"
            >
              Next
            </Button>
          )}
          {/* //adding a finish button */}
          {currentQuestion === quizData.length - 1 && (
            <Button
              isDisabled={this.state.disabled}
              onClick={this.finishHandler}
            >
              Finish
            </Button>
          )}
        </Box>
      )
    }
  }
}

export default MainQuiz
