"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1107725",
  key: "1bb3ea564162ad9f320a",
  secret: "2058be83916de15b8c1a",
  cluster: "ap1",
  useTLS: true,
});

module.exports = {
  async send(ctx) {
    const { id, user, message, channel } = ctx.request.body;
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
    return ctx;
  },
};
