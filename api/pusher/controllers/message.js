"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { Wit, log, interactive } = require("node-wit");
const fs = require("fs");
const yaml = require("js-yaml");
const listLanguague = [
  "bengali",
  "german",
  "italian",
  "oriya",
  "spanish",
  "traditionalchinese",
  "chinese",
  "hebrew",
  "japanese",
  "persian",
  "swedish",
  "turkish",
  "english",
  "hindi",
  "korean",
  "portuguese",
  "telugu",
  "french",
  "indonesian",
  "marathi",
  "russian",
  "thai",
];
const listDataEnglish = [
  "movies.yml",
  "sports.yml",
  "computers.yml",
  "gossip.yml",
  "humor.yml",
  "politics.yml",
  "trivia.yml",
  "conversations.yml",
  "literature.yml",
  "psychology.yml",
];
function sleeper(ms) {
  return function (x) {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}
const client = new Wit({
  accessToken: "WMWRLPTOF5VPFVDMXR2AD6MRQ46AM2R3",
  logger: new log.Logger(log.ERROR),
});
// interactive(client);
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
const formatUtterances = (msg, response, intent, entity) => {
  return [
    {
      text: msg,
      intent,
      entities: [
        {
          entity,
          start: 0,
          end: msg.length,
          body: response,
          entities: [],
        },
      ],
      traits: [],
    },
  ];
};

const firstValue = (obj, key) => {
  const val =
    obj &&
    obj[key] &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0 &&
    obj[key][0].value;
  if (!val) {
    return null;
  }
  return val;
};

const processForGreetings = (entities) => {
  const greeting = firstValue(entities, "wit_greetings:wit_greetings");
  const contact = firstValue(entities, "wit$contact:contact");
  const special = firstValue(entities, "special:special");
  let resOfBot = "";
  if (greeting && contact) {
    resOfBot = `${greeting}, ${contact}.`;
  } else if (greeting && special) {
    resOfBot = `${greeting}, ${special}.`;
  } else if (greeting) {
    resOfBot = greeting;
  }
  return resOfBot;
};

const processForQuestion = async (entities) => {
  const getQuestion = firstValue(entities, "get_question:get_question");
  let resOfBot = "";
  if (getQuestion) {
    let question = "";
    for (let key in entities) {
      if (key === "get_question:get_question") continue;
      if (entities.hasOwnProperty(key)) {
        const valueEntities = entities[key];
        if (valueEntities.length > 0) {
          question += ` ${valueEntities[0].value}`;
        }
      }
    }
    let urlGetKey = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${question}&limit=1&namespace=0&format=json`;
    let keySearch = "";
    let fullUrl = "";
    await fetch(urlGetKey)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        keySearch = result[1][0];
        fullUrl = result[3][0];
      });
    let urlSearch = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro&explaintext&titles=${keySearch}&format=json&redirects&exlimit=1&exsentences=3`;
    await fetch(urlSearch)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        const pagesObj = result.query.pages;
        const dataSearch = pagesObj[Object.keys(pagesObj)[0]];
        if (dataSearch.extract) {
          resOfBot = `${dataSearch.extract} <br/><br/> <a class="hyper-link-chat" target="_blank" href="${fullUrl}"> >>>>> Read more here <<<<< </a>`;
        }
      });
  }
  return resOfBot;
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
      client.message(message).then(async (data) => {
        const { entities, intents, traits } = data;
        let resOfBot = processForGreetings(entities);
        if (resOfBot === "") {
          resOfBot = await processForQuestion(entities);
        }
        if (resOfBot === "") {
          for (let key in entities) {
            if (entities.hasOwnProperty(key)) {
              const valueEntities = entities[key];
              if (valueEntities.length > 0) {
                resOfBot += ` ${valueEntities[0].value}`;
              }
            }
          }
        }
        await strapi.services.message.create(
          formatBotMsgToSave(resOfBot, channel)
        );
        pusher.trigger(
          channel,
          "chat-message",
          formatBotMsg(resOfBot, channel)
        );
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
  async trans(ctx) {
    try {
      const { intent, entity } = ctx.request.body;
      const { file0 } = ctx.request.files;
      let fileContents = fs.readFileSync(file0.path, "utf8");
      let data = yaml.safeLoad(fileContents);
      const { categories, conversations } = data;
      for (let conversation of conversations) {
        const index = Math.floor(Math.random() * conversation.length);
        const utterance = formatUtterances(
          conversation[0],
          conversation[index],
          intent,
          entity
        );
        fetch("https://api.wit.ai/utterances", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer MQZMCH5KLIYRPMVXH2OCAM675XWR2THH",
          },
          body: JSON.stringify(utterance),
        })
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            client.message(conversation[utterance]);
            sleeper(10000);
          })
          .catch((error) => {
            console.log("error ==>", error);
          });
      }
      ctx.status = 200;
      return ctx.send({
        status: true,
        message: `Training success. File ${file0.name} with intent ${intent} & entity ${entity}`,
      });
    } catch {
      ctx.status = 400;
      return ctx.send({
        status: false,
        message: "Params invalid. [file0, intent, entity]",
      });
    }
  },
  async transLocal(ctx) {
    try {
      for (let dataEnglish of listDataEnglish) {
        let fileContents = fs.readFileSync(
          `${__dirname}/data/english/${dataEnglish}`,
          "utf8"
        );
        let data = yaml.safeLoad(fileContents);
        const { categories, conversations } = data;
        let entity = "question:question";
        let intent = "question";

        for (let conversation of conversations) {
          let bodyData = [];
          for (let i = 1; i < conversation.length; i++) {
            const utterance = formatUtterances(
              conversation[0],
              conversation[i],
              intent,
              entity
            );
            bodyData = bodyData.concat(utterance);
          }

          fetch("https://api.wit.ai/utterances", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer MQZMCH5KLIYRPMVXH2OCAM675XWR2THH",
            },
            body: JSON.stringify(bodyData),
          })
            .then((response) => {
              return response.json();
            })
            .then((result) => {
              client.message(conversation[0]);
              sleeper(10000);
            })
            .catch((error) => {});
        }
      }

      ctx.send({ status: "Ok" });
    } catch (e) {
      console.log(e);
    }
  },
};
