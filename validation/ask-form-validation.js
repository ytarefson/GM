const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateFormInput(data) {
  let errors = {};

  data.organizationname = !isEmpty(data.organizationname)
    ? data.organizationname
    : '';
  // data.organizationadres = !isEmpty(data.organizationadres)
  //   ? data.organizationadres
  //   : '';
  data.organizationrole = !isEmpty(data.organizationrole)
    ? data.organizationrole
    : '';
  // data.personname = !isEmpty(data.personname) ? data.personname : '';
  // data.personstatus = !isEmpty(data.personstatus) ? data.personstatus : '';
  // data.personemail = !isEmpty(data.personemail) ? data.personemail : '';
  // data.personphone = !isEmpty(data.personphone) ? data.personphone : '';
  // data.personmobile = !isEmpty(data.personmobile) ? data.personmobile : '';
  // data.personfax = !isEmpty(data.personfax) ? data.personfax : '';
  // data.projectclientname = !isEmpty(data.projectclientname)
  //   ? data.projectclientname
  //   : '';
  // data.projectmountadres = !isEmpty(data.projectmountadres)
  //   ? data.projectmountadres
  //   : '';
  // // projecttargets: [],
  // data.projectdescription = !isEmpty(data.projectdescription)
  //   ? data.projectdescription
  //   : '';
  // data.operationmode = !isEmpty(data.operationmode) ? data.operationmode : '';
  // data.proposedmodel = !isEmpty(data.proposedmodel) ? data.proposedmodel : '';
  // data.electricpower = !isEmpty(data.electricpower) ? data.electricpower : '';
  // data.connectiontype = !isEmpty(data.connectiontype)
  //   ? data.connectiontype
  //   : '';
  // data.maximumload = !isEmpty(data.maximumload) ? data.maximumload : '';
  // data.minimalload = !isEmpty(data.minimalload) ? data.minimalload : '';
  // data.maximumpossibleload = !isEmpty(data.maximumpossibleload)
  //   ? data.maximumpossibleload
  //   : '';
  // data.energyloadgraph = !isEmpty(data.energyloadgraph)
  //   ? data.energyloadgraph
  //   : '';
  // data.requiredvoltage = !isEmpty(data.requiredvoltage)
  //   ? data.requiredvoltage
  //   : '';
  // data.installationsettings = !isEmpty(data.installationsettings)
  //   ? data.installationsettings
  //   : '';
  // data.deliveryoptions = !isEmpty(data.deliveryoptions)
  //   ? data.deliveryoptions
  //   : '';
  // data.locationparams = !isEmpty(data.locationparams)
  //   ? data.locationparams
  //   : '';
  // data.additionalrequirements = !isEmpty(data.additionalrequirements)
  //   ? data.additionalrequirements
  //   : '';
  // data.fueltype = !isEmpty(data.fueltype) ? data.fueltype : '';
  // data.fueltank = !isEmpty(data.fueltank) ? data.fueltank : '';
  // data.gaspressurerange = !isEmpty(data.gaspressurerange)
  //   ? data.gaspressurerange
  //   : '';
  // data.utilsystem = !isEmpty(data.utilsystem) ? data.utilsystem : '';
  // data.reqheatpower = !isEmpty(data.reqheatpower) ? data.reqheatpower : '';
  // data.maxobjectload = !isEmpty(data.maxobjectload) ? data.maxobjectload : '';
  // data.minobjectload = !isEmpty(data.minobjectload) ? data.minobjectload : '';
  // data.gasgraph = !isEmpty(data.gasgraph) ? data.gasgraph : '';
  // data.chefmontage = !isEmpty(data.chefmontage) ? data.chefmontage : '';
  // data.stafflearning = !isEmpty(data.stafflearning) ? data.stafflearning : '';
  // data.otherworks = !isEmpty(data.otherworks) ? data.otherworks : '';
  // data.gasprice = !isEmpty(data.gasprice) ? data.gasprice : '';
  // data.currentenergytarif = !isEmpty(data.currentenergytarif)
  //   ? data.currentenergytarif
  //   : '';
  // data.currentheattarif = !isEmpty(data.currentheattarif)
  //   ? data.currentheattarif
  //   : '';
  // data.annualgeneratingtime = !isEmpty(data.annualgeneratingtime)
  //   ? data.annualgeneratingtime
  //   : '';
  // data.commentary = !isEmpty(data.commentary) ? data.commentary : '';

  if (Validator.isEmpty(data.organizationname)) {
    errors.organizationname = 'organizationname field is empty';
  }
  // if (Validator.isEmpty(data.organizationadres)) {
  //   errors.organizationadres = 'organizationadres field is empty';
  // }
  if (Validator.isEmpty(data.organizationrole)) {
    errors.organizationrole = 'organizationrole field is empty';
  }
  // if (Validator.isEmpty(data.personname)) {
  //   errors.personname = 'personname field is empty';
  // }
  // if (Validator.isEmpty(data.personstatus)) {
  //   errors.personstatus = 'personstatus field is empty';
  // }
  // if (Validator.isEmpty(data.personemail)) {
  //   errors.personemail = 'personemail field is empty';
  // }
  // if (Validator.isEmpty(data.personphone)) {
  //   errors.personphone = 'personphone field is empty';
  // }
  // if (Validator.isEmpty(data.personmobile)) {
  //   errors.personmobile = 'personmobile field is empty';
  // }
  // if (Validator.isEmpty(data.personfax)) {
  //   errors.personfax = 'personfax field is empty';
  // }
  // if (Validator.isEmpty(data.projectclientname)) {
  //   errors.projectclientname = 'projectclientname field is empty';
  // }
  // if (Validator.isEmpty(data.projectmountadres)) {
  //   errors.projectmountadres = 'projectmountadres field is empty';
  // }
  // if (Validator.isEmpty(data.projectdescription)) {
  //   errors.projectdescription = 'projectdescription field is empty';
  // }
  // if (Validator.isEmpty(data.operationmode)) {
  //   errors.operationmode = 'operationmode field is empty';
  // }
  // if (Validator.isEmpty(data.proposedmodel)) {
  //   errors.proposedmodel = 'proposedmodel field is empty';
  // }
  // if (Validator.isEmpty(data.electricpower)) {
  //   errors.electricpower = 'electricpower field is empty';
  // }
  // if (Validator.isEmpty(data.connectiontype)) {
  //   errors.connectiontype = 'connectiontype field is empty';
  // }
  // if (Validator.isEmpty(data.maximumload)) {
  //   errors.maximumload = 'maximumload field is empty';
  // }
  // if (Validator.isEmpty(data.minimalload)) {
  //   errors.minimalload = 'minimalload field is empty';
  // }
  // if (Validator.isEmpty(data.maximumpossibleload)) {
  //   errors.maximumpossibleload = 'maximumpossibleload field is empty';
  // }
  // if (Validator.isEmpty(data.energyloadgraph)) {
  //   errors.energyloadgraph = 'energyloadgraph field is empty';
  // }
  // if (Validator.isEmpty(data.requiredvoltage)) {
  //   errors.requiredvoltage = 'requiredvoltage field is empty';
  // }
  // if (Validator.isEmpty(data.installationsettings)) {
  //   errors.installationsettings = 'installationsettings field is empty';
  // }
  // if (Validator.isEmpty(data.deliveryoptions)) {
  //   errors.deliveryoptions = 'deliveryoptions field is empty';
  // }
  // if (Validator.isEmpty(data.locationparams)) {
  //   errors.locationparams = 'locationparams field is empty';
  // }
  // if (Validator.isEmpty(data.additionalrequirements)) {
  //   errors.additionalrequirements = 'additionalrequirements field is empty';
  // }
  // if (Validator.isEmpty(data.fueltype)) {
  //   errors.fueltype = 'fueltype field is empty';
  // }
  // if (Validator.isEmpty(data.fueltank)) {
  //   errors.fueltank = 'fueltank field is empty';
  // }
  // if (Validator.isEmpty(data.gaspressurerange)) {
  //   errors.gaspressurerange = 'gaspressurerange field is empty';
  // }
  // if (Validator.isEmpty(data.utilsystem)) {
  //   errors.utilsystem = 'utilsystem field is empty';
  // }
  // if (Validator.isEmpty(data.reqheatpower)) {
  //   errors.reqheatpower = 'reqheatpower field is empty';
  // }
  // if (Validator.isEmpty(data.maxobjectload)) {
  //   errors.maxobjectload = 'maxobjectload field is empty';
  // }
  // if (Validator.isEmpty(data.minobjectload)) {
  //   errors.minobjectload = 'minobjectload field is empty';
  // }
  // if (Validator.isEmpty(data.gasgraph)) {
  //   errors.gasgraph = 'gasgraph field is empty';
  // }
  // if (Validator.isEmpty(data.chefmontage)) {
  //   errors.chefmontage = 'chefmontage field is empty';
  // }
  // if (Validator.isEmpty(data.stafflearning)) {
  //   errors.stafflearning = 'stafflearning field is empty';
  // }
  // if (Validator.isEmpty(data.otherworks)) {
  //   errors.otherworks = 'otherworks field is empty';
  // }
  // if (Validator.isEmpty(data.gasprice)) {
  //   errors.gasprice = 'gasprice field is empty';
  // }
  // if (Validator.isEmpty(data.currentenergytarif)) {
  //   errors.currentenergytarif = 'currentenergytarif field is empty';
  // }
  // if (Validator.isEmpty(data.currentheattarif)) {
  //   errors.currentheattarif = 'currentheattarif field is empty';
  // }
  // if (Validator.isEmpty(data.annualgeneratingtime)) {
  //   errors.annualgeneratingtime = 'annualgeneratingtime field is empty';
  // }
  // if (Validator.isEmpty(data.commentary)) {
  //   errors.commentary = 'commentary field is empty';
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
