import React, {Fragment, useState} from "react";
import {Button, Card, Col} from "react-bootstrap";
import PageTItle from "../layouts/PageTitle";
import Accordion from "react-bootstrap/Accordion";
import Select from "react-select";
import {calculateQuestionnaireAnswers} from "../../services/QuestionnaireService";
import {questions,NUMBER_OF_QUESTIONS} from "../constants/questionnaireQuestions";
import swal from "sweetalert";
import BouncingDotsLoader from "../components/Forms/Loading/Loading";
import { calculateUserPortfolio, savePortfolio} from "../../services/PortfolioService";
import { useHistory } from "react-router-dom";


const sleep = ms => new Promise(r => setTimeout(r, ms));

const Questionnaire = () => {
    let history = useHistory();
    const [answers,setAnswers] = useState(new Array(NUMBER_OF_QUESTIONS));
    const [submittingQuestionnaire,setSubmittingQuestionnaire] = useState(false);

    const setAnswer = (ans,index) => {
        const newAnswers = [...answers];
        newAnswers[index] = ans;
        setAnswers(newAnswers);
    }

    const SubmitQuestionnaire = async () => {
        const userPortfolio = await calculateUserPortfolio(60,10000)
        console.log('userPortfolio: ',userPortfolio)
        await savePortfolio({userId: 1,userPortfolio})

        setSubmittingQuestionnaire(true);
        if(answers.includes(undefined)){
            setSubmittingQuestionnaire(false);
            return undefined;
        }
        const questionnaireAnswers = calculateQuestionnaireAnswers(answers);
        // const userPortfolio = await calculateUserPortfolio(questionnaireAnswers.totalScore,10000)
        // console.log('userPortfolio: ',userPortfolio)
        // await savePortfolio({userId: 1,userPortfolio})
        // risk profile mashu
        // portfolio
        // portfolio assets
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
                                            if(!SubmitQuestionnaire()){
                                                return swal("Answer all questions before submitting!");
                                            }
                                            await sleep(3000);
                                            if (willDelete) {
                                                swal("Poof! Your portfolio is ready!", {
                                                    icon: "success",
                                                });
                                            } else {
                                                swal("Your questionnaire is safe!");
                                            }
                                            history.push("/portofolio");
                                            setSubmittingQuestionnaire(false);
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
