export default class DateFormatter {
  constructor() {
    this.datetime = new Date();
  }

  getDate() {
    const date = this.datetime.getDays() + '/' + this.datetime.getMonths() + '/' + this.datetime.getYears();
    return date;
  }

  getTime() {
    let time = '';
    const hours = this.datetime.getHours();
    let minutes = this.datetime.getMinutes();
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    
    if (hours > 11) {
      time = hours - 12 + ':' + minutes + 'pm';
    } else {
      time = hours + ':' + minutes + 'am';
    }
    
    return time;
  }
}
