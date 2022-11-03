const mongoose = require("mongoose");
const listsCollection = require("../db").db().collection("lists");
const ObjectID = require("mongodb").ObjectID;

const listSchema = new mongoose.Schema({
  listName: String,
  listData: [],
});

let List = function (data) {
  this.data = data;
};

List.prototype.create = function () {
  return new Promise((resolve, reject) => {
    listsCollection
      .insertOne(this.data)
      .then((info) => {
        resolve(info.ops[0]._id);
      })
      .catch((e) => {
        reject(e);
      });
  });
};


List.prototype.update = function () {
  return new Promise((resolve, reject) => {
    listsCollection
      .updateOne({listName:this.data.listName},{$push:{movies:this.data.movie}})
      .then((info) => {
        resolve(info.ops[0]._id);
      })
      .catch((e) => {
        reject(e);
      });
  });
};


List.prototype.delete = function () {
  return new Promise((resolve, reject) => {
    listsCollection.delete({listName:this.data.listName},{$push:{movies:this.data.movie}})
      .then((info) => {
        resolve(info.ops[0]._id);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

module.exports = List;
