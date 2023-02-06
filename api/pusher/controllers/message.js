"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const template = (name, description) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <title>WELCOME</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
      <meta name="format-detection" content="telephone=no" />
      <!--[if !mso]><!-->
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
        rel="stylesheet"
      />
      <!--<![endif]-->
      <style type="text/css">
        body {
          -webkit-text-size-adjust: 100% !important;
          -ms-text-size-adjust: 100% !important;
          -webkit-font-smoothing: antialiased !important;
        }
        img {
          border: 0 !important;
          outline: none !important;
        }
        p {
          margin: 0px !important;
          padding: 0px !important;
        }
        table {
          border-collapse: collapse;
          mso-table-lspace: 0px;
          mso-table-rspace: 0px;
        }
        td,
        a,
        span {
          border-collapse: collapse;
          mso-line-height-rule: exactly;
        }
        .ExternalClass * {
          line-height: 100%;
        }
        span.MsoHyperlink {
          mso-style-priority: 99;
          color: inherit;
        }
        span.MsoHyperlinkFollowed {
          mso-style-priority: 99;
          color: inherit;
        }
      </style>
      <style
        media="only screen and (min-width:481px) and (max-width:599px)"
        type="text/css"
      >
        @media only screen and (min-width: 481px) and (max-width: 599px) {
          table[class="em_main_table"] {
            width: 100% !important;
          }
          table[class="em_wrapper"] {
            width: 100% !important;
          }
          td[class="em_hide"],
          br[class="em_hide"] {
            display: none !important;
          }
          img[class="em_full_img"] {
            width: 100% !important;
            height: auto !important;
          }
          td[class="em_align_cent"] {
            text-align: center !important;
          }
          td[class="em_aside"] {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
          td[class="em_height"] {
            height: 20px !important;
          }
          td[class="em_font"] {
            font-size: 14px !important;
          }
          td[class="em_align_cent1"] {
            text-align: center !important;
            padding-bottom: 10px !important;
          }
        }
      </style>
      <style media="only screen and (max-width:480px)" type="text/css">
        @media only screen and (max-width: 480px) {
          table[class="em_main_table"] {
            width: 100% !important;
          }
          table[class="em_wrapper"] {
            width: 100% !important;
          }
          td[class="em_hide"],
          br[class="em_hide"],
          span[class="em_hide"] {
            display: none !important;
          }
          img[class="em_full_img"] {
            width: 100% !important;
            height: auto !important;
          }
          td[class="em_align_cent"] {
            text-align: center !important;
          }
          td[class="em_align_cent1"] {
            text-align: center !important;
            padding-bottom: 10px !important;
          }
          td[class="em_height"] {
            height: 20px !important;
          }
          td[class="em_aside"] {
            padding-left: 10px !important;
            padding-right: 10px !important;
          }
          td[class="em_font"] {
            font-size: 14px !important;
            line-height: 28px !important;
          }
          span[class="em_br"] {
            display: block !important;
          }
        }
      </style>
    </head>
    <body style="margin: 0px; padding: 0px" bgcolor="#ffffff">
      <table
        width="100%"
        border="0"
        cellspacing="0"
        cellpadding="0"
        bgcolor="#ffffff"
      >
        <!-- === PRE HEADER SECTION=== -->
        <tr>
          <td align="center" valign="top" bgcolor="#30373b">
            <table
              width="600"
              cellpadding="0"
              cellspacing="0"
              border="0"
              align="center"
              class="em_main_table"
              style="table-layout: fixed"
            >
              <tr>
                <td
                  style="line-height: 0px; font-size: 0px"
                  width="600"
                  class="em_hide"
                  bgcolor="#30373b"
                ></td>
              </tr>
              <tr>
                <td valign="top">
                  <table
                    width="600"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    align="center"
                    class="em_wrapper"
                  >
                    <tr>
                      <td
                        height="10"
                        class="em_height"
                        style="font-size: 1px; line-height: 1px"
                      >
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td
                        height="10"
                        class="em_height"
                        style="font-size: 1px; line-height: 1px"
                      >
                        &nbsp;
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- === //PRE HEADER SECTION=== -->
        <!-- === BODY SECTION=== -->
        <tr>
          <td align="center" valign="top" bgcolor="#ffffff">
            <table
              width="600"
              cellpadding="0"
              cellspacing="0"
              border="0"
              align="center"
              class="em_main_table"
              style="table-layout: fixed"
            >
              <!-- === LOGO SECTION === -->
              <tr>
                <td height="40" class="em_height">&nbsp;</td>
              </tr>
              <tr>
                <td align="center">
                  <a href="#" target="_blank" style="text-decoration: none"
                    ><img
                      src="https://deftnt-blog.herokuapp.com/favicon.ico"
                      width="230"
                      height="80"
                      style="
                        display: block;
                        font-family: Arial, sans-serif;
                        font-size: 15px;
                        line-height: 18px;
                        color: #30373b;
                        font-weight: bold;
                      "
                      border="0"
                      alt="LoGo Here"
                  /></a>
                </td>
              </tr>
              <tr>
                <td height="30" class="em_height">&nbsp;</td>
              </tr>
              <!-- === //LOGO SECTION === -->
              <!-- === NEVIGATION SECTION === -->
              <tr>
                <td
                  height="1"
                  bgcolor="#fed69c"
                  style="font-size: 0px; line-height: 0px"
                >
                  <img
                    src="https://www.sendwithus.com/assets/img/emailmonks/images/spacer.gif"
                    width="1"
                    height="1"
                    style="display: block"
                    border="0"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <td height="14" style="font-size: 1px; line-height: 1px">
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  style="
                    font-family: 'Open Sans', Arial, sans-serif;
                    font-size: 15px;
                    line-height: 18px;
                    color: #30373b;
                    text-transform: uppercase;
                    font-weight: bold;
                  "
                  class="em_font"
                >
                  <a
                    href="https://deftnt-blog.herokuapp.com/"
                    target="_blank"
                    style="text-decoration: none; color: #30373b"
                    >home</a
                  >
                  &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href="https://deftnt-blog.herokuapp.com/about"
                    target="_blank"
                    style="text-decoration: none; color: #30373b"
                    >about</a
                  ><span class="em_hide">
                    &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; </span
                  ><span class="em_br"></span
                  ><a
                    href="https://deftnt-blog.herokuapp.com/#work"
                    target="_blank"
                    style="text-decoration: none; color: #30373b"
                    >works</a
                  >
                  &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                  <a
                    href="https://deftnt-blog.herokuapp.com/#contact"
                    target="_blank"
                    style="text-decoration: none; color: #30373b"
                    >contact us</a
                  >
                </td>
              </tr>
              <tr>
                <td height="14" style="font-size: 1px; line-height: 1px">
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td
                  height="1"
                  bgcolor="#fed69c"
                  style="font-size: 0px; line-height: 0px"
                >
                  <img
                    src="https://www.sendwithus.com/assets/img/emailmonks/images/spacer.gif"
                    width="1"
                    height="1"
                    style="display: block"
                    border="0"
                    alt=""
                  />
                </td>
              </tr>
              <!-- === //NEVIGATION SECTION === -->
              <!-- === IMG WITH TEXT AND COUPEN CODE SECTION === -->
              <tr>
                <td valign="top" class="em_aside">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td height="36" class="em_height">&nbsp;</td>
                    </tr>
                    <tr>
                      <td valign="middle" align="center">
                        <img
                          src="https://www.sendwithus.com/assets/img/emailmonks/images/banner.jpg"
                          width="333"
                          height="303"
                          alt="WELCOME"
                          style="
                            display: block;
                            font-family: Arial, sans-serif;
                            font-size: 25px;
                            line-height: 303px;
                            color: #c27cbb;
                            max-width: 333px;
                          "
                          class="em_full_img"
                          border="0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td height="41" class="em_height">&nbsp;</td>
                    </tr>
                    <tr>
                      <td
                        height="1"
                        bgcolor="#d8e4f0"
                        style="font-size: 0px; line-height: 0px"
                      >
                        <img
                          src="https://www.sendwithus.com/assets/img/emailmonks/images/spacer.gif"
                          width="1"
                          height="1"
                          alt=""
                          style="display: block"
                          border="0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td height="35" class="em_height">&nbsp;</td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        style="
                          font-family: 'Open Sans', Arial, sans-serif;
                          font-size: 15px;
                          font-weight: bold;
                          line-height: 18px;
                          color: #30373b;
                        "
                      >
                        Hi, ${name}
                      </td>
                    </tr>
                    <tr>
                      <td height="22" style="font-size: 1px; line-height: 1px">
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        style="
                          font-family: 'Open Sans', Arial, sans-serif;
                          font-size: 18px;
                          font-weight: bold;
                          line-height: 20px;
                          color: #feae39;
                        "
                      >
                        ${description}
                      </td>
                    </tr>
                    <tr>
                      <td height="20" style="font-size: 1px; line-height: 1px">
                        &nbsp;
                      </td>
                    </tr>
                    <tr>
                      <td height="34" class="em_height">&nbsp;</td>
                    </tr>
                    <tr>
                      <td
                        align="center"
                        style="
                          font-family: 'Open Sans', Arial, sans-serif;
                          font-size: 15px;
                          line-height: 22px;
                          color: #999999;
                        "
                      >
                        If you have any further questions, you can send it to me
                        via this email.
                      </td>
                    </tr>
                    <tr>
                      <td height="31" class="em_height">&nbsp;</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- === //IMG WITH TEXT AND COUPEN CODE SECTION === -->
            </table>
          </td>
        </tr>
        <!-- === //BODY SECTION=== -->
        <!-- === FOOTER SECTION === -->
        <tr>
          <td align="center" valign="top" bgcolor="#30373b" class="em_aside">
            <table
              width="600"
              cellpadding="0"
              cellspacing="0"
              border="0"
              align="center"
              class="em_main_table"
              style="table-layout: fixed"
            >
              <tr>
                <td height="35" class="em_height">&nbsp;</td>
              </tr>
              <tr>
                <td valign="top" align="center">
                  <table
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                    align="center"
                  >
                    <tr>
                      <td valign="top">
                        <a
                          href="https://www.facebook.com/beatboxer.mrteo"
                          target="_blank"
                          style="text-decoration: none"
                          ><img
                            src="https://www.sendwithus.com/assets/img/emailmonks/images/fb.png"
                            width="26"
                            height="26"
                            style="
                              display: block;
                              font-family: Arial, sans-serif;
                              font-size: 10px;
                              line-height: 18px;
                              color: #feae39;
                            "
                            border="0"
                            alt="Fb"
                        /></a>
                      </td>
                      <td width="7">&nbsp;</td>
                      <td valign="top">
                        <a
                          href="https://twitter.com/TNTLeeTeo"
                          target="_blank"
                          style="text-decoration: none"
                          ><img
                            src="https://www.sendwithus.com/assets/img/emailmonks/images/tw.png"
                            width="26"
                            height="26"
                            style="
                              display: block;
                              font-family: Arial, sans-serif;
                              font-size: 10px;
                              line-height: 18px;
                              color: #feae39;
                            "
                            border="0"
                            alt="Tw"
                        /></a>
                      </td>
                      <td width="7">&nbsp;</td>
                      <td valign="top">
                        <a href="#" target="_blank" style="text-decoration: none"
                          ><img
                            src="https://www.sendwithus.com/assets/img/emailmonks/images/pint.png"
                            width="26"
                            height="26"
                            style="
                              display: block;
                              font-family: Arial, sans-serif;
                              font-size: 10px;
                              line-height: 18px;
                              color: #feae39;
                            "
                            border="0"
                            alt="pint"
                        /></a>
                      </td>
                      <td width="7">&nbsp;</td>
                      <td valign="top">
                        <a
                          href="mailto:thanhnl0697@gmail.com"
                          target="_blank"
                          style="text-decoration: none"
                          ><img
                            src="https://www.sendwithus.com/assets/img/emailmonks/images/google.png"
                            width="26"
                            height="26"
                            style="
                              display: block;
                              font-family: Arial, sans-serif;
                              font-size: 10px;
                              line-height: 18px;
                              color: #feae39;
                            "
                            border="0"
                            alt="G+"
                        /></a>
                      </td>
                      <td width="7">&nbsp;</td>
                      <td valign="top">
                        <a
                          href="https://www.instagram.com/deftnguyen/"
                          target="_blank"
                          style="text-decoration: none"
                          ><img
                            src="https://www.sendwithus.com/assets/img/emailmonks/images/insta.png"
                            width="26"
                            height="26"
                            style="
                              display: block;
                              font-family: Arial, sans-serif;
                              font-size: 10px;
                              line-height: 18px;
                              color: #feae39;
                            "
                            border="0"
                            alt="Insta"
                        /></a>
                      </td>
                      <td width="7">&nbsp;</td>
                      <td valign="top">
                        <a href="#" target="_blank" style="text-decoration: none"
                          ><img
                            src="https://www.sendwithus.com/assets/img/emailmonks/images/yt.png"
                            width="26"
                            height="26"
                            style="
                              display: block;
                              font-family: Arial, sans-serif;
                              font-size: 10px;
                              line-height: 18px;
                              color: #feae39;
                            "
                            border="0"
                            alt="Yt"
                        /></a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td height="22" class="em_height">&nbsp;</td>
              </tr>
              <tr>
                <td height="10" style="font-size: 1px; line-height: 1px">
                  &nbsp;
                </td>
              </tr>
              <tr>
                <td
                  align="center"
                  style="
                    font-family: 'Open Sans', Arial, sans-serif;
                    font-size: 12px;
                    line-height: 18px;
                    color: #848789;
                    text-transform: uppercase;
                  "
                >
                  &copy;2&zwnj;021 Thanh Ly. All Rights Reserved.
                </td>
              </tr>
              <tr>
                <td height="10" style="font-size: 1px; line-height: 1px">
                  &nbsp;
                </td>
              </tr>
  
              <tr>
                <td height="35" class="em_height">&nbsp;</td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- === //FOOTER SECTION === -->
      </table>
      <div
        style="
          display: none;
          white-space: nowrap;
          font: 20px courier;
          color: #ffffff;
          background-color: #ffffff;
        "
      >
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp;
      </div>
    </body>
  </html>  
`;
};

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
  accessToken: process.env.WIT_TOKEN,
  logger: new log.Logger(log.ERROR),
});
// interactive(client);
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: "ap1",
  useTLS: true,
});

const formatBotMsg = (message, channel) => {
  return {
    id: process.env.WIT_TOKEN,
    user: "Tèo Bot",
    message,
    channel,
    createdAt: Date.now(),
  };
};
const formatBotMsgToSave = (message, channel) => {
  return {
    senderId: process.env.WIT_TOKEN,
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
    urlGetKey = encodeURI(urlGetKey);
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
    urlSearch = encodeURI(urlSearch);
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
        try {
          if (resOfBot === "") {
            const completion = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: message,
              temperature: 0.6,
            });
            resOfBot = completion.data.choices[0].text;
          }
        } catch (error) {
          console.log(error);
        }
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
  async healthCheck(ctx) {
    try {
      ctx.send({ description: "Server is Ok!" });
    } catch {
      ctx.status = 500;
      ctx.send({ description: "Internal Server" });
    }
  },

  async sendMail(ctx) {
    let { email, name, description } = ctx.request.body;
    try {
      const nameSender = name;
      const nameReceiver = "Thành Lý";
      const descriptionSender = `Thanks for your mail. I have received it. I'll take a look
      at soon and update to you.`;
      const descriptionReceiver = `Email: ${email}<br/>Name: ${name}Message: ${description}<br/>`;
      const subjectSender = `[Deftnt-Blog] We have received your email`;
      const subjectReceiver = `Notice: You have a contact from ${name} - ${email}`;
      const textSender = template(nameSender, descriptionSender);
      const textReceiver = template(nameReceiver, descriptionReceiver);
      const optionsSender = {
        to: email,
        subject: subjectSender,
        text: textSender,
        html: textSender,
      };
      const optionsReceiver = {
        to: process.env.EMAIL_RECEIVE_CONTACT,
        subject: subjectReceiver,
        text: textReceiver,
        html: textReceiver,
      };
      await strapi.plugins.email.services.email.send(optionsSender);
      await strapi.plugins.email.services.email.send(optionsReceiver);
    } catch (e) {
      if (e.statusCode === 400) {
        return ctx.badRequest(e.message);
      } else {
        throw new Error(`Couldn't send email: ${e.message}.`);
      }
    }
    // Send 200 `ok`
    ctx.send({});
  },
  async sendCall(ctx) {
    const { channelId, callerId, receiverId } = ctx.request.body;
    const data = { channelId, callerId, receiverId };
    pusher.trigger("call-channel", "trigger-call", data);

    return ctx.send({});
  },
};
