import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io5";
const { v4 } = require('uuid');


 const deviceEvaluationDetails = [
    {
      id:v4(),
      title: "Tell Us A Few Things About Your Device !",
      questionandanswer: [
        {
          id:v4(),
          question: "Does Your Phone Is Switched On ?",
          answer: [
            {
              id:v4(),
              value:"Yes"
            },
            {
              id:v4(),
              value:"No"
            },
          ]
        },
        {
          id:v4(),
          question: "Are You Able To Make And Receive Call ?",
          answer: [
            {
              id:v4(),
            value:"Yes"
          },
          {
            id:v4(),
            value:"No"
          },
        ]
        },
        {
          id:v4(),
          question: "Is Your Devices's Touch Screen Working Properly ?",
          answer: [
            {
              id:v4(),
              value:"Yes"
            },
            {
              id:v4(),
              value:"No"
            },
          ],
        },
        {
          id:v4(),
          question: "Your Mobile Under Warranty ?",
          answer: [
            {
              id:v4(),
              value:"Yes"
            },
            {
              id:v4(),
              value:"No"
            },
          ],
        }
      ]
    },
    {
      id:v4(),
      title: "Display And Body Overall Conditions",
    
      questionandanswer: [
        {
          question: "Display Spots ?",
          answer: [
            "Major Spots On Display",
            "Minor Spots On Display",
            "No Spots On Display"
          ],
          id: 1115
        },
        {
          question: "Visible Lines On Display ?",
          answer: [
            "Major Lines On Display",
            "Minor Lines On Display",
            "No Lines On Display"
          ],
          id: 1116
        },
        {
          question: "Screen Physical Condition ?",
          answer: [
            "Major Scratches On Display",
            "Minor Scratches On Display",
            "No Scratches On Display"
          ],
          id: 1117
        },
        {
          question: "Dents On Phone Body ?",
          answer: [
            "Major Dents On Body",
            "Minor Dents On Body",
            "No Dents On Body"
          ],
          id: 1118
        },
        {
          question: "Scratches On Phone Body?",
          answer: [
            "Major Scratches On Body",
            "Minor Scratches On Body",
            "No Scratches On Body"
          ],
          id: 1119
        }
      ]
    },
    {
      title: "Warranty",
      id: 3,
      questionandanswer: [
        {
          question: "Please Select Age Of Your Device",
          answer: [
            "Below 3 Months",
            "3 Months - 6 Months",
            "6 Months- 11 Months",
            "Above 11 Months"
          ],
          id: 1120
        }
      ]
    },
    {
      title: "Accessories",
      id: 4,
      questionandanswer: [
        {
          question: "Accessories",
          answer: [
            "Original Charger Of Device",
            "Box With Same IMEI",
            "Bill With Same IMEI",
            "Original Earphone Of Device"
          ],
          id: 1121
        }
      ]
    },
    {
      title: "Issues",
      id: 5,
      questionandanswer: [
        {
          question: "Issues(Click On Continue If No Issue Exists)",
          answer: [
            "Camera",
            "Battery",
            "Speaker",
            "Front Camera",
            "Audio Receiver",
            "Volume Button",
            "Power Button",
            "Mic",
            "Finger Print",
            "Charging Point",
            "Ear Phone Jack",
            "Wifi",
            "Face Sensor",
            "Proximity"
          ],
          id: 1122
        }
      ]
    }
  ];
  
  module.exports={deviceEvaluationDetails}

  // const firstQnA = deviceEvaluationDetails[0];
  // const firstTitle = firstQnA.title;
  // console.log(firstTitle);
  // const fewThingsAboutDevice = firstQnA.questionandanswer.map((e) => {
  //   console.log(e.question);
  //   console.log(e.answer);
  // });
  
  // const secondQnA = deviceEvaluationDetails[1];
  // const secondTitle = secondQnA.title;
  // console.log(secondTitle);
  // const displayAndBodyCondition = secondQnA.questionandanswer.map((e) => {
  //   console.log(e.question);
  //   console.log(e.answer);
  // });
  
  // const thirdQnA = deviceEvaluationDetails[2];
  // const thirdTitle = thirdQnA.title;
  // console.log(thirdTitle);
  // const warranty = thirdQnA.questionandanswer.map((e) => {
  //   console.log(e.question);
  //   console.log(e.answer);
  // });
  
  // const accessoriesQnA = deviceEvaluationDetails[3];
  // const accessoriesTitle = accessoriesQnA.title;
  // console.log(accessoriesTitle);
  // const accessories = accessoriesQnA.questionandanswer.map((e) => {
  //   console.log(e.question);
  //   console.log(e.answer);
  // });
  
  // const issuesQnA = deviceEvaluationDetails[4];
  // const issuesTitle = issuesQnA.title;
  // console.log(issuesTitle);
  // const Issue = issuesQnA.questionandanswer.map((e) => {
  //   console.log(e.question);
  //   console.log(e.answer);
  // });
  