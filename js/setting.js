/*
 * Icons for COFOG taxonomy
 *
 */
var Taxes = Taxes || {};

Taxes.baseKoujo = 330000; // 住民税基礎控除
Taxes.huyoKoujo = 330000; // 一人分の扶養控除
Taxes.taxRate = 0.06; // 住民税率

var OpenSpending = OpenSpending || {};

OpenSpending.identifier = 'tama_budget';
OpenSpending.year = '2014';

OpenSpending.Styles = OpenSpending.Styles || {};

OpenSpending.Styles.Cofog = {

  /* tama cofig */
  // 議会費(1)
  '1':    { color: '#009EE3', bcolor: '#935B3B', icon: 'icons/civilian-action.svg'},
  '1-1':  { color: '#009EE3', bcolor: '#935B3B', icon: 'icons/civilian-action.svg'},
  // 総務費(2)
  '2':    { color: '#009EE3', bcolor: '#0AB971', icon: 'icons/publicaffairs.svg'},
  '2-1':  { color: '#009EE3', bcolor: '#0AB971', icon: 'icons/publicaffairs.svg'},
  '2-2':  { color: '#009EE3', bcolor: '#0AB971', icon: 'icons/publicaffairs.svg'},
  '2-3':  { color: '#009EE3', bcolor: '#0AB971', icon: 'icons/publicaffairs.svg'},
  '2-4':  { color: '#009EE3', bcolor: '#0AB971', icon: 'icons/publicaffairs.svg'},
  '2-5':  { color: '#009EE3', bcolor: '#0AB971', icon: 'icons/publicaffairs.svg'},
  '2-6':  { color: '#009EE3', bcolor: '#0AB971', icon: 'icons/publicaffairs.svg'},
  '2-7':  { color: '#009EE3', bcolor: '#0AB971', icon: 'icons/publicaffairs.svg'},
  // 民生費(3)
  '3':    { color: '#009EE3', bcolor: '#4E6D00', icon: 'icons/family.svg'},
  '3-1':  { color: '#009EE3', bcolor: '#4E6D00', icon: 'icons/family.svg'},
  '3-2':  { color: '#009EE3', bcolor: '#4E6D00', icon: 'icons/family.svg'},
  '3-3':  { color: '#009EE3', bcolor: '#4E6D00', icon: 'icons/family.svg'},
  '3-4':  { color: '#009EE3', bcolor: '#4E6D00', icon: 'icons/family.svg'},
  '3-5':  { color: '#009EE3', bcolor: '#4E6D00', icon: 'icons/family.svg'},
  // 衛生費(4)
  '4':    { color: '#009EE3', bcolor: '#D33673', icon: 'icons/health.svg'},
  '4-1':  { color: '#009EE3', bcolor: '#D33673', icon: 'icons/health.svg'},
  '4-2':  { color: '#009EE3', bcolor: '#D33673', icon: 'icons/health.svg'},
  // 労働費(5)
  '5':    { color: '#009EE3', bcolor: '#2A3A03', icon: 'icons/human-resources.svg'},
  '5-1':  { color: '#009EE3', bcolor: '#2A3A03', icon: 'icons/human-resources.svg'},
  // 農林業費(6)
  '6':    { color: '#009EE3', bcolor: '#EC2406', icon: 'icons/forest.svg'},
  '6-1':  { color: '#009EE3', bcolor: '#EC2406', icon: 'icons/forest.svg'},
  '6-2':  { color: '#009EE3', bcolor: '#EC2406', icon: 'icons/forest.svg'},
  // 商工費(7)
  '7':    { color: '#009EE3', bcolor: '#938626', icon: 'icons/traffic-watersup.svg'},
  '7-1':  { color: '#009EE3', bcolor: '#938626', icon: 'icons/traffic-watersup.svg'},
  // 土木費(8)
  '8':    { color: '#009EE3', bcolor: '#C75746', icon: 'icons/coal.svg'},
  '8-1':  { color: '#009EE3', bcolor: '#C75746', icon: 'icons/coal.svg'},
  '8-2':  { color: '#009EE3', bcolor: '#C75746', icon: 'icons/coal.svg'},
  '8-3':  { color: '#009EE3', bcolor: '#C75746', icon: 'icons/coal.svg'},
  '8-4':  { color: '#009EE3', bcolor: '#C75746', icon: 'icons/coal.svg'},
  // 消防費(9)
  '9':    { color: '#009EE3', bcolor: '#D33673', icon: 'icons/order-safety.svg'},
  '9-1':  { color: '#009EE3', bcolor: '#D33673', icon: 'icons/order-safety.svg'},
  // 教育費(10)
  '10':   { color: '#009EE3', bcolor: '#790586', icon: 'icons/schools.svg'},
  '10-1': { color: '#009EE3', bcolor: '#790586', icon: 'icons/schools.svg'},
  '10-2': { color: '#009EE3', bcolor: '#790586', icon: 'icons/schools.svg'},
  '10-3': { color: '#009EE3', bcolor: '#790586', icon: 'icons/schools.svg'},
  '10-4': { color: '#009EE3', bcolor: '#790586', icon: 'icons/schools.svg'},
  '10-5': { color: '#009EE3', bcolor: '#790586', icon: 'icons/schools.svg'},
  '10-6': { color: '#009EE3', bcolor: '#790586', icon: 'icons/schools.svg'},
  // 災害復旧費(11)
  '11':   { color: '#009EE3', bcolor: '#790586', icon: 'icons/restoration.svg'},
  '11-1': { color: '#009EE3', bcolor: '#790586', icon: 'icons/restoration.svg'},
  '11-2': { color: '#009EE3', bcolor: '#790586', icon: 'icons/restoration.svg'},
  '11-3': { color: '#009EE3', bcolor: '#790586', icon: 'icons/restoration.svg'},
  '11-4': { color: '#009EE3', bcolor: '#790586', icon: 'icons/restoration.svg'},
  // 公債費(12)
  '12':   { color: '#009EE3', bcolor: '#790586', icon: 'icons/money.svg'},
  '12-1': { color: '#009EE3', bcolor: '#790586', icon: 'icons/money.svg'},
  // 諸支出金(13)
  '13':   { color: '#009EE3', bcolor: '#790586', icon: 'icons/money.svg'},
  '13-1': { color: '#009EE3', bcolor: '#790586', icon: 'icons/money.svg'},
  // 予備費(14)
  '14':   { color: '#009EE3', bcolor: '#790586', icon: 'icons/financial-admin.svg'},
  '14-1': { color: '#009EE3', bcolor: '#790586', icon: 'icons/financial-admin.svg'}
};


