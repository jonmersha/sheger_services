const express = require("express");
//const app = express();
const router = express.Router();

//Crud Opearions
const insertOP = require("../../utils/insert");
const selectOP = require("../../utils/select");
const updateOP = require("../../utils/update");
const deleteOP = require("../../utils/delete");

//Tables
  //videos
  //uploader
  //users
  //user_view_history
  //channels
  //channel_subscription
  //play_list
  //video_group


//Call Back Functions
const callFunc = require("./call_backs");

//==========video=======
//get all
router.get("/video", async (req, res) => {
  const stm = selectOP.selectAll("videos");
  callFunc.addDataCallBack(stm, res);
});
//get By ID
router.get("/video/:id", async (req, res) => {
  const id=req.params.id;
  const stm = selectOP.selectCTR("videos",id,"id");
  callFunc.addDataCallBack(stm, res);
});
//by channel
router.get("/video/channel/:id", async (req, res) => {
  const id=req.params.id;
  const stm = selectOP.selectCTR("videos",id,"channel_id");
  callFunc.addDataCallBack(stm, res);
});

//by aploaders
router.get("/video/uploader/:id", async (req, res) => {
  const id=req.params.id;
  const stm = selectOP.selectCTR("videos",id,"video_uploder");
  callFunc.addDataCallBack(stm, res);
});
//uploader
router.get("/uploader", async (req, res) => {
  const stm = selectOP.selectAll("uploader");
  callFunc.addDataCallBack(stm, res);
});
//uploader by ID
router.get("/uploader/:id", async (req, res) => {
  const id=req.params.id;
  const stm = selectOP.selectCTR("uploader",id,"id");
  callFunc.addDataCallBack(stm, res);
});

//users
router.get("/users", async (req, res) => {
  const stm = selectOP.selectAll("users");
  callFunc.addDataCallBack(stm, res);
});
// user by id
router.get("/users/:id", async (req, res) => {
  const id=req.params.id;
  const stm = selectOP.selectCTR("users",id,"id");
  callFunc.addDataCallBack(stm, res);
});
  //user_view_history
  router.get("/user_view_history", async (req, res) => {
    const stm = selectOP.selectAll("user_view_history");
    callFunc.addDataCallBack(stm, res);
  });

  //user_view_history by video ID
  router.get("/user_view_history/video/:id", async (req, res) => {
    const id=req.params.id;
  const stm = selectOP.selectCTR("user_view_history",id,"video_id");
  callFunc.addDataCallBack(stm, res);
  });
  //user_view_history by user ID
  router.get("/user_view_history/user/:id", async (req, res) => {
    const id=req.params.id;
  const stm = selectOP.selectCTR("user_view_history",id,"user_id");
  callFunc.addDataCallBack(stm, res);
  });
  //channels
  router.get("/channels", async (req, res) => {
    const stm = selectOP.selectAll("channels");
    callFunc.addDataCallBack(stm, res);
  });
  router.get("/channels/:id", async (req, res) => {
    const id=req.params.id;
  const stm = selectOP.selectCTR("channels",id,"id");
  callFunc.addDataCallBack(stm, res);
  });
  //channel_subscription
  router.get("/channel_subscription", async (req, res) => {
    const stm = selectOP.selectAll("channel_subscription");
    callFunc.addDataCallBack(stm, res);
  });
  router.get("/channel_subscription/:id", async (req, res) => {
    const id=req.params.id;
  const stm = selectOP.selectCTR("channel_subscription",id,"id");
  callFunc.addDataCallBack(stm, res);
  });
  //play_list
  router.get("/play_list", async (req, res) => {
    const stm = selectOP.selectAll("play_list");
    callFunc.addDataCallBack(stm, res);
  });
  //by id
  router.get("/play_list/:id", async (req, res) => {
    const id=req.params.id;
  const stm = selectOP.selectCTR("play_list",id,"id");
  callFunc.addDataCallBack(stm, res);
  });
  //video_group
  router.get("/video_group", async (req, res) => {
    const stm = selectOP.selectAll("video_group");
    callFunc.addDataCallBack(stm, res);
  });
  //by id
  router.get("/video_group/:id", async (req, res) => {
    const id=req.params.id;
  const stm = selectOP.selectCTR("video_group",id,"id");
  callFunc.addDataCallBack(stm, res);
  });



//==========================Post Section============
//videos
router.post("/video/add", (req, res) => {
  let stm = insertOP.insert("videos", req.body);
  callFunc.addDataCallBack(stm, res);
});
  //uploader
  router.post("/uploader/add", (req, res) => {
    let stm = insertOP.insert("uploader", req.body);
    callFunc.addDataCallBack(stm, res);
  });

  //users
  router.post("/users/add", (req, res) => {
    let stm = insertOP.insert("users", req.body);
    callFunc.addDataCallBack(stm, res);
  });
  //user_view_history
  router.post("/user_view_history/add", (req, res) => {
    let stm = insertOP.insert("user_view_history", req.body);
    callFunc.addDataCallBack(stm, res);
  });
  //channels
  router.post("/channels/add", (req, res) => {
    let stm = insertOP.insert("channels", req.body);
    callFunc.addDataCallBack(stm, res);
  });
  //channel_subscription
  router.post("/channel_subscription/add", (req, res) => {
    let stm = insertOP.insert("channel_subscription", req.body);
    callFunc.addDataCallBack(stm, res);
  });
  //play_list
  router.post("/play_list/add", (req, res) => {
    let stm = insertOP.insert("play_list", req.body);
    callFunc.addDataCallBack(stm, res);
  });
  //video_group
  router.post("/video_group/add", (req, res) => {
    let stm = insertOP.insert("video_group", req.body);
    callFunc.addDataCallBack(stm, res);
  });



router.get("/series/get", async (req, res) => {
  const stm = selectOP.selectAll("series");
  callFunc.addDataCallBack(stm, res);
});

router.get("/sub/:id", async (req, res) => {
  const id=req.params.id;
  const stm = selectOP.selectCTR("series",id,"Parent_ID");
  callFunc.addDataCallBack(stm, res);
});




router.get("/save", (req, res) => {
  res.send(
    "this is my life, Program development is the best thing i can do for ever"
  );
});
router.post("/add", (req, res) => {
  let stm = insertOP.insert("movie", req.body);
  callFunc.addDataCallBack(stm, res);
});

router.post("/series/add", (req, res) => {
  let stm = insertOP.insert("series", req.body);
  callFunc.addDataCallBack(stm, res);
});

module.exports = router;
