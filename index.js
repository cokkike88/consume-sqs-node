const sequelize = require('./database/connection')


module.exports.handler = async (event) => {

  console.log(event)
  for (const record of event.Records) {
    const messageAttributes = record.messageAttributes;
    console.log("Message Body: ", JSON.parse(record.body));
  }

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: 'Go Serverless v3.0! Your function executed successfully!',
  //       input: event,
  //     },
  //     null,
  //     2
  //   ),
  // };
};
