const AWS = require('aws-sdk');
const { AWS_CRED } = require('./constants/cred');
const eventBridge = new AWS.EventBridge(AWS_CRED);

module.exports.triggerEvent = async () => {
  const params = {
    Entries: [
      {
        Source: 'node-js-test',
        Detail: '{ "key1": "value1", "key2": "value2" }',
        Resources: ['resource1', 'resource2'],
        DetailType: 'myDetailType',
      },
    ],
  };
  try {
    const event = await eventBridge.putEvents(params).promise();
    return { success: true, event };
  } catch (error) {
    return { success: false, error };
  }
};
