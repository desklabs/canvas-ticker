var events = require('events');

function Ticker(client, id) {
  this.id = id + '-' + new Date().getTime();
  this.client = client;
  this.currentTime = 0;
  this.paused = false;
  this.loop = false;
  this.totalTime = 0;
  this.agentTime = 0;
  this.typeTotalTime = 0;
  this.typeAgentTime = 0;
  this.currentType = 'totalTime';

  this.client.multi()
      .keys('*-' + this.getCaseId() + '-*')
      .keys(this.getAgentId() + '-' + this.getCaseId() + '-*')
      .keys('*-' + this.getCaseId() + '-' + this.getTypeId() + '-*')
      .keys(this.getAgentId() + '-' + this.getCaseId() + '-' + this.getTypeId() + '-*')
      .exec(this.getTimestampValues.bind(this));
}

Ticker.prototype.__proto__ = events.EventEmitter.prototype;

var exports = module.exports = Ticker;

Ticker.prototype.getTimestampValues = function(err, data) {
  var caseKeys          = data[0]
    , agentCaseKeys     = data[1]
    , caseTypeKeys      = data[2]
    , agentCaseTypeKeys = data[3]
    , self = this

  this.client.mget(caseKeys, this.setTotalTime.bind(this));
  this.client.mget(agentCaseKeys, this.setAgentTime.bind(this));
  this.client.mget(caseTypeKeys, this.setTypeTotalTime.bind(this));
  this.client.mget(agentCaseTypeKeys, this.setTypeAgentTime.bind(this));
}

Ticker.prototype.setTotalTime = function(err, data) {
  this.totalTime = (data || []).reduce(function(one, two) { return Number(one) + Number(two); }, 0);
}

Ticker.prototype.setAgentTime = function(err, data) {
  this.agentTime = (data || []).reduce(function(one, two) { return Number(one) + Number(two); }, 0);
}

Ticker.prototype.setTypeTotalTime = function(err, data) {
  this.typeTotalTime = (data || []).reduce(function(one, two) { return Number(one) + Number(two); }, 0);
}

Ticker.prototype.setTypeAgentTime = function(err, data) {
  this.typeAgentTime = (data || []).reduce(function(one, two) { return Number(one) + Number(two); }, 0);
}

Ticker.prototype.setCurrentTime = function(time) {
  this.currentTime = time;
  this.emit('change', this.currentTime);
}

Ticker.prototype.getAgentId = function() {
  return this.id.split('-')[0];
}

Ticker.prototype.getCaseId = function() {
  return this.id.split('-')[1];
}

Ticker.prototype.getTypeId = function() {
  return this.id.split('-')[2];
}

Ticker.prototype.start = function() {
  if (!this.loop) {
    this.loop = setInterval(function() {
      if (!this.paused) {
        this.setCurrentTime(this.currentTime + 1);
      }
    }.bind(this), 1000);
  }
}

Ticker.prototype.stop = function() {
  if (this.loop) {
    clearInterval(this.loop);
  }
}

Ticker.prototype.pause = function() {
  return this.paused = !this.paused;
}

Ticker.prototype.getTime = function(type) {
  type = type || this.currentType;
  return this[type] + this.currentTime;
}

Ticker.prototype.save = function() {
  this.stop();
  this.client.set(this.id, this.currentTime);
}
