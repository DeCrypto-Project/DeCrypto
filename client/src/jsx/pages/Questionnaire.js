import React, {Fragment, useState} from "react";
import {Button, Card, Col} from "react-bootstrap";
import PageTItle from "../layouts/PageTitle";
import Accordion from "react-bootstrap/Accordion";
import Select from "react-select";
import {saveQuestionnaire,calculateQuestionnaireAnswers} from "../../services/QuestionnaireService";
import {questions,NUMBER_OF_QUESTIONS,algorithms} from "../constants/questionnaireQuestions";
import swal from "sweetalert";
import BouncingDotsLoader from "../components/Forms/Loading/Loading";
import { calculateUserPortfolio, savePortfolio} from "../../services/PortfolioService";
import { useHistory } from "react-router-dom";


const sleep = ms => new Promise(r => setTimeout(r, ms));

const Questionnaire = () => {
    let history = useHistory();
    const [answers,setAnswers] = useState(new Array(NUMBER_OF_QUESTIONS));
    const [submittingQuestionnaire,setSubmittingQuestionnaire] = useState(false);
    const [chosenAlgorithm,setChosenAlgorithm] = useState("");
    const [chosenInvestmentAmount,setChosenInvestmentAmount] = useState("");

    const setAnswer = (ans,index) => {
        const newAnswers = [...answers];
        newAnswers[index] = ans;
        setAnswers(newAnswers);
    }

    const setInvestmentAmount = async (e) => {
        setChosenInvestmentAmount(e.target.value);
    }

    const SubmitQuestionnaire = async () => {
        setSubmittingQuestionnaire(true);
        const isPositiveNumber = /^\d+$/.test(chosenInvestmentAmount);
        if(answers.includes(undefined)|| chosenAlgorithm===""||!isPositiveNumber){
            setSubmittingQuestionnaire(false);
            return null;
        }
        const questionnaireAnswers = calculateQuestionnaireAnswers(answers);
        await saveQuestionnaire({userId: 1,questionnaireAnswers,chosenInvestmentAmount})
        const userPortfolio = await calculateUserPortfolio(questionnaireAnswers.totalScore,chosenInvestmentAmount,chosenAlgorithm)
        // contract obj example
        // {
        //     "Profolios": {
        //         "ADA-USD": 1.9815026686243584,
        //         "BTC-USD": 118.83173054114798,
        //         "ETH-USD": 2.1867667902276597
        //     },
        //     "algorithm": "Markowitz",
        //     "date": "Fri, 19 Aug 2022 15:03:28 GMT",
        //     "totalInvestment": 123
        // }
        await savePortfolio({userId: 1,userPortfolio:userPortfolio.data})
        return true;
    }

    return (
        <Fragment>
            <PageTItle activeMenu="Questionnaire" motherMenu="Form" pageContent="Questionnaire" />
            <div className='d-flex justify-content-center'>
            <Col md="9">
                <Card>
                    <Card.Header className="d-block">
                        <Card.Title>Risk Assessment Questionnaire</Card.Title>
                        <Card.Text className="m-0 subtitle">
                        </Card.Text>
                    </Card.Header>
                    <Card.Body>
                        <div className="basic-form">
                            <form action="#">
                                <div className="input-group mb-5">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Please enter your desired investment amount in</span>
                                        <span className="input-group-text">$</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Amount" onInput={setInvestmentAmount}/>
                                </div>
                            </form>
                        </div>
                        <Accordion
                            className="accordion accordion-rounded-stylish accordion-gradient"
                            defaultActiveKey="0"
                        >
                            {questions.map((question, i) => (
                                <div className="accordion__item" key={i}>
                                    <Accordion.Toggle
                                        as={Card.Text}
                                        eventKey={`${i}`}
                                        className={`accordion__header accordion__header--primary`}
                                    >
                                        <span className="accordion__header--text">{question.title}</span>
                                    </Accordion.Toggle>
                                    <Select
                                        defaultValue
                                        onChange={(ans)=>{setAnswer(ans,i)}}
                                        options={question.options}
                                        showContent="true"
                                        open="true"
                                        className="my-react-select-container"
                                        theme={theme => ({
                                            ...theme,
                                            borderRadius: 0,
                                            colors: {
                                                ...theme.colors,
                                                primary25: '#6418c3',
                                                primary: 'black',

                                            },
                                        })}
                                    />
                                </div>
                            ))}
                            <Accordion.Toggle
                                as={Card.Text}
                                className={`accordion__header accordion__header--primary`}
                            >
                            <span className="accordion__header--text">{'Please choose desired algorithm'}</span>
                            </Accordion.Toggle>
                            <Select
                                defaultValue
                                onChange={(ans)=>{setChosenAlgorithm(ans.value)}}
                                options={algorithms}
                                showContent="true"
                                open="true"
                                className="my-react-select-container"
                                theme={theme => ({
                                    ...theme,
                                    borderRadius: 0,
                                    colors: {
                                        ...theme.colors,
                                        primary25: '#6418c3',
                                        primary: 'black',

                                    },
                                })}
                            />
                        </Accordion>
                        <div className="d-flex justify-content-center">
                            <div className="sweetalert mt-4">
                                <Button className="mr-2" variant="secondary btn-rounded btn-lg"
                                    onClick={() => {
                                        return swal({
                                            title: "Are you sure?",
                                            text:
                                                "Make sure you answered correctly before submitting!",
                                            icon: "warning",
                                            buttons: true,
                                            dangerMode: true,
                                        }).then(async (willDelete) => {
                                            if (willDelete) {
                                                const isAnsweredAll = await SubmitQuestionnaire();
                                                if(!isAnsweredAll){
                                                    return swal("Answer all questions before submitting!");
                                                }
                                                // await sleep(3000);
                                                swal("Poof! Your portfolio is ready!", {
                                                    icon: "success",
                                                });
                                                history.push("/portofolio");
                                                setSubmittingQuestionnaire(false);
                                            } else {
                                                swal("Your questionnaire is safe!");
                                            }
                                        })
                                    }
                                    }
                                >
                                    {submittingQuestionnaire ?  <BouncingDotsLoader/> : "Submit Questionnaire"}
                                </Button>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
            </div>
        </Fragment>
    );
};

export default Questionnaire;
