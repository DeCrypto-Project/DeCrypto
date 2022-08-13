export const NUMBER_OF_QUESTIONS = 12;
export const algorithms = [
    { value: "Markowitz", label: "Markowitz Algorithm" },
    { value: "Gini", label: "Gini Algorithm"},
    { value: "GiniWithML", label: "Gini Algorithm with Machine Learning"},
];

const ans_O1 = [
    { value: 1, label: "Income"},
    { value: 2, label: "Growth"},
];
const ans_O2 = [
    { value: 1, label: "It wouldn’t have an impact on my standard of living and I wouldn’t need to use any additional resources"},
    { value: 2, label: "I have other resources I could fall back on."},
    { value: 3, label: "It would have an impact on my immediate standard of living."},
];
const ans_O3 = [
    { value: 0, label: "Immediately or within the next three years" },
    { value: 6, label: "Within three to four years"},
    { value: 10, label: "Within five to six years"},
    { value: 15, label: "Within seven to 10 years"},
    { value: 20, label: "Not within the next 10 years"},
];
const ans_O4 = [
    { value: 0, label: "I plan to withdraw all of my money at once." },
    { value: 2, label: "I will make withdrawals over two to five years."},
    { value: 5, label: "I will make withdrawals over six to 10 years."},
    { value: 7, label: "I will make withdrawals over 10 years or more"},
    { value: 10, label: "I don’t intend to withdraw the money"},
];
const ans_O5 = [
    { value: 10, label: "I do not intend to take withdrawals." },
    { value: 7, label: "I plan to withdraw between 0% and 4% of the value of my investments each year."},
    { value: 5, label: "I plan to withdraw between 4% and 8% of the value of my investments each year."},
    { value: 2, label: "I plan to withdraw more than half of the value of my investments within three to 10 years."},
    { value: 0, label: "I plan to withdraw all of my investments at once."},
];
const ans_O6 = [
    { value: 0, label: "+17% potential gain, -12% potential loss" },
    { value: 4, label: "+23% potential gain, -15% potential loss."},
    { value: 7, label: "+28% potential gain, -19% potential loss."},
    { value: 10, label: "+34% potential gain, -22% potential loss."},
    { value: 14, label: "+39% potential gain, -25% potential loss."},
];
const ans_O7 = [
    { value: 0, label: "Best-case Increase: +17,000 , Most Likely result: +4,500, Worst-case losses: -12,000"},
    { value: 4, label: "Best-case Increase: +23,000 , Most Likely result: +6,000, Worst-case losses: -15,000"},
    { value: 7, label: "Best-case Increase: +28,000 , Most Likely result: +7,000, Worst-case losses: -19,000"},
    { value: 10, label: "Best-case Increase: +34,000 , Most Likely result: +8,000, Worst-case losses: -22,000"},
    { value: 14, label: "Best-case Increase: +39,000 , Most Likely result: +9,000, Worst-case losses: -25,000"},
];
const ans_O8 = [
    { value: 0, label: "I am most concerned with risk. I am willing to accept lower returns in order to limit the risk of loss." },
    { value: 4, label: "I am willing to accept some risk and chance of loss in an effort to achieve modest but somewhat higher returns."},
    { value: 7, label: "I am willing to accept moderate risk in order to achieve higher returns. Reducing risk and increasing returns are equally important to me."},
    { value: 10, label: "I want to achieve strong returns on my investments. I am willing to accept somewhat higher risk and chance of loss."},
    { value: 14, label: "I am mainly concerned with getting the highest possible returns on my investments. I am willing to accept significant rises and falls in the value of my investments and a significant chance of loss"},
];
const ans_O9 = [
    { value: 15, label: "I would not change my investment plan" },
    { value: 10, label: "I would wait at least one year before changing to investment options that are more stable."},
    { value: 5, label: "I would wait at least six months before changing to investment options that are more stable."},
    { value: 0,label: "I would immediately change to investment options that are more stable"},
];
const ans_10 = [
    { value: 0,  label: "$5,000 or less" },
    { value: 4,  label: "$10,000"},
    { value: 7,  label: "$5,000"},
    { value: 10, label: "$20,000"},
    { value: 14, label: "It is unlikely I will move my money even if my investment falls in value."},
];
const ans_11 = [
    { value: 0, label: "I would sell my investments." },
    { value: 5, label: "I would be worried but not uncomfortable enough to sell my investments immediately. If my investments suffered losses over several months, I would probably sell."},
    { value: 10, label: "I would wait a full year before making changes to my investments—short-term losses in the value of my investments do not bother me."},
    { value: 15, label: "I would not make changes—I understand that investments can have occasional negative yearly returns. However, I have a higher chance of reaching my investment goals if I stick with my investment over the long term."},
];

const ans_12 = [
    { value: 0, label: "\"My investments don’t have to grow, I just want my money to be safe.\"" },
    { value: 4, label: "I can accept lower growth for greater certainty."},
    { value: 7, label: "I am more concerned about the possible losses than the possible gains."},
    { value: 10, label: "I can accept possible losses for long-term investment growth."},
    { value: 14, label: "To achieve high levels of growth, it is necessary to take risk."},
];

export const questions = [
    {
        title: "What is your main investment goal?",
        options: ans_O1,
    },
    {
        title: "What impact would it have on your standard of living if you were to lose money on this investment?",
        options: ans_O2,
    },
    {
        title: "When do you want to start spending the money you will save in this account?",
        options: ans_O3,
    },
    {
        title: "Once you start spending your money, how long do you expect to continue to withdraw funds from your investment portfolio?",
        options: ans_O4,
    },
    {
        title: "Once you start to spend the money in your investment portfolio, how much do you plan to withdraw?",
        options: ans_O5,
    },
    {
        title: "Some investments offer the opportunity for a greater gain but with the risk of a greater potential\n" +
            "loss. Look at the five scenarios represented in the chart below. Which one would you put your\n" +
            "money in?",
        options: ans_O6,
    },
    {
        title: "Imagine you have invested $100,000. Which of the five scenarios below would you want for your\n" +
            "investment portfolio?",
        options: ans_O7,
    },

    {
        title: "Investing involves a trade-off between risk and returns. In the past, investments with higher returns have been associated with greater risk and chance of loss. Whereas cautious investments that have had a lower chance of loss also have achieved lower returns. Which of the following statements best describes your attitude to risk?",
        options: ans_O8,
    },
    {
        title: "Imagine your adviser has invested $100,000 of your money and it’s fallen in value to $80,000. Assuming that this happens at an early stage of your intended investment period, how would you react to this $20,000 loss?",
        options: ans_O9,
    },
    {
        title: "The value of investments varies from year to year. Suppose you invested R100,000. How much money would you need to lose before you wanted to move your money into a more stable investment?",
        options: ans_10,
    },
    {
        title: "How does your concern about losing money manifest itself in relation to your investment?",
        options: ans_11,
    },
    {
        title: "Which of the following best describes your view on investing",
        options: ans_12,
    },
];
