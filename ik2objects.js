
/*
* BUILDINGS 
* - object currently holds the cost of buildings.
*/
buildings = {
  structures : {'mh' : 0, 'gm' : 0, 'sq' : 0, 'lm' : 0, 'l' : 0, 'b' : 0, 'h' : 0, 'sh' : 0, 'sw' : 0, 'wt' : 0, },
  spaceCost : [0,2,5,8,12,17,23,30,39,49,62,77,94,116,142,172,209,254,307,371,448,540,650,782,941],
  usedSpace : 0
};
// 23 + 782 = 805
// to iterate through structure level values:
// alertstring = "";
// for (x in buildings.structureLevels) {
//  alertstring += buildings.structureLevels[x] + " ";
// }
// alert (alertstring);  // result is 0 0 0 0 0 0 0 0 ...


/*
* resources used in the game.  for functional reasons (because they can be counted), we're treating wall defense, storage capacity, and tower visibility as resources.
*/
resources = {
  goldRate : 0,
  stoneRate : 0,
  lumberRate : 0,
  storageCapacity : 0,
  defencePercent : 0,
  visibilityLevel : 0,
  gold : [8,9,11,13,16,19,23,28,34,41,49,59,71,85,102,123,147,177,212,255,306,368,441,529,635],
  stone : [5,6,7,8,10,12,14,17,21,25,30,37,44,53,64,77,92,110,133,159,191,230,276,331,397],
  lumber : [6,7,8,10,12,14,17,21,25,30,37,44,53,64,77,92,110,133,159,191,230,276,331,397,476],
  storage : [2500,3000,3600,4319,5184,6220,7464,8957,10749,12899,15479,18575,22290,26748,32097,38517,46221,55465,66558,79869,95843,115012,138015,165618,198742],
  defence : [0.0, 0.2, 0.4, 0.7, 1.1, 1.5, 2.0, 2.6, 3.3, 4.2, 5.2, 6.4, 7.9, 9.7, 11.8, 14.4, 17.5, 21.2, 25.6, 30.9, 37.3, 45.0, 54.2, 65.2, 78.5],
  visibilityRange : [4, 4.8, 5.7, 6.9, 8.2, 9.9, 11.9, 14.3, 17.1, 20.6, 24.7, 29.7, 35.6, 42.7, 51.3, 61.6, 73.9, 88.7, 106.4, 127.7, 153.3, 184, 220.8, 264.9, 317.9 ]
};








/*
* STONETHROWER
* - needs Barracks at level 1
*/
stonethrower = {
  label : 'stonethrower',
  isReady : false,
  requirements : {'b':1},
  buildTime : [ '', '0:59:51', '0:59:44', '0:59:33', '0:59:20', '0:59:06', '0:58:48', '0:58:27', '0:58:01', '0:57:30', '0:56:53', '0:56:09', '0:55:15', '0:54:11', '0:52:55', '0:51:23', '0:49:32', '0:47:20', '0:44:40', '0:41:30', '0:37:40', '0:33:0', '0:27:36', '0:21:00', '0:13:05'],
  cost : { 'gold':100, 'stone':150, 'lumber':50 }
};

spearman = {
  label : 'spearman',
  isReady : false,
  spearmanRequirements : {'l':1, 'b':5},
  buildTime : [ '', '', '', '', '', '1:28:39', '1:28:12', '1:27:40', '1:27:01', '1:26:15', '1:25:19', '1:24:12', '1:22:51', '1:21:14', '1:19:18', '1:16:59', '1:14:12', '1:10:51', '1:06:50', '1:02:01', '0:56:15', '0:49:18', '0:40:59', '0:31:00', '0:19:01'],
  cost : { 'gold':200, 'stone':50, 'lumber':100 }
};

archer = {
  label : 'archer',
  isReady : false,
  buildTime : ['','','','','','','','','','', '1:15:50', '1:14:51', '1:13:40', '1:12:15', '1:10:32', '1:08:30', '1:06:02', '1:03:05', '0:59:33', '0:55:19', '0:50:13', '0:44:07', '0:36:47', '0:27:59', '0:17:26'],
  cost : { 'gold':250, 'stone':50, 'lumber':50 }
};

catapult = {
  label : 'catapult',
  isReady : false,
  buildTime : [ '','','','','','','','','','','18:57:41','18:42:50','18:25:01','18:03:38','17:37:58','17:07:11','16:30:13','15:45:53','14:52:40','13:48:49','12:32:12','11:00:15','9:09:55','6:57:31','6:57:31'],
  cost : { 'gold':2000, 'stone':3000, 'lumber':2000 }
}

sws = {
  label : 'small warship',
  isReady : false,
  buildTime : [ '','3:19:36','3:19:07','3:18:32','3:17:51','3:17:01','3:16:01','3:14:49','3:13:23','3:11:40','3:09:36', '3:07:07','3:04:09','3:00:34','2:56:17','2:51:09','2:44:59','2:37:34','2:28:41','2:18:01','2:05:14','1:49:52','1:31:27','1:09:20','1:09:20'],
  cost : { 'gold':400, 'stone':0, 'lumber':300 }
}

sms = {
  label : 'small merchant',
  isReady : false,
  buildTime : ['','3:19:36','3:19:07','3:18:33','3:17:51','3:17:01','3:16:01','3:14:49','3:13:23','3:11:39','3:09:35','3:07:06','3:04:08','3:00:34','2:56:17','2:51:08','2:44:58','2:37:34','2:28:42','2:18:02','2:05:15','1:49:54','1:31:29','1:09:23','1:09:23'],
  cost : { 'gold':300, 'stone':0, 'lumber':450 }
}

lws = {
  label : 'large warship',
  isReady : false,
  buildTime : [ '','','','','','8:12:33','8:10:04','8:07:05','8:03:30','7:59:12','7:54:02','7:47:51','7:40:25','7:31:30','7:20:48','7:07:58','6:52:33','6:34:04','6:11:53','5:45:16','5:13:19','4:34:59','3:48:59','2:53:47','2:53:47'],
  cost : { 'gold':900, 'stone':0, 'lumber':800 }
}

lms = {
  label : 'large merchant',
  isReady : false,
  buildTime : [ '','','','','','9:51:04','9:48:05','9:44:30','9:40:12','9:35:02','9:28:50','9:21:24','9:12:28','9:01:45','8:48:53','8:33:28','8:14:57','7:52:43','7:26:04','6:54:04','6:15:40','5:29:36','4:34:19','3:27:58','3:27:58'],
  cost : { 'gold':600, 'stone':0, 'lumber':850 }
}

colo = {
  label : 'colony ship',
  isReady : false,
  buildTime : [ '','','','','','','','','','','26:20:08','25:59:28','25:34:40','25:04:54','24:29:11','23:46:20','22:54:54','21:53:12','20:39:08','19:10:17','17:23:38','15:15:40','12:42:07','12:42:07','12:42:07'],
  cost : { 'gold':35000, 'stone':0, 'lumber':25000 }
}




xxl = {
  schedule : {"stonie":0, "spear":0, "archer":0, "sws":0, "sms":0, "lws":0, "lms":0, "colo":0, "cat":0}, 
  dailyGoldCost : 0,
  dailyStoneCost : 0,
  dailyLumberCost : 0,
  
  dailyGoldLeft : 0,
  dailyStoneLeft : 0,
  dailyLumberLeft : 0,
  
  units : { "stonie": stonethrower, "spear":spearman, "archer":archer, "cat":catapult, "sws":sws, "sms":sms, "lws":lws, "lms":lms, "colo":colo }
}

