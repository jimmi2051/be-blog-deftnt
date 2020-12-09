"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { Wit, log } = require("node-wit");

const client = new Wit({
  accessToken: "WMWRLPTOF5VPFVDMXR2AD6MRQ46AM2R3",
  logger: new log.Logger(log.DEBUG), // optional
});

const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1107725",
  key: "1bb3ea564162ad9f320a",
  secret: "2058be83916de15b8c1a",
  cluster: "ap1",
  useTLS: true,
});

const formatBotMsg = (message, channel) => {
  return {
    id: "WMWRLPTOF5VPFVDMXR2AD6MRQ46AM2R3",
    user: "Tèo Bot",
    message,
    channel,
  };
};
const formatBotMsgToSave = (message, channel) => {
  return {
    senderId: "WMWRLPTOF5VPFVDMXR2AD6MRQ46AM2R3",
    senderName: "Tèo Bot",
    receiverId: null,
    receiverName: null,
    message,
    channel,
  };
};
module.exports = {
  async send(ctx) {
    const { id, user, message, channel, activeBot = false } = ctx.request.body;
    ctx.response.body = {
      id,
      user,
      message,
      channel,
    };
    const data = {
      senderId: id,
      senderName: user,
      receiverId: null,
      receiverName: null,
      message,
      channel,
    };
    strapi.services.message.create(data);
    ctx.status = 200;
    pusher.trigger(channel, "chat-message", ctx.response.body);
    if (activeBot) {
      client.message(message).then((data) => {
        const { entities } = data;
        for (let key in entities) {
          if (entities.hasOwnProperty(key)) {
            const valueEntities = entities[key];
            if (valueEntities.length > 0) {
              const resOfBot = valueEntities[0].value;
              strapi.services.message.create(
                formatBotMsgToSave(resOfBot, channel)
              );
              pusher.trigger(
                channel,
                "chat-message",
                formatBotMsg(resOfBot, channel)
              );
            }
          }
        }
      });
    }
    return ctx;
  },
  async auth(ctx) {
    const socketId = ctx.request.body.socket_id;
    const channel = ctx.request.body.channel_name;
    const { userId, userName } = ctx.request.query;
    const presenceData = {
      user_id: userId,
      user_info: { name: userName, email: userName },
    };
    const auth = pusher.authenticate(socketId, channel, presenceData);
    return ctx.response.send(auth);
  },
};
