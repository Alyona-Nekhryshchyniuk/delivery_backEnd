const { model } = require("mongoose");
const { schema } = require("./schema");

const BurgerkingModel = model("Burgerkingmenu", schema);
const PepperPointModel = model("Pepperpointmenu", schema);
const KFSModel = model("Kfsmenu", schema);
const VilkiPalkiModel = model("Vilkipalkimenu", schema);
const YaposhkaModel = model("Yaposhkamenu", schema);
const MacModel = model("Macdonaldsmenu", schema);

const DefineModel = (shop) => {
  switch (shop) {
    case "yaposhka":
      return YaposhkaModel;
    case "vilkipalki":
      return VilkiPalkiModel;
    case "pepperpoint":
      return PepperPointModel;
    case "kfs":
      return KFSModel;
    case "burgerking":
      return BurgerkingModel;
    case "macdonalds":
      return MacModel;
    default:
      return null;
  }
};

module.exports = { DefineModel };
