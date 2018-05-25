export class Earth {

  constructor (birthdate)
  {
    this.birthdate=birthdate;
    this.currentDate=new Date();
  }

  BirthdateInSeconds() {
    var birth = this.birthdate.getTime();
    return birth;
  }

  CurrentDateInSeconds() {
    var now = this.currentDate.getTime()/1000;
    return now;
  }

  GetAgeInSeconds() {
    var now = this.currentDate.getTime()/1000;
    var birth = this.birthdate.getTime()/1000;
    var ageInSeconds = now - birth;

    return ageInSeconds;
  }

  AgeOnEarth(birth) {
    var now = this.currentDate.getTime()/1000;
    birth = this.birthdate.getTime()/1000;
    var ageInSeconds = now - birth;

    var ageInYears = Math.floor(ageInSeconds * (1/365.25) * (1/24) * (1/60) * (1/60));

    return ageInYears;
  }

  //one earth yr = 87.97 mercury yr
  AgeOnMercury(birth) {
    var now = this.currentDate.getTime()/1000;
    birth = this.birthdate.getTime()/1000;
    var ageInSeconds = now - birth;

    var ageInMercuryYears = Math.floor(ageInSeconds * (1/87.97) * (1/24) * (1/60) * (1/60));

    return ageInMercuryYears;
  }

  //one earth yr = 87.97 venus yr
  AgeOnVenus(birth) {
    var now = this.currentDate.getTime()/1000;
    birth = this.birthdate.getTime()/1000;
    var ageInSeconds = now - birth;

    var ageInMercuryYears = Math.floor(ageInSeconds * (1/224.7) * (1/24) * (1/60) * (1/60));

    return ageInMercuryYears;
  }

  //one earth yr = 1.88 mars yr
  AgeOnMars(birth) {
    var now = this.currentDate.getTime()/1000;
    birth = this.birthdate.getTime()/1000;
    var ageInSeconds = now - birth;

    var ageInMarsYears = Math.floor(ageInSeconds * (1/686.67) * (1/24) * (1/60) * (1/60));

    return ageInMarsYears;
  }

  //one earth yr = 1.88 AgeOnJupiter yr
  AgeOnJupiter(birth) {
    var now = this.currentDate.getTime()/1000;
    birth = this.birthdate.getTime()/1000;
    var ageInSeconds = now - birth;

    var ageInJupiterYears = Math.floor(ageInSeconds * (1/4331.865) * (1/24) * (1/60) * (1/60));

    return ageInJupiterYears;
  }
}
